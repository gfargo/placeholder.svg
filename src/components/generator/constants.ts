const DEFAULT_STROKE = "#8a72a1";
const DEFAULT_FILL = "#705a86";

export type SVGPatternMap = Record<string, (stroke?: string, fill?: string) => string>;

export const svgPatterns: SVGPatternMap = {
  dots: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="dots" patternUnits="userSpaceOnUse" width="10" height="10">
       <circle cx="5" cy="5" r="4" fill="${stroke}10" />
    </pattern>`,

  checkered: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="checkered" patternUnits="userSpaceOnUse" width="10" height="10">
      <rect x="0" y="0" width="5" height="5" fill="${stroke}" />
      <rect x="5" y="5" width="5" height="5" fill="${stroke}" />
    </pattern>`,

  crosshatch: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="crosshatch" patternUnits="userSpaceOnUse" width="10" height="10">
      <line x1="0" y1="0" x2="10" y2="10" stroke="${stroke}" stroke-width="1" />
      <line x1="10" y1="0" x2="0" y2="10" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  circles: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="circles" patternUnits="userSpaceOnUse" width="20" height="20">
      <circle cx="10" cy="10" r="8" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  bigCrosshatch: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="bigCrosshatch" patternUnits="userSpaceOnUse" width="20" height="20">
      <line x1="10" y1="10" x2="0" y2="0" stroke="${stroke}" stroke-width="1" />
      <line x1="10" y1="10" x2="20" y2="0" stroke="${stroke}" stroke-width="1" />
      <line x1="10" y1="10" x2="0" y2="20" stroke="${stroke}" stroke-width="1" />
      <line x1="10" y1="10" x2="20" y2="20" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  zigzag: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="zigzag" patternUnits="userSpaceOnUse" width="20" height="10">
      <path d="M0 5 L5 0 L10 5 L5 10 Z" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  hexagons: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="hexagons" patternUnits="userSpaceOnUse" width="20" height="20">
      <polygon points="5,1 9,3 9,7 5,9 1,7 1,3" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  waves: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="waves" patternUnits="userSpaceOnUse" width="15" height="15">
      <path d="M 0 5 Q 2.5 0 5 5 T 15 5 " fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  grid: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="grid" patternUnits="userSpaceOnUse" width="10" height="10">
      <path d="M 0 0 L 0 10 M 0 0 L 10 0" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  concentricCircles: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="concentricCircles" patternUnits="userSpaceOnUse" width="60" height="60">
      <circle cx="30" cy="30" r="2" fill="none" stroke="${stroke}" stroke-width="1" />
      <circle cx="30" cy="30" r="6" fill="none" stroke="${stroke}" stroke-width="1" />
      <circle cx="30" cy="30" r="10" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  stripes: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="stripes" patternUnits="userSpaceOnUse" width="10" height="10">
      <line x1="0" y1="0" x2="10" y2="0" stroke="${stroke}" stroke-width="2" />
      <line x1="0" y1="5" x2="10" y2="5" stroke="${stroke}" stroke-width="2" />
      <line x1="0" y1="10" x2="10" y2="10" stroke="${stroke}" stroke-width="2" />
    </pattern>`,

  diagonalStripes: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="diagonalStripes" patternUnits="userSpaceOnUse" width="10" height="10">
      <line x1="0" y1="0" x2="11" y2="11" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  triangles: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="triangles" patternUnits="userSpaceOnUse" width="36" height="36">
      <polygon points="5,0 10,10 0,10" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  stars: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="stars" patternUnits="userSpaceOnUse" width="100" height="100">
      <polygon points="10,1 12,8 19,8 13,12 15,19 10,14 5,19 7,12 1,8 8,8" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  honeycomb: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="honeycomb" patternUnits="userSpaceOnUse" width="10" height="8.66">
      <polygon points="5,0 10,2.88 10,5.78 5,8.66 0,5.78 0,2.88" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  plus: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="plus" patternUnits="userSpaceOnUse" width="20" height="20">
      <line x1="5" y1="0" x2="5" y2="10" stroke="${stroke}" stroke-width="1" />
      <line x1="0" y1="5" x2="10" y2="5" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  dashed: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="dashed" patternUnits="userSpaceOnUse" width="10" height="10">
      <line x1="0" y1="5" x2="10" y2="5" stroke="${stroke}" stroke-width="1" stroke-dasharray="2,2" />
      <line x1="5" y1="0" x2="5" y2="10" stroke="${stroke}" stroke-width="1" stroke-dasharray="2,2" />
    </pattern>`,

  diamondsGrid: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="diamondsGrid" patternUnits="userSpaceOnUse" width="36" height="36">
      <polygon points="18,13 23,18 18,23 13,18" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  chevrons: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="chevrons" patternUnits="userSpaceOnUse" width="20" height="20">
      <path d="M 0 5 L 5 0 L 10 5 L 5 10 Z" fill="none" stroke="${stroke}" stroke-width="1" />
      <path d="M 10 15 L 15 10 L 20 15 L 15 20 Z" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  floral: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="floral" patternUnits="userSpaceOnUse" width="20" height="20">
      <circle cx="10" cy="10" r="5" fill="none" stroke="${stroke}" stroke-width="1" />
      <circle cx="10" cy="10" r="2" fill="none" stroke="${stroke}" stroke-width="1" />
      <path d="M 10 0 L 10 20" fill="none" stroke="${stroke}" stroke-width="1" />
      <path d="M 0 10 L 20 10" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  spirals: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="spirals" patternUnits="userSpaceOnUse" width="20" height="20">
      <path d="M 10 10 Q 5 5 10 0 T 10 10 Q 15 15 10 20 T 10 10 Z" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  bubbles: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="bubbles" patternUnits="userSpaceOnUse" width="20" height="20">
      <circle cx="10" cy="10" r="4" fill="none" stroke="${stroke}" stroke-width="1" />
      <circle cx="5" cy="5" r="2" fill="none" stroke="${stroke}" stroke-width="1" />
      <circle cx="15" cy="15" r="2" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,

  interlockingSquares: (stroke = DEFAULT_STROKE, fill = DEFAULT_FILL) => `
    <pattern id="interlockingSquares" patternUnits="userSpaceOnUse" width="20" height="20">
      <rect x="0" y="0" width="10" height="10" fill="none" stroke="${stroke}" stroke-width="1" />
      <rect x="10" y="10" width="10" height="10" fill="none" stroke="${stroke}" stroke-width="1" />
    </pattern>`,
};
