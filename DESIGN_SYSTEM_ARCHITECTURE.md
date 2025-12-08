# Design System Architecture - Single Source of Truth

## 🎯 Overview

Our design system follows a **single source of truth** principle where all design tokens are defined once in TypeScript files and reused everywhere else.

## 📁 Architecture

```
Design Tokens (TypeScript)
        ↓
    colors.ts (SINGLE SOURCE OF TRUTH)
    typography.ts
    spacing.ts
    borders.ts
    shadows.ts
    components.ts
        ↓
        ├──→ Tailwind Config (imports tokens)
        ├──→ React Components (use Tailwind classes)
        ├──→ useTheme Hook (programmatic access)
        └──→ CSS (uses Tailwind's theme() function)
```

## ✅ Benefits

1. **No Duplication** - Colors defined once in `colors.ts`
2. **Type Safety** - Full TypeScript support
3. **Single Update** - Change once, update everywhere
4. **Consistency** - Impossible to have mismatched values
5. **Maintainability** - Easy to update from Figma

## 📝 How It Works

### 1. **Define Once** (colors.ts)

```typescript
export const colors = {
  accent: {
    DEFAULT: "#5151cd",
    darker: "#5753c6",
    darker2: "#272962",
  },
  // ... all other colors
} as const;
```

### 2. **Import into Tailwind** (tailwind.config.js)

```javascript
import { colors } from "./src/styles/theme/colors";

export default {
  theme: {
    extend: {
      colors: {
        accent: colors.accent,
        background: colors.background,
        // ... etc
      },
    },
  },
};
```

### 3. **Use Everywhere**

#### In React Components (Tailwind):

```tsx
<div className="bg-accent text-white">Content</div>
```

#### In TypeScript:

```typescript
import { colors } from "@/styles/theme";
const primaryColor = colors.accent.DEFAULT;
```

#### In CSS (via Tailwind theme):

```css
.custom-class {
  background: theme("colors.accent.DEFAULT");
}
```

## 🔄 Updating Colors

To update colors when the Figma design changes:

1. **Edit ONLY** `src/styles/theme/colors.ts`
2. Save the file
3. All Tailwind classes, React components, and TypeScript code automatically use the new values

No need to update:

- ❌ CSS variables
- ❌ Tailwind config (it imports from colors.ts)
- ❌ Multiple files

## 📂 Token Files Structure

```
src/styles/theme/
├── colors.ts          ← SINGLE SOURCE for all colors
├── typography.ts      ← SINGLE SOURCE for typography
├── spacing.ts         ← SINGLE SOURCE for spacing
├── borders.ts         ← SINGLE SOURCE for borders
├── shadows.ts         ← SINGLE SOURCE for shadows
├── components.ts      ← SINGLE SOURCE for component tokens
└── index.ts           ← Aggregates all tokens
```

## 🎨 Complete Flow

```
1. Designer updates Figma
        ↓
2. Extract new color values
        ↓
3. Update colors.ts ONLY
        ↓
4. Tailwind auto-imports new values
        ↓
5. All components use new colors automatically
        ↓
6. No other files need updating!
```

## 🚀 Usage Examples

### Colors

```tsx
// Tailwind class (recommended)
<button className="bg-button-fill-bg text-button-fill-fg">Click Me</button>;

// Programmatic access
import { colors } from "@/styles/theme";
const bgColor = colors.components.button.fill.bg;
```

### Typography

```tsx
// Tailwind class
<h1 className="text-h3 font-bold">Heading</h1>;

// Programmatic access
import { typography } from "@/styles/theme";
const fontSize = typography.heading.h3.fontSize;
```

### Spacing

```tsx
// Tailwind class
<div className="p-md m-lg">Content</div>;

// Programmatic access
import { spacing } from "@/styles/theme";
const padding = spacing.padding.md;
```

## 🎯 Key Principles

1. **Define Once** - All tokens in TypeScript files
2. **Import Everywhere** - Tailwind config imports tokens
3. **Use Tailwind Classes** - Primary way to apply styles
4. **Programmatic Access** - Use theme object when needed
5. **No Duplication** - Never hardcode values

## 📚 Related Files

- **Token Definitions**: `src/styles/theme/*.ts`
- **Tailwind Config**: `tailwind.config.js`
- **CSS**: `src/index.css` (minimal, uses theme())
- **Usage Examples**: `src/components/examples/`
- **Hook**: `src/hooks/useTheme.ts`

---

This architecture ensures that your design system is maintainable, type-safe, and follows best practices for modern web development. All design tokens flow from a single source, making updates simple and error-free.
