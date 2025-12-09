import type { Provider } from "../types";

export const providers: Provider[] = [
  {
    id: "kenyan-delights",
    name: "Kenyan Delights",
    slug: "kenyan-delights",
    description:
      "Leading catering service in East Africa specializing in traditional Kenyan cuisine",
    location: "Nairobi, Kenya",
    verified: true,
    rating: 4.8,
    reviewCount: 156,
    phone: "+254700111222",
    categories: ["food-beverages"],
  },
  {
    id: "techzone-kenya",
    name: "TechZone Kenya",
    slug: "techzone-kenya",
    description: "Leading electronics retailer in East Africa",
    location: "Nairobi, Kenya",
    verified: true,
    rating: 4.5,
    reviewCount: 892,
    categories: ["programming-web-dev", "design-uiux"],
  },
  {
    id: "clean-sweep",
    name: "Clean Sweep Services",
    slug: "clean-sweep",
    description: "Professional cleaning services for homes and offices",
    location: "Nairobi, Kenya",
    verified: true,
    rating: 4.7,
    reviewCount: 234,
    categories: ["cleaning-services"],
  },
  {
    id: "auto-experts",
    name: "Auto Experts Kenya",
    slug: "auto-experts",
    description: "Certified mechanics with over 15 years of experience",
    location: "Mombasa, Kenya",
    verified: true,
    rating: 4.6,
    reviewCount: 567,
    categories: ["auto-mechanics"],
  },
  {
    id: "home-helpers",
    name: "Home Helpers",
    slug: "home-helpers",
    description: "Complete home maintenance and repair solutions",
    location: "Kisumu, Kenya",
    verified: false,
    rating: 4.3,
    reviewCount: 89,
    categories: [
      "home-maintenance",
      "plumbing-electrical",
      "furniture-assembly",
    ],
  },
  {
    id: "serenity-spa-beauty",
    name: "Serenity Spa & Beauty",
    slug: "serenity-spa-beauty",
    description: "Premium spa and beauty services in the heart of Nairobi",
    location: "Nairobi, Kenya",
    verified: true,
    rating: 4.9,
    reviewCount: 757,
    phone: "+254722334455",
    categories: ["health-beauty"],
  },
];

export const getProviderById = (id: string): Provider | undefined => {
  return providers.find((provider) => provider.id === id);
};

export const getProviderBySlug = (slug: string): Provider | undefined => {
  return providers.find((provider) => provider.slug === slug);
};

export const getVerifiedProviders = (): Provider[] => {
  return providers.filter((provider) => provider.verified);
};
