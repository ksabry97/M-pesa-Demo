# Design System Quick Start Guide

## 🎨 What's Included

Your design system is now fully set up with:

- ✅ **Color tokens** - All colors from Figma
- ✅ **Typography tokens** - Font sizes, weights, and styles
- ✅ **Spacing tokens** - Consistent padding and margins
- ✅ **Border tokens** - Border radius values
- ✅ **Shadow tokens** - Elevation effects
- ✅ **Component tokens** - Button, input, card styles
- ✅ **Tailwind integration** - Use tokens in className
- ✅ **CSS variables** - Fallback for custom CSS
- ✅ **TypeScript types** - Full type safety

## 🚀 Quick Start

### 1. Using Tailwind Classes (Recommended)

```tsx
import React from "react";

export const MyComponent = () => {
  return (
    <div className="bg-background-primary p-md">
      {/* Typography */}
      <h1 className="text-h3 font-bold text-text-highContrast mb-md">
        Featured Services
      </h1>
      <p className="text-body-2 font-regular text-text-primary mb-lg">
        Browse our collection of professional services
      </p>

      {/* Button */}
      <button className="bg-button-fill-bg text-button-fill-fg px-lg py-xs rounded-md hover:opacity-90">
        Get Started
      </button>
    </div>
  );
};
```

### 2. Using Theme Object

```tsx
import { theme } from "@/styles/theme";

export const MyStyledComponent = () => {
  const customStyle = {
    backgroundColor: theme.colors.accent.DEFAULT,
    color: theme.colors.text.white,
    padding: theme.spacing.padding.md,
    borderRadius: theme.borders.radius.md,
  };

  return <div style={customStyle}>Custom Styled Content</div>;
};
```

### 3. Using CSS Variables

```css
/* In your CSS files */
.custom-card {
  background-color: var(--bg-surface);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-elevation-1);
}

.custom-heading {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  color: var(--text-high-contrast);
}
```

### 4. Using the Theme Hook

```tsx
import { useTheme } from "@/hooks";

export const DynamicComponent = () => {
  const { colors, typography, spacing } = useTheme();

  return (
    <div
      style={{
        color: colors.accent.DEFAULT,
        fontSize: typography.heading.h4.fontSize,
        padding: spacing.padding.lg,
      }}
    >
      Dynamic Content
    </div>
  );
};
```

## 📖 Common Patterns

### Creating a Button

```tsx
<button className="bg-button-fill-bg text-button-fill-fg px-md py-xs rounded-md font-medium hover:opacity-90 transition-opacity">
  Click Me
</button>
```

### Creating a Card

```tsx
<div className="bg-background-surface p-md rounded-md shadow-elevation-1">
  <h3 className="text-h6 font-bold mb-xs">Card Title</h3>
  <p className="text-body-3 text-text-primary">Card description goes here</p>
</div>
```

### Creating Input Fields

```tsx
<input
  className="bg-input-bg text-input-fg border border-input-border focus:border-input-borderActive rounded-md px-sm py-xs w-full"
  placeholder="Enter text..."
/>
```

### Creating Tags/Badges

```tsx
{
  /* Best Seller Tag */
}
<span className="bg-tag-bestSellerBg text-tag-bestSellerFg px-xs py-2xs rounded-sm text-body-4 font-medium">
  Best Seller
</span>;

{
  /* Hot Offer Tag */
}
<span className="bg-tag-hotOffers text-white px-xs py-2xs rounded-sm text-body-4 font-medium">
  Hot Offer
</span>;
```

## 🎯 Design Token Reference

### Colors

#### Backgrounds

- `bg-background-primary` - Main background (#fbfdfc)
- `bg-background-surface` - Card background (#fffffffa)
- `bg-background-panel` - Panel background (#f0f1fe)

#### Text

- `text-text-primary` - Primary text (#5f6563)
- `text-text-highContrast` - High contrast text (#1a211e)
- `text-text-white` - White text (#fdfdff)
- `text-text-accent` - Accent text (#5753c6)

#### Accent Colors

- `bg-accent` or `text-accent` - Primary accent (#5151cd)
- `bg-accent-darker` - Darker accent (#5753c6)
- `bg-accent-darker2` - Darkest accent (#272962)

### Typography

#### Headings

- `text-h3` - 40px, Bold
- `text-h4` - 32px, Bold
- `text-h5` - 24px, Medium
- `text-h6` - 20px, Bold

#### Body Text

- `text-body-2` - 16px (Paragraph)
- `text-body-3` - 14px (Secondary)
- `text-body-4` - 12px (Captions)

#### Font Weights

- `font-regular` - 400
- `font-medium` - 500
- `font-semibold` - 600
- `font-bold` - 700

### Spacing

- `p-2xs` / `m-2xs` - 4px
- `p-xs` / `m-xs` - 8px
- `p-sm` / `m-sm` - 16px
- `p-md` / `m-md` - 24px
- `p-lg` / `m-lg` - 32px

### Border Radius

- `rounded-sm` - 6px
- `rounded-8` - 8px
- `rounded-md` - 16px
- `rounded-full` - 9999px (pill)

### Shadows

- `shadow-elevation-1` - Soft card shadow
- `shadow-blur-1` - Larger blur shadow

## 📦 Example Components

Pre-built example components are available in `src/components/examples/`:

```tsx
import { Button, ProductCard, H3, Body2 } from "@/components/examples";

export const MyPage = () => {
  return (
    <div>
      <H3>Welcome to Our Marketplace</H3>
      <Body2>Browse services from trusted providers</Body2>

      <Button variant="fill" size="lg">
        Get Started
      </Button>

      <ProductCard
        title="Web Development"
        description="Professional web services"
        price={149.99}
        rating={4.8}
        tag="bestSeller"
      />
    </div>
  );
};
```

## 🎨 View the Design System

To see all design tokens in action, view the showcase page:

```tsx
import { DesignSystemShowcase } from "@/pages";

// Add to your routes
<Route path="/design-system" element={<DesignSystemShowcase />} />;
```

## 🔄 Updating the Design System

When the Figma design changes:

1. Update token files in `src/styles/theme/`
2. Update CSS variables in `src/index.css`
3. Update Tailwind config in `tailwind.config.js`
4. Update `DESIGN_SYSTEM.md` documentation

## 💡 Best Practices

1. **Always use design tokens** - Never hardcode colors, spacing, or typography
2. **Prefer Tailwind classes** - Fastest way to apply styles
3. **Use semantic naming** - Use `text-text-primary` instead of specific color values
4. **Maintain consistency** - Stick to the token values across all components
5. **Document custom components** - If you create reusable components, document them

## 📚 Additional Resources

- Full documentation: `DESIGN_SYSTEM.md`
- Theme object: `src/styles/theme/`
- Example components: `src/components/examples/`
- Figma design: [View Design](https://www.figma.com/design/4T6YWo1Be1PcmgtuAcxXz5/Marketplace---Services--Demo?node-id=95-36242)

## 🆘 Need Help?

- Check `DESIGN_SYSTEM.md` for detailed documentation
- Look at example components in `src/components/examples/`
- View the design showcase at `/design-system` route
- Review the theme object in `src/styles/theme/index.ts`
