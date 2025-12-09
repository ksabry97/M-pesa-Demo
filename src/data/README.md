# M-Pesa Marketplace - Mock Data Documentation

This directory contains all the mock data extracted from the Figma design for the M-Pesa Marketplace application.

## 📁 File Structure

```
src/
├── data/
│   ├── categories.ts      # Service categories (13 categories)
│   ├── providers.ts       # Service providers (5 providers)
│   ├── services.ts        # Services/Products (8 services)
│   ├── staff.ts           # Staff members (4 staff)
│   ├── reviews.ts         # Customer reviews (8 reviews)
│   ├── index.ts           # Central export file
│   └── README.md          # This file
├── store/
│   └── useProductStore.ts # Zustand state management
└── types/
    └── index.ts           # TypeScript type definitions
```

## 📊 Data Overview

### Categories (13 total)

**Featured Categories:**
- Cleaning Services (45 services)
- Auto Mechanics (32 services)
- Furniture Assembly (28 services)
- Moving & Delivery (38 services)
- Design & UI/UX (56 services)
- Programming & Web Development (72 services)
- Plumbing & Electrical (41 services)
- Home Maintenance (53 services)
- Food & Beverages (2103 services)

**Other Categories:**
- Music (3421 services)
- Travel (892 services)
- Photography (1245 services)
- Health & Beauty (2103 services)

### Providers (5 total)

1. **Kenyan Delights** - Food & Beverages (Verified, 4.8★)
2. **TechZone Kenya** - Programming & Design (Verified, 4.5★)
3. **Clean Sweep Services** - Cleaning (Verified, 4.7★)
4. **Auto Experts Kenya** - Auto Mechanics (Verified, 4.6★)
5. **Home Helpers** - Home Services (4.3★)

### Services (8 total)

1. **Nyama Choma Catering** - KES 15,000 (4.8★, 156 reviews)
   - 4 package options: 10, 20, 50, and 100 people
   - 240 minutes duration
   - Traditional Kenyan BBQ catering

2. **Deep Home Cleaning** - KES 5,000 (4.7★, 89 reviews)
   - 180 minutes duration
   - Comprehensive cleaning service

3. **Car Engine Diagnostic** - KES 3,500 (4.6★, 234 reviews)
   - 120 minutes duration
   - Complete engine diagnostic and repair

4. **IKEA Furniture Assembly** - KES 1,500/hour (4.5★, 67 reviews)
   - Hourly rate
   - Professional furniture assembly

5. **Basic Website Development** - KES 50,000 (4.8★, 45 reviews)
   - 5-page responsive website
   - SEO optimized

6. **Logo Design & Branding** - KES 25,000 (4.9★, 128 reviews)
   - Complete brand identity package
   - Unlimited revisions

7. **Emergency Plumbing** - KES 2,500 (4.4★, 156 reviews)
   - 24/7 emergency service
   - 90 minutes duration

8. **Local Moving Service** - KES 8,000 (4.3★, 92 reviews)
   - Professional moving within Nairobi
   - 240 minutes duration

### Staff Members (4 total)

All staff members work for Kenyan Delights:
- Chef James Mwangi
- Michael Kiprop
- Sarah Achieng
- Marii Achieng

### Reviews (8 total)

- 6 five-star reviews
- 2 four-star reviews
- Detailed customer feedback for various services

## 🎯 TypeScript Types

### Core Types

```typescript
interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  serviceCount: number;
  featured?: boolean;
}

interface Provider {
  id: string;
  name: string;
  location: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
  categories: string[];
}

interface Service {
  id: string;
  name: string;
  categoryId: string;
  providerId: string;
  basePrice: number;
  currency: string;
  rating: number;
  reviewCount: number;
  packages?: ServicePackage[];
  terms?: string[];
}

interface ServicePackage {
  id: string;
  name: string;
  capacity: number;
  price: number;
  duration: number;
  features: string[];
}
```

## 🔧 Usage Examples

### Import Data

```typescript
import {
  categories,
  providers,
  services,
  getCategoryById,
  getServicesByCategory,
  getFeaturedServices,
} from '@/data';
```

### Using Zustand Store

