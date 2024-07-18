import { svgPatterns } from "../constants";
import type { SvgProperties } from "../types";
import { calculateCoverDimensions } from "./calculateCoverDimensions";

async function getPatternSvg(backgroundPattern?: string): Promise<string> {
  if (backgroundPattern && svgPatterns.hasOwnProperty(backgroundPattern)) {
    return svgPatterns[backgroundPattern]?.() ?? "";
  }
  return "";
}

async function getBackgroundImageSvg({
  backgroundImageBase64,
  width,
  height,
}: {
  backgroundImageBase64?: string;
  width: number;
  height: number;
}): Promise<string> {
  if (!backgroundImageBase64) {
    return "";
  }

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

  return `<image href="${backgroundImageBase64}" x="${x}" y="${y}" width="${coverWidth}" height="${coverHeight}" />`;
}

function getTextAnchor(alignment: string): string {
  switch (alignment) {
    case "left":
      return "start";
    case "center":
      return "middle";
    case "right":
      return "end";
    default:
      return "middle";
  }
}

function getTextX(alignment: string): string {
  switch (alignment) {
    case "left":
      return "2%";
    case "center":
      return "50%";
    case "right":
      return "98%";
    default:
      return "50%";
  }
}

function getOverlayTextSvg({
  overlayText,
  overlayTextColor,
  overlayTextAlignment,
  fontSize,
  fontWeight,
  fontFamily,
  backgroundColor,
}: {
  overlayText?: string;
  overlayTextColor: string;
  overlayTextAlignment: string;
  fontSize: number;
  fontWeight: string;
  fontFamily: string;
  backgroundColor: string;
}): string {
  if (!overlayText) {
    return "";
  }

  const textAnchor = getTextAnchor(overlayTextAlignment);
  const textX = getTextX(overlayTextAlignment);

  return `
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

export async function generateSvgHtml({
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
}: SvgProperties): Promise<string> {
  const patternSvg = await getPatternSvg(backgroundPattern);
  const backgroundImageSvg = await getBackgroundImageSvg({
    backgroundImageBase64,
    width,
    height,
  });
  const overlayTextSvg = getOverlayTextSvg({
    overlayText,
    overlayTextColor,
    overlayTextAlignment,
    fontSize,
    fontWeight,
    fontFamily,
    backgroundColor,
  });

  const defsSection = patternSvg ? `<defs>${patternSvg}</defs>` : "";
  const patternRect =
    backgroundPattern && backgroundPattern !== "none"
      ? `<rect width="100%" height="100%" fill="url(#${backgroundPattern})" />`
      : "";

  return `<svg viewBox="0 0 ${width} ${height}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  ${defsSection}
  <rect width="100%" height="100%" fill="${backgroundColor}" />
  ${patternRect}
  ${backgroundImageSvg}
  ${overlayTextSvg}
</svg>`;
}
