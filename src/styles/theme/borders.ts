/**
 * Border Design Tokens
 * Extracted from Figma design system
 */

export const borders = {
  // Border Radius
  radius: {
    0: "0px",
    sm: "6px",
    md: "16px",
    full: "9999px",
    // Fixed radius values
    fixed6: "6px",
    fixed8: "8px",
    fixed12: "12px",
    fixed16: "16px",
  },

  // Border Widths
  width: {
    s: "1px",
  },
} as const;

export type Borders = typeof borders;
