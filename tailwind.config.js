import { colors } from "./src/styles/theme/colors";
import { typography } from "./src/styles/theme/typography";
import { spacing } from "./src/styles/theme/spacing";
import { borders } from "./src/styles/theme/borders";
import { shadows } from "./src/styles/theme/shadows";
import { components } from "./src/styles/theme/components";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Import from colors.ts - single source of truth
        accent: colors.accent,
        background: colors.background,
        text: colors.text,
        icon: colors.icon,
        border: colors.border,
        button: {
          fill: {
            bg: colors.components.button.fill.bg,
            fg: colors.components.button.fill.fg,
          },
          outline: {
            bg: colors.components.button.outline.bg,
            fg: colors.components.button.outline.fg,
            border: colors.components.button.outline.border,
          },
          ghost: {
            bg: colors.components.button.ghost.bg,
          },
          alpha: {
            bg: colors.components.button.alpha.bg,
            fg: colors.components.button.alpha.fg,
          },
        },
        input: {
          bg: colors.components.input.bg,
          fg: colors.components.input.fg,
          border: colors.components.input.border,
          borderActive: colors.components.input.borderActive,
          placeholder: colors.components.input.placeholder,
        },
        productCard: {
          bg: colors.components.productCard.bg,
        },
        tag: {
          hotOffers: colors.components.productCard.tags.hotOffers.bg,
          bestSellerBg: colors.components.productCard.tags.bestSeller.bg,
          bestSellerFg: colors.components.productCard.tags.bestSeller.fg,
          lowStockBg: colors.components.productCard.tags.lowStock.bg,
          lowStockFg: colors.components.productCard.tags.lowStock.fg,
        },
        rating: {
          fill: colors.components.rating.bgFill,
          empty: colors.components.rating.bgEmpty,
        },
      },
      fontFamily: {
        sans: [typography.fontFamily.primary, "sans-serif"],
        poppins: [typography.fontFamily.primary, "sans-serif"],
      },
      fontSize: {
        "title-1": [
          typography.title.title1.fontSize,
          {
            lineHeight: typography.title.title1.lineHeight,
            letterSpacing: typography.title.title1.letterSpacing,
          },
        ],
        h3: [
          typography.heading.h3.fontSize,
          {
            lineHeight: typography.heading.h3.lineHeight,
            letterSpacing: typography.heading.h3.letterSpacing,
          },
        ],
        h4: [
          typography.heading.h4.fontSize,
          {
            lineHeight: typography.heading.h4.lineHeight,
            letterSpacing: typography.heading.h4.letterSpacing,
          },
        ],
        h5: [
          typography.heading.h5.fontSize,
          {
            lineHeight: typography.heading.h5.lineHeight,
            letterSpacing: typography.heading.h5.letterSpacing,
          },
        ],
        h6: [
          typography.heading.h6.fontSize,
          {
            lineHeight: typography.heading.h6.lineHeight,
            letterSpacing: typography.heading.h6.letterSpacing,
          },
        ],
        "body-2": [
          typography.body.body2.regular.fontSize,
          {
            lineHeight: typography.body.body2.regular.lineHeight,
            letterSpacing: typography.body.body2.regular.letterSpacing,
          },
        ],
        "body-3": [
          typography.body.body3.regular.fontSize,
          {
            lineHeight: typography.body.body3.regular.lineHeight,
            letterSpacing: typography.body.body3.regular.letterSpacing,
          },
        ],
        "body-4": [
          typography.body.body4.regular.fontSize,
          {
            lineHeight: typography.body.body4.regular.lineHeight,
            letterSpacing: typography.body.body4.regular.letterSpacing,
          },
        ],
        "label-1": [
          typography.label.label1.regular.fontSize,
          {
            lineHeight: typography.label.label1.regular.lineHeight,
            letterSpacing: typography.label.label1.regular.letterSpacing,
          },
        ],
        "label-2": [
          typography.label.label2.regular.fontSize,
          {
            lineHeight: typography.label.label2.regular.lineHeight,
            letterSpacing: typography.label.label2.regular.letterSpacing,
          },
        ],
        "label-3": [
          typography.label.label3.medium.fontSize,
          {
            lineHeight: typography.label.label3.medium.lineHeight,
            letterSpacing: typography.label.label3.medium.letterSpacing,
          },
        ],
        "currency-lg": [
          typography.currency.currencyLg.fontSize,
          {
            lineHeight: typography.currency.currencyLg.lineHeight,
            letterSpacing: typography.currency.currencyLg.letterSpacing,
          },
        ],
      },
      fontWeight: {
        regular: typography.fontWeights.regular,
        medium: typography.fontWeights.medium,
        semibold: typography.fontWeights.semibold,
        bold: typography.fontWeights.bold,
      },
      spacing: spacing,
      borderRadius: borders.radius,
      boxShadow: shadows,
      width: {
        "component-md": components.size.md,
        "component-lg": components.size.lg,
        "product-card-min": components.productCard.minWidth,
        "product-card-max": components.productCard.maxWidth,
      },
      height: {
        "component-md": components.size.md,
        "component-lg": components.size.lg,
      },
    },
  },
  plugins: [],
};
