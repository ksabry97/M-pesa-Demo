/**
 * Component-Specific Design Tokens
 * Extracted from Figma design system
 */

export const components = {
  // Component Sizes
  size: {
    md: "40px",
    lg: "48px",
  },

  // Product Card
  productCard: {
    minWidth: "171.5px",
    maxWidth: "260px",
    borderRadius: "8px",
  },

  // Currency
  currency: {
    symbol: "$",
  },
} as const;

export type Components = typeof components;
