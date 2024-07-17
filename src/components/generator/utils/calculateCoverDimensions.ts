export function calculateCoverDimensions(imgWidth: number,
  imgHeight: number,
  containerWidth: number,
  containerHeight: number) {
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
}
