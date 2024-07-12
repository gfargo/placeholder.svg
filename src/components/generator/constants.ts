export const svgPatterns: Record<string, string> = {
  pattern1: `<pattern id="pattern1" patternUnits="userSpaceOnUse" width="10" height="10">
               <rect width="10" height="10" fill="#fff" />
               <circle cx="5" cy="5" r="4" fill="#000" />
             </pattern>`,
  pattern2: `<pattern id="pattern2" patternUnits="userSpaceOnUse" width="10" height="10">
               <rect width="10" height="10" fill="#fff" />
               <rect x="0" y="0" width="5" height="5" fill="#000" />
               <rect x="5" y="5" width="5" height="5" fill="#000" />
             </pattern>`,
  pattern3: `<pattern id="pattern3" patternUnits="userSpaceOnUse" width="10" height="10">
               <rect width="10" height="10" fill="#fff" />
               <line x1="0" y1="0" x2="10" y2="10" stroke="#000" stroke-width="1" />
               <line x1="10" y1="0" x2="0" y2="10" stroke="#000" stroke-width="1" />
             </pattern>`,
  pattern4: `<pattern id="pattern4" patternUnits="userSpaceOnUse" width="20" height="20">
               <rect width="20" height="20" fill="#fff" />
               <circle cx="10" cy="10" r="8" fill="none" stroke="#000" stroke-width="1" />
             </pattern>`,
  pattern5: `<pattern id="pattern5" patternUnits="userSpaceOnUse" width="10" height="10">
               <rect width="10" height="10" fill="#fff" />
               <path d="M 0 0 L 10 10 M 10 0 L 0 10" stroke="#000" stroke-width="1" />
             </pattern>`,
};
