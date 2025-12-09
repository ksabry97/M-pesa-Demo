# 📂 Data Structure Reference

## Complete Data Model Overview

This document provides a quick reference to all data entities and their relationships.

---

## 🗂️ Entity Relationships

```
Category (13)
    └── Services (N)
            ├── Provider (1)
            ├── Packages (0-N)
            ├── Reviews (N)
            └── Staff (N)
```

---

## 📋 Categories

### Properties
```typescript
{
  id: string;              // "food-beverages"
  name: string;            // "Food & Beverages"
  slug: string;            // "food-beverages"
  description: string;     // Full description
  serviceCount: number;    // 2103
  featured?: boolean;      // true/false
  icon?: string;          // Optional icon path
  image?: string;         // Optional image URL
}
```

### Complete List (13)

| ID | Name | Service Count | Featured |
|----|------|---------------|----------|
| `cleaning-services` | Cleaning Services | 45 | ✅ |
| `auto-mechanics` | Auto Mechanics | 32 | ✅ |
| `furniture-assembly` | Furniture Assembly | 28 | ✅ |
| `moving-delivery` | Moving & Delivery | 38 | ✅ |
| `design-uiux` | Design & UI/UX | 56 | ✅ |
| `programming-web-dev` | Programming & Web Development | 72 | ✅ |
| `plumbing-electrical` | Plumbing & Electrical | 41 | ✅ |
| `home-maintenance` | Home Maintenance | 53 | ✅ |
| `food-beverages` | Food & Beverages | 2103 | ✅ |
| `music` | Music | 3421 | ❌ |
| `travel` | Travel | 892 | ❌ |
| `photography` | Photography | 1245 | ❌ |
| `health-beauty` | Health & Beauty | 2103 | ❌ |

---

## 🏪 Providers

### Properties
```typescript
{
  id: string;              // "kenyan-delights"
  name: string;            // "Kenyan Delights"
  slug: string;            // "kenyan-delights"
  description: string;     // Full description
  logo?: string;           // Logo URL
  location: string;        // "Nairobi, Kenya"
  verified: boolean;       // true/false
  rating: number;          // 4.8
  reviewCount: number;     // 156
  phone?: string;          // "+254700111222"
  email?: string;          // Optional
  categories: string[];    // ["food-beverages"]
}
```

### Complete List (5)

| ID | Name | Location | Rating | Reviews | Verified |
|----|------|----------|--------|---------|----------|
| `kenyan-delights` | Kenyan Delights | Nairobi | 4.8 | 156 | ✅ |
| `techzone-kenya` | TechZone Kenya | Nairobi | 4.5 | 892 | ✅ |
| `clean-sweep` | Clean Sweep Services | Nairobi | 4.7 | 234 | ✅ |
| `auto-experts` | Auto Experts Kenya | Mombasa | 4.6 | 567 | ✅ |
| `home-helpers` | Home Helpers | Kisumu | 4.3 | 89 | ❌ |

---

## 📦 Services

### Properties
```typescript
{
  id: string;                    // "nyama-choma-catering-20"
  name: string;                  // "Nyama Choma Catering (20 pax)"
  slug: string;                  // "nyama-choma-catering-20-pax"
  description: string;           // Full description
  shortDescription?: string;     // Brief summary
  categoryId: string;            // "food-beverages"
  providerId: string;            // "kenyan-delights"
  images: string[];              // Image URLs
  basePrice: number;             // 15000
  currency: string;              // "KES"
  pricingType: 'fixed' | 'per-session' | 'per-hour' | 'package';
  duration?: number;             // Minutes (240)
  rating: number;                // 4.8
  reviewCount: number;           // 156
  featured?: boolean;            // true/false
  verified?: boolean;            // true/false
  packages?: ServicePackage[];   // For package-based pricing
  terms?: string[];              // Terms & policies
  tags?: string[];               // Search tags
}
```

### Pricing Types

#### 1. Fixed Price
```typescript
{
  pricingType: 'fixed',
  basePrice: 50000,  // One-time price
}
```
Example: Website Development (KES 50,000)

