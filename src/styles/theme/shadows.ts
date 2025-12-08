/**
 * Shadow/Elevation Design Tokens
 * Extracted from Figma design system
 */

export const shadows = {
  // Elevation Levels
  elevation1Soft: "0px 3px 3px 0px rgba(0, 17, 238, 0.06)",

  // Background Blur with Drop Shadow
  backgroundBlur1: `
    0px 28px 104px 0px rgba(0, 17, 238, 0.06),
    blur(62.68px)
  `,
} as const;

export type Shadows = typeof shadows;
