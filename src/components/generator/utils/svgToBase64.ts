export function svgToBase64(svgHtml: string): string {
  return `data:image/svg+xml;base64,${btoa(svgHtml)}`;
}