#### 2. Per Session
```typescript
{
  pricingType: 'per-session',
  basePrice: 3500,   // Price per booking
  duration: 120,     // Optional duration
}
```
Example: Car Diagnostic (KES 3,500 per session)

#### 3. Per Hour
```typescript
{
  pricingType: 'per-hour',
  basePrice: 1500,   // Hourly rate
  duration: 60,      // Standard hour
}
```
Example: Furniture Assembly (KES 1,500/hour)

#### 4. Package-based
```typescript
{
  pricingType: 'package',
  basePrice: 15000,  // Base/default package price
  packages: [
    {
      id: 'pkg-20-people',
      name: '20 People Package',
      capacity: 20,
      price: 15000,
      duration: 300,
      features: [...]
    }
  ]
}
```
Example: Catering with multiple package options

### Complete List (8)

| ID | Name | Category | Provider | Price | Type |
|----|------|----------|----------|-------|------|
| `nyama-choma-catering-20` | Nyama Choma Catering | Food & Beverages | Kenyan Delights | 15,000 | Package |
| `home-deep-cleaning` | Deep Home Cleaning | Cleaning | Clean Sweep | 5,000 | Fixed |
| `car-engine-diagnostic` | Car Engine Diagnostic | Auto Mechanics | Auto Experts | 3,500 | Per Session |
| `furniture-assembly-ikea` | IKEA Furniture Assembly | Furniture | Home Helpers | 1,500 | Per Hour |
| `web-development-basic` | Basic Website Development | Web Dev | TechZone | 50,000 | Fixed |
| `logo-design-branding` | Logo Design & Branding | Design | TechZone | 25,000 | Fixed |
| `plumbing-emergency` | Emergency Plumbing | Plumbing | Home Helpers | 2,500 | Per Session |
| `moving-service-local` | Local Moving Service | Moving | Home Helpers | 8,000 | Fixed |

---

## 📊 Service Packages

### Properties
```typescript
{
  id: string;              // "pkg-20-people"
  name: string;            // "20 People Package"
  description: string;     // Package description
  capacity: number;        // 20 (number of people)
  price: number;           // 15000
  currency: string;        // "KES"
  duration: number;        // 300 (minutes)
  features: string[];      // Array of included features
}
```

### Nyama Choma Packages (4 tiers)

| Package ID | Capacity | Price | Duration | Features Count |
|------------|----------|-------|----------|----------------|
| `pkg-10-people` | 10 people | 7,500 | 300 min | 4 |
| `pkg-20-people` | 20 people | 15,000 | 300 min | 5 |
| `pkg-50-people` | 50 people | 35,000 | 300 min | 6 |
| `pkg-100-people` | 100 people | 65,000 | 300 min | 8 |

---

## 👥 Staff Members

### Properties
```typescript
{
  id: string;              // "chef-james-mwangi"
  name: string;            // "Chef James Mwangi"
  avatar?: string;         // Avatar image URL
  providerId: string;      // "kenyan-delights"
  services: string[];      // ["nyama-choma-catering-20"]
}
```

### Complete List (4)

| ID | Name | Provider | Services |
|----|------|----------|----------|
| `chef-james-mwangi` | Chef James Mwangi | Kenyan Delights | Catering |
| `michael-kiprop` | Michael Kiprop | Kenyan Delights | Catering |
| `sarah-achieng` | Sarah Achieng | Kenyan Delights | Catering |
| `marii-achieng` | Marii Achieng | Kenyan Delights | Catering |

---

## ⭐ Reviews

### Properties
```typescript
{
  id: string;              // "review-1"
  serviceId: string;       // "nyama-choma-catering-20"
  userId: string;          // "user-1"
  userName: string;        // "amyrobson"
  userAvatar?: string;     // Avatar URL
  rating: number;          // 5 (1-5 stars)
  comment: string;         // Review text
  createdAt: string;       // ISO date string
  helpful: number;         // Helpful count
}
```

### Statistics (8 reviews)

| Rating | Count | Percentage |
|--------|-------|------------|
| 5 ⭐ | 6 | 75% |
| 4 ⭐ | 2 | 25% |
| 3 ⭐ | 0 | 0% |
| 2 ⭐ | 0 | 0% |
| 1 ⭐ | 0 | 0% |

