import { svgPatterns } from "./constants";
import { type SvgProperties } from "./types";

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      resolve(base64String);
    };
    reader.onerror = () => {
      reject(new Error("Failed to read file as Base64"));
    };
    reader.readAsDataURL(file);
  });
};

const calculateCoverDimensions = (
  imgWidth: number,
  imgHeight: number,
  containerWidth: number,
  containerHeight: number,
) => {
  const imgAspectRatio = imgWidth / imgHeight;
  const containerAspectRatio = containerWidth / containerHeight;

  let width, height, x, y;

  if (imgAspectRatio > containerAspectRatio) {
    // Image is wider than the container
    width = containerWidth;
    height = containerWidth / imgAspectRatio;
    x = 0;
    y = (containerHeight - height) / 2;
  } else {
    // Image is taller than the container
    width = containerHeight * imgAspectRatio;
    height = containerHeight;
    x = (containerWidth - width) / 2;
    y = 0;
  }

  return { width, height, x, y };
};

export const generateSvgHtml = async (props: SvgProperties): Promise<string> => {
  const {
    height,
    width,
    backgroundColor,
    backgroundPattern,
    backgroundImageBase64,
    overlayText,
    overlayTextColor = "#000000",
    overlayTextAlignment = "center",
    fontSize = 16,
    fontWeight = "normal",
    fontFamily = "Arial, sans-serif",
  } = props;

  let patternSvg = "";
  if (backgroundPattern && svgPatterns[backgroundPattern]) {
    patternSvg = svgPatterns[backgroundPattern];
  }

  let svgContent = `<svg viewBox="0 0 ${width} ${height}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">${patternSvg ? "<defs>" : ""}${patternSvg}${patternSvg ? "</defs>" : ""}
      <rect width="100%" height="100%" fill="${backgroundColor}" />`;

  if (backgroundPattern) {
    svgContent += `<rect width="100%" height="100%" fill="url(#${backgroundPattern})" />`;
  }

  if (backgroundImageBase64) {
    const img = new Image();
    img.src = backgroundImageBase64;
    await img.decode();

    const { width: imgWidth, height: imgHeight } = img;
    const {
      width: coverWidth,
      height: coverHeight,
      x,
      y,
    } = calculateCoverDimensions(imgWidth, imgHeight, width, height);

    svgContent += `<image href="${backgroundImageBase64}" x="${x}" y="${y}" width="${coverWidth}" height="${coverHeight}" />`;
  }

  if (overlayText) {
    const textAnchor =
      overlayTextAlignment === "left"
        ? "start"
        : overlayTextAlignment === "center"
          ? "middle"
          : "end";
    const textX =
      overlayTextAlignment === "left"
        ? "0%"
        : overlayTextAlignment === "center"
          ? "50%"
          : "100%";

    svgContent += `
      <text x="${textX}" y="50%" 
            dominant-baseline="middle" text-anchor="${textAnchor}" fill="${overlayTextColor}" 
            font-size="${fontSize}" font-weight="${fontWeight}" font-family="${fontFamily}">
        ${overlayText}
      </text>
    `;
  }

  svgContent += `</svg>`;
  return svgContent;
};

export const svgToBase64 = (svgHtml: string): string => {
  return `data:image/svg+xml;base64,${btoa(svgHtml)}`;
};

export const downloadSvg = (
  svgHtml: string,
  fileName = "placeholder.svg",
): void => {
  const blob = new Blob([svgHtml], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
