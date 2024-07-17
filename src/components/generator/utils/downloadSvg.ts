export function downloadSvg(
  svgHtml: string,
  fileName = "placeholder.svg",
): void {
  const blob = new Blob([svgHtml], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