```typescript
import { useProductStore } from '@/store/useProductStore';

function MyComponent() {
  const {
    services,
    categories,
    filters,
    setSearchQuery,
    setSelectedCategory,
    addToCart,
    toggleFavorite,
  } = useProductStore();

  // Get filtered services
  const filteredServices = useProductStore(
    (state) => state.getFilteredServices()
  );

  // Search for services
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter by category
  const handleCategoryFilter = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Add to cart
  const handleAddToCart = () => {
    addToCart({
      serviceId: 'nyama-choma-catering-20',
      packageId: 'pkg-20-people',
      quantity: 1,
    });
  };

  // Toggle favorite
  const handleToggleFavorite = (serviceId: string) => {
    toggleFavorite(serviceId);
  };

  return (
    <div>
      {/* Your UI here */}
    </div>
  );
}
```

### Filter Services

```typescript
import { useProductStore } from '@/store/useProductStore';

function FilterExample() {
  const setFilters = useProductStore((state) => state.setFilters);

  // Filter by price range
  setFilters({
    minPrice: 5000,
    maxPrice: 50000,
  });

  // Filter by rating
  setFilters({
    rating: 4.5,
  });

  // Filter verified services only
  setFilters({
    verified: true,
  });

  // Sort by price (low to high)
  setFilters({
    sortBy: 'price-low',
  });
}
```

### Cart Management

```typescript
import { useProductStore } from '@/store/useProductStore';

function CartExample() {
  const { cart, addToCart, removeFromCart, clearCart } = useProductStore();

  // Add item to cart
  addToCart({
    serviceId: 'web-development-basic',
    quantity: 1,
    selectedDate: '2025-12-15',
    selectedTime: '10:00',
    specialRequests: 'Please use React and TypeScript',
  });

  // Remove item from cart
  removeFromCart('web-development-basic');

  // Clear entire cart
  clearCart();

  // Get cart total
  const total = useProductStore((state) => state.getCartTotal());

  console.log(`Cart Total: ${cart.currency} ${total}`);
}
```

## 🔍 Helper Functions

### Category Helpers

```typescript
import { getCategoryById, getCategoryBySlug, getFeaturedCategories } from '@/data';

const category = getCategoryById('food-beverages');
const categoryBySlug = getCategoryBySlug('food-beverages');
const featured = getFeaturedCategories();
```

### Provider Helpers

```typescript
import { getProviderById, getProviderBySlug, getVerifiedProviders } from '@/data';

const provider = getProviderById('kenyan-delights');
const providerBySlug = getProviderBySlug('kenyan-delights');
const verified = getVerifiedProviders();
```

### Service Helpers

```typescript
import {
  getServiceById,
  getServiceBySlug,
  getFeaturedServices,
  getServicesByCategory,
  getServicesByProvider,
} from '@/data';

const service = getServiceById('nyama-choma-catering-20');
const serviceBySlug = getServiceBySlug('nyama-choma-catering-20');
const featured = getFeaturedServices();
const categoryServices = getServicesByCategory('food-beverages');
const providerServices = getServicesByProvider('kenyan-delights');
```

### Review Helpers

```typescript
import { getReviewsByService, getAverageRating } from '@/data';

const reviews = getReviewsByService('nyama-choma-catering-20');
const avgRating = getAverageRating('nyama-choma-catering-20');
```

## 💾 Persistence

The Zustand store automatically persists:
- **Cart items** - Saved to localStorage
- **Favorites** - Saved to localStorage

This data persists across browser sessions.

## 🎨 Design Source

All data was extracted from the Figma design:
- **File:** Marketplace - Services Demo
- **URL:** https://www.figma.com/design/4T6YWo1Be1PcmgtuAcxXz5/Marketplace---Services--Demo

## 📝 Notes

- All prices are in Kenyan Shillings (KES)
- Services include different pricing types: fixed, per-session, per-hour, and package
- Package-based services (like catering) support multiple tiers
- All providers have location set to Kenya
- Reviews include helpful counts for social proof
- Staff members can be filtered by provider or service

## 🚀 Next Steps

1. Replace placeholder image URLs with actual images
2. Add more services to each category
3. Implement actual API integration when backend is ready
4. Add more review data for services with fewer reviews
5. Implement advanced filtering (by tags, duration, etc.)