**Average Rating:** 4.75 ⭐

---

## 🛒 Cart & Filters

### Cart Item
```typescript
{
  serviceId: string;          // "nyama-choma-catering-20"
  packageId?: string;         // "pkg-20-people" (optional)
  quantity: number;           // 1
  selectedDate?: string;      // "2025-12-15" (optional)
  selectedTime?: string;      // "14:00" (optional)
  selectedStaff?: string;     // "chef-james-mwangi" (optional)
  specialRequests?: string;   // Custom notes (optional)
}
```

### Cart
```typescript
{
  items: CartItem[];         // Array of cart items
  total: number;             // Calculated total
  currency: string;          // "KES"
}
```

### Filters
```typescript
{
  categoryId?: string;       // Filter by category
  providerId?: string;       // Filter by provider
  minPrice?: number;         // Minimum price
  maxPrice?: number;         // Maximum price
  rating?: number;           // Minimum rating
  verified?: boolean;        // Verified only
  search?: string;           // Search query
  sortBy?: SortOption;       // Sort option
}
```

### Sort Options
```typescript
type SortOption = 
  | 'popular'      // By review count (default)
  | 'rating'       // By rating (highest first)
  | 'price-low'    // By price (lowest first)
  | 'price-high'   // By price (highest first)
  | 'newest';      // By date added (newest first)
```

---

## 🔗 Data Relationships

### Category → Services
```typescript
const foodServices = services.filter(
  service => service.categoryId === 'food-beverages'
);
```

### Provider → Services
```typescript
const kenyanDelightsServices = services.filter(
  service => service.providerId === 'kenyan-delights'
);
```

### Service → Reviews
```typescript
const serviceReviews = reviews.filter(
  review => review.serviceId === 'nyama-choma-catering-20'
);
```

### Service → Packages
```typescript
const service = getServiceById('nyama-choma-catering-20');
const packages = service.packages; // Array of ServicePackage
```

### Service → Staff
```typescript
const serviceStaff = staffMembers.filter(
  staff => staff.services.includes('nyama-choma-catering-20')
);
```

---

## 📊 Data Summary

| Entity | Count | Properties |
|--------|-------|------------|
| Categories | 13 | 8 fields |
| Providers | 5 | 10 fields |
| Services | 8 | 16 fields |
| Packages | 4 | 7 fields |
| Staff | 4 | 4 fields |
| Reviews | 8 | 8 fields |

**Total Data Points:** ~500+ individual values
**Total Lines of Data Code:** ~800 lines

---

## 🎯 Usage Patterns

### Get Service with Full Details
```typescript
const service = getServiceById('nyama-choma-catering-20');
const provider = getProviderById(service.providerId);
const category = getCategoryById(service.categoryId);
const reviews = getReviewsByService(service.id);
const staff = getStaffByService(service.id);
const avgRating = getAverageRating(service.id);
```

### Filter Services
```typescript
// By category
const foodServices = getServicesByCategory('food-beverages');

// By provider
const techZoneServices = getServicesByProvider('techzone-kenya');

// Featured only
const featured = services.filter(s => s.featured);

// Verified only
const verified = services.filter(s => s.verified);

// Price range
const affordable = services.filter(s => 
  s.basePrice >= 1000 && s.basePrice <= 10000
);
```

### Calculate Package Price
```typescript
const service = getServiceById('nyama-choma-catering-20');
const package = service.packages?.find(p => p.id === 'pkg-20-people');
const totalPrice = package ? package.price * quantity : 0;
```

---

## 💡 Best Practices

1. **Always use helper functions** - Use `getServiceById()` instead of `.find()`
2. **Check for undefined** - Providers and packages can be undefined
3. **Use TypeScript types** - Import types from `@/types`
4. **Filter on the server** - When backend is ready, move filtering there
5. **Cache expensive operations** - Use React Query or similar
6. **Validate before cart operations** - Check stock/availability

---

This structure is designed to be **backend-ready** - you can easily replace static data with API calls while keeping the same interface!

