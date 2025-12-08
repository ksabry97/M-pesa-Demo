/**
 * Main Theme Export
 * Central hub for all design tokens
 */

import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { borders } from "./borders";
import { shadows } from "./shadows";
import { components } from "./components";

export const theme = {
  colors,
  typography,
  spacing,
  borders,
  shadows,
  components,
} as const;

// Re-export individual token modules for convenience
export { colors } from "./colors";
export { typography } from "./typography";
export { spacing } from "./spacing";
export { borders } from "./borders";
export { shadows } from "./shadows";
export { components } from "./components";

// Export types
export type Theme = typeof theme;

export default theme;
