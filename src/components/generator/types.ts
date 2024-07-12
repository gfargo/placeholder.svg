export type SvgProperties = {
  height: number;
  width: number;
  backgroundColor: string;
  backgroundPattern?: string; // Optional
  backgroundImageBase64?: string; // Optional
  overlayText?: string; // Optional
  overlayTextColor?: string; // Optional
  overlayTextAlignment?: "left" | "center" | "right"; // Optional
  fontSize?: number; // Optional
  fontWeight?: "normal" | "bold" | "semibold" | "light"
  fontFamily?: string; // Optional
};
