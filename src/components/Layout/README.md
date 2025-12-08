# Layout Structure Documentation

## Overview
This document describes the layout structure of the M-Pesa Marketplace application.

## Folder Structure

```
src/
├── components/
│   └── Layout/
│       ├── Header.tsx       # Top navigation bar with search, language, and auth
│       ├── Footer.tsx       # Footer with links and contact info
│       ├── Layout.tsx       # Main layout wrapper
│       └── index.ts         # Barrel export
├── pages/
│   ├── HomePage.tsx         # Home page component
│   └── index.ts             # Barrel export
└── types/
    └── index.ts             # TypeScript type definitions
```

## Components

### Layout Component
**Path:** `src/components/Layout/Layout.tsx`

The main layout wrapper that provides consistent structure across all pages.

**Features:**
- Wraps Header, main content, and Footer
- Ensures full-height layout with flexbox
- Accepts children as page content

**Usage:**
```tsx
import { Layout } from '../components/Layout';

const MyPage = () => {
  return (
    <Layout>
      <div>Your page content here</div>
    </Layout>
  );
};
```

### Header Component
**Path:** `src/components/Layout/Header.tsx`

Sticky header with navigation and controls.

**Features:**
- Logo and branding
- Search bar with localization
- Country selector dropdown
- Language selector dropdown (EN, FR, SW)
- Shopping cart button
- Login button
- Sticky positioning (stays at top on scroll)
- Responsive design

**Key Props:**
- Uses `useTranslation` hook for i18n
- Persists country and language selection in localStorage

### Footer Component
**Path:** `src/components/Layout/Footer.tsx`

Footer with company info, links, and contact details.

**Features:**
- Company branding and description
- Social media links (Facebook, Twitter, Instagram, LinkedIn)
- Quick links section
- Categories section
- Contact information
- Bottom bar with copyright and legal links
- Responsive grid layout

## Pages

### HomePage
**Path:** `src/pages/HomePage.tsx`

The main landing page that uses the Layout component.

**Structure:**
```tsx
<Layout>
  {/* Page content */}
</Layout>
```

## Types

### Common Types
**Path:** `src/types/index.ts`

Contains TypeScript interfaces for:
- `User` - User account information
- `Service` - Service/product listings
- `Category` - Service categories
- `Provider` - Service provider profiles
- `Language` - Language options
- `Country` - Country options

## Design System

### Colors
- Primary: Green (`bg-green-600`, `hover:bg-green-700`)
- Text: Gray scale (`text-gray-900`, `text-gray-700`, `text-gray-400`)
- Background: White (`bg-white`, `bg-gray-900` for footer)

### Spacing
- Container: `container mx-auto px-4`
- Padding: `py-4`, `py-8`, `py-12`
- Gaps: `gap-2`, `gap-3`, `gap-4`

### Typography
- Headings: `text-xl`, `text-2xl`, `text-4xl`, `font-bold`, `font-semibold`
- Body: `text-sm`, `text-base`, `text-lg`

## Next Steps

To continue building the homepage:

1. **Create Hero Section** with banner and CTA
2. **Build Service Cards** for listings
3. **Add Category Cards** for browsing
4. **Create Provider Cards** for featured providers
5. **Implement "How It Works"** section
6. **Add Advertisement Banners**

## Development

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

