import { svgPatterns } from "../constants";

export const getRandomSvgPattern = (): string => {
  const patternKeys = Object.keys(svgPatterns);
  const randomKey = patternKeys[Math.floor(Math.random() * patternKeys.length)];

  if (!randomKey || !svgPatterns[randomKey]) {
    return "";
  }

  return patternKeys.find((key) => key === randomKey) ?? "";
};
