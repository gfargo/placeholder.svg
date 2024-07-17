import { svgPatterns } from "../constants";

import type { SvgProperties } from "../types";
import { calculateCoverDimensions } from "./calculateCoverDimensions";

export async function generateSvgHtml(props: SvgProperties): Promise<string> {
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
  if (backgroundPattern && svgPatterns.hasOwnProperty(backgroundPattern)) {
    patternSvg = svgPatterns[backgroundPattern]?.() ?? "";
  }

  let svgContent = `<svg viewBox="0 0 ${width} ${height}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">${patternSvg ? "<defs>" : ""}${patternSvg}${patternSvg ? "</defs>" : ""}
      <rect width="100%" height="100%" fill="${backgroundColor}" />`;

  if (backgroundPattern && backgroundPattern !== "none") {
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
        ? "2%"
        : overlayTextAlignment === "center"
          ? "50%"
          : "98%";

    svgContent += `
      <text x="${textX}" y="50%"
            dominant-baseline="middle" text-anchor="${textAnchor}" fill="${overlayTextColor}" 
            font-size="${fontSize}" font-weight="${fontWeight}" font-family="${fontFamily}"
            style="stroke: ${backgroundColor}; stroke-width: 0.6em"
      >
        ${overlayText}
      </text>
      <text x="${textX}" y="50%" 
            dominant-baseline="middle" text-anchor="${textAnchor}" fill="${overlayTextColor}" 
            font-size="${fontSize}" font-weight="${fontWeight}" font-family="${fontFamily}">
        ${overlayText}
      </text>
      
      
    `;
  }

  svgContent += `</svg>`;
  return svgContent;
}
