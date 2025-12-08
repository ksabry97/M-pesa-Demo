/**
 * Spacing Design Tokens
 * Extracted from Figma design system
 */

export const spacing = {
  // Base Spacing Scale
  0: "0px",
  "3xs": "1.5px",
  "2xs": "4px",
  xs: "8px",
  xs2: "4px",
  sm: "16px",
  md: "24px",
  lg: "32px",

  // Padding Tokens
  padding: {
    0: "0px",
    "2xs": "4px",
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    // Specific component padding
    s: "8px",
  },
} as const;

export type Spacing = typeof spacing;
