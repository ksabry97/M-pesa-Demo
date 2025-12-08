/**
 * Design System Utility Hook
 * Provides programmatic access to theme tokens
 */

import { theme } from "../styles/theme";

/**
 * Hook to access theme tokens in React components
 *
 * @example
 * const { colors, typography, spacing } = useTheme();
 *
 * const customStyle = {
 *   color: colors.accent.DEFAULT,
 *   fontSize: typography.heading.h3.fontSize,
 *   padding: spacing.padding.md,
 * };
 */
export const useTheme = () => {
  return theme;
};

/**
 * Utility function to get CSS variable value
 *
 * @example
 * const accentColor = getCSSVariable('--color-accent');
 */
export const getCSSVariable = (variableName: string): string => {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
};

/**
 * Utility function to set CSS variable value
 * Useful for dynamic theming
 *
 * @example
 * setCSSVariable('--color-accent', '#ff0000');
 */
export const setCSSVariable = (variableName: string, value: string): void => {
  if (typeof window === "undefined") return;
  document.documentElement.style.setProperty(variableName, value);
};

export default useTheme;
