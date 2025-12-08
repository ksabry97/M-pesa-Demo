/**
 * Typography Design Tokens
 * Extracted from Figma design system
 */

export const fontFamily = {
  primary: "'Poppins', sans-serif",
} as const;

export const fontWeights = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

// Title Styles
export const title = {
  title1: {
    fontFamily: fontFamily.primary,
    fontSize: "72px",
    fontWeight: fontWeights.bold,
    lineHeight: "88px",
    letterSpacing: "-0.8px",
  },
} as const;

// Heading Styles
export const heading = {
  h3: {
    fontFamily: fontFamily.primary,
    fontSize: "40px",
    fontWeight: fontWeights.bold,
    lineHeight: "48px",
    letterSpacing: "-0.3px",
  },
  h4: {
    fontFamily: fontFamily.primary,
    fontSize: "32px",
    fontWeight: fontWeights.bold,
    lineHeight: "38px",
    letterSpacing: "-0.2px",
  },
  h5: {
    fontFamily: fontFamily.primary,
    fontSize: "24px",
    fontWeight: fontWeights.medium,
    lineHeight: "30px",
    letterSpacing: "-0.15px",
  },
  h6: {
    fontFamily: fontFamily.primary,
    fontSize: "20px",
    fontWeight: fontWeights.bold,
    lineHeight: "24px",
    letterSpacing: "0px",
  },
  h6Medium: {
    fontFamily: fontFamily.primary,
    fontSize: "20px",
    fontWeight: fontWeights.medium,
    lineHeight: "24px",
    letterSpacing: "0px",
  },
} as const;

// Body Text Styles
export const body = {
  body2: {
    regular: {
      fontFamily: fontFamily.primary,
      fontSize: "16px",
      fontWeight: fontWeights.regular,
      lineHeight: "24px",
      letterSpacing: "0px",
    },
    medium: {
      fontFamily: fontFamily.primary,
      fontSize: "16px",
      fontWeight: fontWeights.medium,
      lineHeight: "24px",
      letterSpacing: "0px",
    },
  },
  body3: {
    regular: {
      fontFamily: fontFamily.primary,
      fontSize: "14px",
      fontWeight: fontWeights.regular,
      lineHeight: "20px",
      letterSpacing: "0px",
    },
    medium: {
      fontFamily: fontFamily.primary,
      fontSize: "14px",
      fontWeight: fontWeights.medium,
      lineHeight: "20px",
      letterSpacing: "0px",
    },
  },
  body4: {
    regular: {
      fontFamily: fontFamily.primary,
      fontSize: "12px",
      fontWeight: fontWeights.regular,
      lineHeight: "16px",
      letterSpacing: "0px",
    },
    medium: {
      fontFamily: fontFamily.primary,
      fontSize: "12px",
      fontWeight: fontWeights.medium,
      lineHeight: "16px",
      letterSpacing: "0px",
    },
  },
} as const;

// Label Styles
export const label = {
  label1: {
    regular: {
      fontFamily: fontFamily.primary,
      fontSize: "16px",
      fontWeight: fontWeights.regular,
      lineHeight: "22px",
      letterSpacing: "-0.18px",
    },
    bold: {
      fontFamily: fontFamily.primary,
      fontSize: "16px",
      fontWeight: fontWeights.bold,
      lineHeight: "22px",
      letterSpacing: "-0.18px",
    },
  },
  label2: {
    regular: {
      fontFamily: fontFamily.primary,
      fontSize: "14px",
      fontWeight: fontWeights.regular,
      lineHeight: "20px",
      letterSpacing: "-0.16px",
    },
    semiBold: {
      fontFamily: fontFamily.primary,
      fontSize: "14px",
      fontWeight: fontWeights.semibold,
      lineHeight: "20px",
      letterSpacing: "-0.16px",
    },
  },
  label3: {
    medium: {
      fontFamily: fontFamily.primary,
      fontSize: "12px",
      fontWeight: fontWeights.medium,
      lineHeight: "16px",
      letterSpacing: "-0.12px",
    },
  },
} as const;

// Currency Symbol Styles
export const currency = {
  currencyLg: {
    fontFamily: fontFamily.primary,
    fontSize: "24px",
    fontWeight: fontWeights.regular,
    lineHeight: "24px",
    letterSpacing: "0px",
  },
} as const;

export const typography = {
  fontFamily,
  fontWeights,
  title,
  heading,
  body,
  label,
  currency,
} as const;

export type Typography = typeof typography;
