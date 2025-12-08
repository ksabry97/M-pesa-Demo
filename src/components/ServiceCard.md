# ServiceCard Component

A reusable service card component that matches the Figma design system. This component displays an icon, title, and description in a clean, modern card layout.

## Features

- ✅ Matches Figma design exactly
- ✅ Supports both React components (e.g., lucide-react icons) and image URLs for icons
- ✅ Optional click handler for interactive cards
- ✅ Fully accessible with keyboard navigation
- ✅ Responsive design
- ✅ Uses design system tokens (colors, typography, spacing)

## Usage

### Basic Example

```tsx
import { ServiceCard } from '../components/ServiceCard';
import { Sparkles } from 'lucide-react';

<ServiceCard
  icon={<Sparkles className="w-6 h-6" />}
  title="Cleaning Services"
  description="Thorough home and office cleaning by trusted professionals"
/>
```

### With Click Handler

```tsx
<ServiceCard
  icon={<Wrench className="w-6 h-6" />}
  title="Auto Mechanics"
  description="Certified mechanics for repairs and maintenance"
  onClick={() => {
    // Navigate to service page
    navigate('/services/auto-mechanics');
  }}
/>
```

### With Image Icon

```tsx
<ServiceCard
  icon="/path/to/icon.png"
  title="Custom Service"
  description="Service description here"
/>
```

### Grid Layout Example

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {services.map((service) => (
    <ServiceCard
      key={service.id}
      icon={service.icon}
      title={service.title}
      description={service.description}
      onClick={() => handleServiceClick(service.id)}
    />
  ))}
</div>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `icon` | `ReactNode \| string` | Yes | - | Icon to display. Can be a React component (e.g., from lucide-react) or an image URL |
| `title` | `string` | Yes | - | Title of the service |
| `description` | `string` | Yes | - | Description of the service |
| `onClick` | `() => void` | No | - | Optional click handler. When provided, the card becomes clickable |
| `className` | `string` | No | `""` | Optional additional CSS classes |

## Design Specifications

### Colors
- **Background**: `rgba(255,255,255,0.98)` (background-surface)
- **Border**: `#d7dad9` (border-primary)
- **Icon Background**: `rgba(0,17,238,0.06)` (accent-subtle)
- **Title Color**: `#5753c6` (text-accent)
- **Description Color**: `#1a211e` (text-highContrast)

### Typography
- **Title**: 16px, regular weight, 24px line-height
- **Description**: 14px, regular weight, 20px line-height

### Spacing
- **Padding**: 24px (md)
- **Gap between elements**: 16px (sm)
- **Icon container**: 48x48px
- **Icon size**: 24x24px

### Borders
- **Card border radius**: 8px
- **Icon container border radius**: 14px

## Accessibility

- Cards with `onClick` handlers are keyboard accessible (Enter/Space)
- Proper ARIA roles and tabIndex for interactive cards
- Semantic HTML structure

## Examples in Codebase

See `src/pages/HomePage.tsx` for a complete example with multiple service cards in a grid layout.

