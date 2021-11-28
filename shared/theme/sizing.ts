export const baseUnit = 8;
export const baseFontSize = 16;

export const pxToRem = (pixel = baseFontSize): string => `${pixel / baseFontSize}rem`;

export const spacing = (multiplier = 1): string => `${(baseUnit * multiplier) / baseFontSize}rem`;
