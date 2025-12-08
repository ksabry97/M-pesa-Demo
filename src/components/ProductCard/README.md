# ProductCard Component

A comprehensive, reusable product/service card component that matches the Figma design system. This component displays product images, tags, ratings, details, pricing, and action buttons.

## Features

- ✅ Matches Figma design exactly (PD-Card-v1)
- ✅ Product image with overlay tags (category, location, duration)
- ✅ Favorite/wishlist functionality
- ✅ Star rating with half-star support
- ✅ Verification badge for verified products
- ✅ Merchant/provider logo
- ✅ Price formatting with currency
- ✅ "Book now" action button
- ✅ Fully accessible with keyboard navigation
- ✅ Responsive design
- ✅ Uses design system tokens

## Component Structure

```
ProductCard/
├── ProductCard.tsx      # Main component
├── StarRating.tsx       # Star rating sub-component
├── ProductTag.tsx       # Tag badge sub-component
├── FavoriteButton.tsx   # Favorite button sub-component
├── index.ts            # Exports
└── README.md           # Documentation
```

## Usage

### Basic Example

```tsx
import { ProductCard } from '../components/ProductCard';

<ProductCard
  image="/product.jpg"
  category="Food & Beverages"
  location="Nairobi, Kenya"
  duration={240}
  rating={4.5}
  reviewCount={738}
  title="Nyama Choma Catering (20 pax)"
  description="Traditional Kenyan BBQ catering service for events"
  price={15000.30}
  currency="AED"
  onBookNow={() => console.log('Book now')}
/>
```

### With All Features

```tsx
<ProductCard
  image="/product.jpg"
  imageAlt="Product image"
  category="Food & Beverages"
  location="Nairobi, Kenya"
  duration={240}
  isFavorite={false}
  onFavoriteToggle={(isFavorite) => setFavorite(isFavorite)}
  merchantLogo="/merchant-logo.png"
  rating={4.5}
  reviewCount={738}
  title="Nyama Choma Catering (20 pax)"
  description="Traditional Kenyan BBQ catering service for events"
  isVerified={true}
  price={15000.30}
  currency="AED"
  onBookNow={() => handleBookNow()}
  onClick={() => navigate('/product/123')}
/>
```

### Grid Layout Example

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      image={product.image}
      category={product.category}
      location={product.location}
      duration={product.duration}
      rating={product.rating}
      reviewCount={product.reviewCount}
      title={product.title}
      description={product.description}
      price={product.price}
      currency={product.currency}
      onBookNow={() => handleBookNow(product.id)}
    />
  ))}
</div>
```

## Props

### ProductCardProps

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | `string` | Yes | - | Product image URL |
| `imageAlt` | `string` | No | - | Alt text for image (defaults to title) |
| `category` | `string` | No | - | Category tag text (e.g., "Food & Beverages") |
| `location` | `string` | No | - | Location tag text (e.g., "Nairobi, Kenya") |
| `duration` | `number` | No | - | Duration in minutes (e.g., 240) |
| `isFavorite` | `boolean` | No | `false` | Whether product is favorited |
| `onFavoriteToggle` | `(isFavorite: boolean) => void` | No | - | Callback when favorite state changes |
| `merchantLogo` | `string` | No | - | Merchant/provider logo URL |
| `rating` | `number` | Yes | - | Product rating (0-5) |
| `reviewCount` | `number` | Yes | - | Number of reviews |
| `title` | `string` | Yes | - | Product title/name |
| `description` | `string` | Yes | - | Product description |
| `isVerified` | `boolean` | No | `false` | Whether product is verified |
| `price` | `number` | Yes | - | Product price |
| `currency` | `string` | No | `"AED"` | Currency symbol |
| `onBookNow` | `() => void` | No | - | Callback when "Book now" button is clicked |
| `onClick` | `() => void` | No | - | Callback when card is clicked |
| `className` | `string` | No | `""` | Additional CSS classes |

## Sub-Components

### StarRating

Displays a 5-star rating with half-star support and review count.

```tsx
<StarRating rating={4.5} reviewCount={738} size={16} />
```

### ProductTag

Displays tag badges with different styles based on type.

```tsx
<ProductTag type="category" text="Food & Beverages" />
<ProductTag type="location" text="Nairobi, Kenya" />
<ProductTag type="duration" text="240 min" />
```

### FavoriteButton

Heart icon button for favoriting products.

```tsx
<FavoriteButton
  isFavorite={false}
  onToggle={(isFavorite) => setFavorite(isFavorite)}
  variant="ghost"
/>
```

## Design Specifications

### Colors
- **Card Background**: `rgba(253,255,254,0.93)` (productCard-bg)
- **Border**: `#d7dad9` (border-primary)
- **Category Tag**: `#1c2024` (tag-bestSellerBg)
- **Location Tag**: `rgba(223,38,0,0.82)` (lowStockBg)
- **Duration Tag**: `#272962` (accent-darker2)
- **Button Background**: `#272962` (button-fill-bg)
- **Rating Fill**: `#f76b15` (rating-fill)
- **Rating Empty**: `#ed6c008c` (rating-empty)

### Typography
- **Title**: Label-2, SemiBold, 14px
- **Description**: Label-2, Regular, 14px
- **Price Currency**: Currency-lg, 24px
- **Price Amount**: H6, Medium, 20px
- **Button Text**: Body-3, Medium, 14px
- **Tag Text**: Label-3, Medium, 12px

### Spacing & Sizing
- **Card Border Radius**: 6px
- **Image Height**: 220px
- **Tag Height**: 24px
- **Button Height**: 40px
- **Star Size**: 16px
- **Favorite Button**: 40x40px

## Accessibility

- Cards with `onClick` handlers are keyboard accessible (Enter/Space)
- Proper ARIA labels for favorite button
- Semantic HTML structure
- Image alt text support

## Examples

See `src/components/ProductCard.tsx` for a complete demo with multiple product cards.

