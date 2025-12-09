# 🖼️ Service Image Mappings

This document shows which images are linked to which services.

---

## 📸 Available Images in Assets

All service images are located in: `src/assets/services/`

```
src/assets/services/
├── food-1.png       ✅ LINKED
├── food-2.png       ✅ LINKED
├── cleaning-1.png   ✅ LINKED
├── haircut-1.png    ✅ LINKED
└── spa-1.png        ✅ LINKED
```

---

## 🔗 Image to Service Mappings

### 1. **Nyama Choma Catering (20 pax)**
- **Service ID:** `nyama-choma-catering-20`
- **Category:** Food & Beverages
- **Provider:** Kenyan Delights
- **Images:**
  - ✅ `/src/assets/services/food-1.png`
  - ✅ `/src/assets/services/food-2.png`

### 2. **Deep Home Cleaning Service**
- **Service ID:** `home-deep-cleaning`
- **Category:** Cleaning Services
- **Provider:** Clean Sweep Services
- **Images:**
  - ✅ `/src/assets/services/cleaning-1.png`

### 3. **Professional Haircut & Styling** (NEW!)
- **Service ID:** `professional-haircut-styling`
- **Category:** Health & Beauty
- **Provider:** Serenity Spa & Beauty
- **Images:**
  - ✅ `/src/assets/services/haircut-1.png`

### 4. **Relaxation Spa & Massage Therapy** (NEW!)
- **Service ID:** `spa-massage-therapy`
- **Category:** Health & Beauty
- **Provider:** Serenity Spa & Beauty
- **Images:**
  - ✅ `/src/assets/services/spa-1.png`

### 5-8. **Other Services** (No images yet)
- Car Engine Diagnostic
- IKEA Furniture Assembly
- Basic Website Development
- Logo Design & Branding
- Emergency Plumbing
- Local Moving Service

---

## ✨ New Services Added

To utilize all available images, I've added 2 new services:

### **Professional Haircut & Styling**
- **Price:** KES 1,500 per session
- **Rating:** 4.8 ⭐ (312 reviews)
- **Duration:** 60 minutes
- **Category:** Health & Beauty
- **Provider:** Serenity Spa & Beauty (NEW PROVIDER)
- **Image:** `/src/assets/services/haircut-1.png`

### **Relaxation Spa & Massage Therapy**
- **Price:** KES 3,500 per session (Base price)
- **Rating:** 4.9 ⭐ (445 reviews)
- **Duration:** 90 minutes
- **Category:** Health & Beauty
- **Provider:** Serenity Spa & Beauty
- **Image:** `/src/assets/services/spa-1.png`
- **Packages:** 3 tiers
  - Basic Massage: KES 2,500 (60 min)
  - Premium Spa: KES 3,500 (90 min)
  - Luxury Spa: KES 5,500 (120 min)

---

## 🏪 New Provider Added

### **Serenity Spa & Beauty**
- **ID:** `serenity-spa-beauty`
- **Location:** Nairobi, Kenya
- **Rating:** 4.9 ⭐ (757 reviews)
- **Verified:** ✅ Yes
- **Phone:** +254722334455
- **Categories:** Health & Beauty
- **Services:** Haircut & Styling, Spa & Massage

---

## 📊 Updated Statistics

### Total Services: 10 (was 8)
- **With Images:** 4 services (40%)
- **Without Images:** 6 services (60%)
- **Featured:** 7 services
- **Verified:** 7 services

### Total Providers: 6 (was 5)
- **Verified:** 5 providers (83%)

### Image Coverage by Category
| Category | Services | Images |
|----------|----------|--------|
| Food & Beverages | 1 | ✅ 2 images |
| Cleaning Services | 1 | ✅ 1 image |
| Health & Beauty | 2 | ✅ 2 images |
| Auto Mechanics | 1 | ❌ 0 images |
| Furniture Assembly | 1 | ❌ 0 images |
| Programming & Web Dev | 1 | ❌ 0 images |
| Design & UI/UX | 1 | ❌ 0 images |
| Plumbing & Electrical | 1 | ❌ 0 images |
| Moving & Delivery | 1 | ❌ 0 images |

---

## 💡 How to Use Images

### In React Components

```typescript
import { useProductStore } from '@/store/useProductStore';

function ServiceCard({ serviceId }) {
  const service = useProductStore(state => 
    state.services.find(s => s.id === serviceId)
  );
  
  return (
    <div>
      {service?.images && service.images.length > 0 && (
        <img 
          src={service.images[0]} 
          alt={service.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}
      <h3>{service?.name}</h3>
    </div>
  );
}
```

### Multiple Images Gallery

```typescript
function ServiceGallery({ serviceId }) {
  const service = useProductStore(state => 
    state.services.find(s => s.id === serviceId)
  );
  
  return (
    <div className="grid grid-cols-3 gap-2">
      {service?.images.map((image, index) => (
        <img 
          key={index}
          src={image} 
          alt={`${service.name} - ${index + 1}`}
          className="w-full h-32 object-cover rounded"
        />
      ))}
    </div>
  );
}
```

### With Fallback

```typescript
function ServiceImage({ service }) {
  const imageSrc = service.images?.[0] || '/src/assets/placeholder.png';
  
  return (
    <img 
      src={imageSrc}
      alt={service.name}
      onError={(e) => {
        e.currentTarget.src = '/src/assets/placeholder.png';
      }}
    />
  );
}
```

---

## 📝 Adding More Images

To add more service images:

1. Place image files in: `src/assets/services/`
2. Update the service in `src/data/services.ts`:

```typescript
{
  id: 'your-service-id',
  // ... other fields
  images: [
    '/src/assets/services/your-image-1.png',
    '/src/assets/services/your-image-2.png',
  ],
}
```

---

## ✅ All Images Linked!

All 5 available service images are now properly linked to services in the data files.

**Services with Images:**
- ✅ Nyama Choma Catering (2 images)
- ✅ Deep Home Cleaning (1 image)
- ✅ Professional Haircut & Styling (1 image)
- ✅ Relaxation Spa & Massage (1 image)

**Total:** 5 images linked to 4 services

