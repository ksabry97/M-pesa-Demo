# Design System Documentation

## Overview

This design system has been extracted from the Figma design file and implemented as a comprehensive set of design tokens for the M-Pesa Marketplace application.

## Structure

```
src/styles/
├── theme/
│   ├── colors.ts          # Color tokens
│   ├── typography.ts      # Typography tokens
│   ├── spacing.ts         # Spacing tokens
│   ├── borders.ts         # Border tokens
│   ├── shadows.ts         # Shadow tokens
│   ├── components.ts      # Component-specific tokens
│   └── index.ts           # Main theme export
└── index.css              # CSS variables
```

## Usage

### 1. Using with TypeScript/JavaScript

```typescript
import { theme } from "@/styles/theme";

// Access color tokens
const primaryColor = theme.colors.accent.DEFAULT; // #5151cd

// Access typography tokens
const headingStyle = theme.typography.heading.h3;

// Access spacing tokens
const padding = theme.spacing.padding.md; // 24px
```

### 2. Using with Tailwind CSS

The design tokens are integrated into Tailwind's configuration. You can use them directly in your className:

```tsx
// Colors
<div className="bg-accent text-white">Button</div>
<div className="bg-background-primary text-text-highContrast">Content</div>

// Typography
<h1 className="text-h3 font-bold">Heading</h1>
<p className="text-body-2 font-regular">Body text</p>

// Spacing
<div className="p-md m-lg">Padded content</div>

// Border Radius
<div className="rounded-md">Card</div>
<button className="rounded-full">Pill button</button>

// Shadows
<div className="shadow-elevation-1">Card with shadow</div>

// Component Sizes
<button className="w-component-lg h-component-lg">Square button</button>
```

### 3. Using CSS Variables

CSS variables are available in `index.css` and can be used in any CSS file:

```css
.custom-button {
  background-color: var(--btn-fill-bg);
  color: var(--btn-fill-fg);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-elevation-1);
}

.custom-heading {
  font-size: var(--font-size-h3);
  line-height: var(--line-height-h3);
  font-weight: var(--font-weight-bold);
}
```

## Design Tokens Reference

### Colors

#### Accent Colors

- **Primary Accent**: `#5151cd`
- **Accent Darker**: `#5753c6`
- **Accent Darker 2**: `#272962`

#### Backgrounds

- **Primary Background**: `#fbfdfc`
- **Surface**: `#fffffffa`
- **Panel**: `#f0f1fe`

#### Text Colors

- **Primary Text**: `#5f6563`
- **High Contrast**: `#1a211e`
- **White Text**: `#fdfdff`

#### Component Colors

- **Button Fill**: Background `#272962`, Foreground `#ffffff`
- **Button Outline**: Background `#fbfdfc`, Foreground/Border `#272962`
- **Input Background**: `#fdfdff`
- **Product Card Tags**: Hot Offers `#e5484d`, Best Seller `#1c2024`

### Typography

#### Font Family

- **Primary**: Poppins (weights: 400, 500, 600, 700)

#### Heading Sizes

- **H3**: 40px / 48px line-height, Bold
- **H4**: 32px / 38px line-height, Bold
- **H5**: 24px / 30px line-height, Medium
- **H6**: 20px / 24px line-height, Bold

#### Body Text

- **Body 2**: 16px / 24px line-height
- **Body 3**: 14px / 20px line-height
- **Body 4**: 12px / 16px line-height

#### Labels

- **Label 1**: 16px / 22px line-height
- **Label 2**: 14px / 20px line-height
- **Label 3**: 12px / 16px line-height

### Spacing

- **3xs**: 1.5px
- **2xs**: 4px
- **xs**: 8px
- **sm**: 16px
- **md**: 24px
- **lg**: 32px

### Border Radius

- **Small**: 6px
- **Medium**: 16px
- **Fixed 8**: 8px
- **Fixed 12**: 12px
- **Full**: 9999px (pill shape)

### Shadows

- **Elevation 1**: Soft shadow for cards
- **Blur 1**: Larger shadow with blur effect

## Component Examples

### Button with Design Tokens

```tsx
// Using Tailwind classes
<button className="bg-button-fill-bg text-button-fill-fg px-md py-xs rounded-md font-medium">
  Primary Button
</button>;

// Using theme object
import { theme } from "@/styles/theme";

const buttonStyle = {
  backgroundColor: theme.colors.components.button.fill.bg,
  color: theme.colors.components.button.fill.fg,
  padding: `${theme.spacing.padding.xs} ${theme.spacing.padding.md}`,
  borderRadius: theme.borders.radius.md,
};
```

### Product Card

```tsx
<div className="bg-productCard-bg rounded-8 shadow-elevation-1 p-md max-w-product-card-max">
  {/* Card content */}
</div>
```

### Typography

```tsx
<h1 className="text-h3 font-bold text-text-highContrast">
  Featured Providers
</h1>

<p className="text-body-2 font-regular text-text-primary">
  Getting help is simple and straightforward
</p>
```

## Best Practices

1. **Always use design tokens** instead of hardcoded values
2. **Prefer Tailwind classes** for common styling
3. **Use theme object** when you need programmatic access
4. **Use CSS variables** for complex custom components
5. **Maintain consistency** by referring to this documentation

## Updating the Design System

When the Figma design changes:

1. Update the relevant token files in `src/styles/theme/`
2. Update CSS variables in `src/index.css`
3. Update Tailwind config in `tailwind.config.js`
4. Update this documentation

## Notes

- All tokens are exported as TypeScript constants for type safety
- CSS variables provide a fallback for non-Tailwind usage
- The design system is fully integrated with Tailwind CSS
- Font family (Poppins) is loaded via Google Fonts in `index.css`
