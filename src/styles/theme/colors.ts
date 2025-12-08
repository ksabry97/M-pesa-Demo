/**
 * Color Design Tokens
 * Extracted from Figma design system
 */

export const colors = {
  // Primary & Accent Colors
  accent: {
    DEFAULT: "#5151cd",
    darker: "#5753c6",
    darker2: "#272962",
    disabled: "#5b62fd6b",
    subtle: "#0011ee0f",
  },

  // Background Colors
  background: {
    primary: "#fbfdfc",
    surface: "#fffffffa",
    panel: "#f0f1fe",
    accent: "#5151cd",
    accentDarker2: "#272962",
    accentDisabled: "#5b62fd6b",
  },

  // Text Colors
  text: {
    primary: "#5f6563",
    highContrast: "#1a211e",
    white: "#fdfdff",
    accent: "#5753c6",
    disabled: "#5f6563",
  },

  // Icon Colors
  icon: {
    primary: "#5f6563",
    accent: "#5151cd",
    accentDarker2: "#272962",
    white: "#fdfdff",
  },

  // Border Colors
  border: {
    primary: "#d7dad9",
    accent: "#5753c6",
  },

  // Component-Specific Colors
  components: {
    // Button Variants
    button: {
      fill: {
        bg: "#272962",
        fg: "#ffffff",
      },
      outline: {
        bg: "#fbfdfc",
        fg: "#272962",
        border: "#272962",
      },
      ghost: {
        bg: "#fbfdfc",
        border: "#ffffff00",
      },
      alpha: {
        bg: "#0000ff08",
        fg: "#272962",
      },
    },

    // Input States
    input: {
      bg: "#fdfdff",
      fg: "#1a211e",
      border: "#e6e7ff",
      borderActive: "#cbcdff",
      active: "#fdfdff",
      placeholder: "#868e8b",
    },

    // Product Card Tags
    productCard: {
      bg: "#fdfffeed",
      tags: {
        hotOffers: {
          bg: "#e5484d",
        },
        bestSeller: {
          bg: "#1c2024",
          fg: "#ffffff",
        },
        lowStock: {
          bg: "#df2600d1",
          fg: "#ffffff",
        },
        newArrivals: {
          fgInverted: "#272962",
        },
      },
    },

    // Rating Colors
    rating: {
      bgFill: "#f76b15",
      bgEmpty: "#ed6c008c",
      bgHalf: "#f76b15",
    },
  },

  // Effect Colors
  effects: {
    dropShadow: "#0011ee0f",
  },
} as const;

export type Colors = typeof colors;
