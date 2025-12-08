# Header Component Implementation

## Overview

Implemented a new two-tier header component based on the Figma design, matching the marketplace design system.

## Components Created

### 1. HeaderMain (`src/components/Layout/HeaderMain.tsx`)

**Features:**

- Logo display using existing `Logo.png` from assets
- Dual search functionality:
  - Category dropdown (left) - "All Categories"
  - Search input (right) - Main search bar
- Navigation controls:
  - Country selector dropdown (Kenya 🇰🇪, Lesotho 🇱🇸, Tanzania 🇹🇿)
  - Language selector dropdown (English, French, Kiswahili)
  - Wishlist button (Heart icon)
  - Join button (Primary CTA)
- i18n integration maintained
- Responsive design:
  - Desktop: Full layout with all elements
  - Tablet: Hides country dropdown on medium screens
  - Mobile: Search moves below, simplified navigation

### 2. HeaderSubNav (`src/components/Layout/HeaderSubNav.tsx`)

**Features:**

- Purple/accent background panel (`#f0f1fe`)
- "All categories" button with dropdown menu
- Quick action buttons:
  - "Deals" with flame icon
  - "Flash Sale" with zap icon + "Hot" tag badge
- Horizontal scroll on mobile with hidden scrollbar
- Categories dropdown with comprehensive list

### 3. Header (`src/components/Layout/Header.tsx`)

**Features:**

- Unified component combining HeaderMain + HeaderSubNav
- Sticky positioning at top
- Backdrop blur effect with shadow
- Clean component architecture

## Design System Integration

### Colors Used

- `background-primary`: #fbfdfc - Main header background
- `background-panel`: #f0f1fe - Sub-nav background
- `button-fill-bg`: #272962 - Primary buttons
- `button-outline-bg`/`fg`: Outlined buttons
- `button-ghost-bg`: Ghost buttons
- `input-bg`/`border`/`borderActive`: Input fields
- `tag-hotOffers`: #e5484d - Hot tag badge

### Typography

- Font: Poppins (400, 500, 600, 700)
- Body-3: 14px / 20px line-height
- Label-1: 16px / 22px line-height
- Label-3: 12px / 16px line-height

### Spacing & Borders

- Border radius: 12px (buttons), 4px (inputs)
- Heights: 80px (main header), 48px (buttons), 40px (inputs)
- Padding: 32px horizontal (desktop), 16px (tablet), 8px (mobile)

### Icons (lucide-react)

- `Search` - Search functionality
- `ChevronDown` - Dropdowns
- `Globe` - Country/Language selectors
- `Heart` - Wishlist
- `LayoutList` - All categories
- `Flame` - Deals
- `Zap` - Flash sale

## Responsive Breakpoints

```css
- Mobile (<640px): Simplified navigation, search moves below
- Tablet (640px-1024px): Some elements hidden, compact layout
- Desktop (>1024px): Full layout with all features
```

## Features Implemented

✅ Logo integration from assets
✅ Search interface (non-functional as requested)
✅ Country & language dropdowns with localStorage
✅ i18n integration maintained
✅ Wishlist button
✅ Join CTA button
✅ Category navigation with dropdown
✅ Quick action buttons (Deals, Flash Sale)
✅ Hot tag badge on Flash Sale
✅ Fully responsive design
✅ Sticky header behavior
✅ Design system tokens integration
✅ All lucide-react icons

## File Structure

```
src/
├── components/
│   └── Layout/
│       ├── Header.tsx          # Main export, combines both sections
│       ├── HeaderMain.tsx      # Top section with logo, search, navigation
│       ├── HeaderSubNav.tsx    # Bottom section with categories
│       ├── Layout.tsx          # Already existed, uses Header
│       └── index.ts            # Exports all layout components
├── assets/
│   └── Logo.png               # Used in header
└── index.css                   # Added scrollbar-hide utility
```

## Usage

The header is automatically included in all pages through the Layout component:

```tsx
import { Layout } from "../components/Layout";

const YourPage = () => {
  return <Layout>{/* Your page content */}</Layout>;
};
```

## Notes

- Search functionality is placeholder only (as requested)
- All dropdowns close when clicking outside (via state management)
- Mobile navigation scrolls horizontally with hidden scrollbar
- Maintains existing i18n functionality
- Sticky positioning ensures header stays visible while scrolling
