import type { Category } from "../types";

export const categories: Category[] = [
  {
    id: "cleaning-services",
    name: "Cleaning Services",
    slug: "cleaning-services",
    description: "Thorough home and office cleaning by trusted professionals",
    serviceCount: 45,
    featured: true,
  },
  {
    id: "auto-mechanics",
    name: "Auto Mechanics",
    slug: "auto-mechanics",
    description:
      "Certified mechanics for repairs, maintenance, and diagnostics",
    serviceCount: 32,
    featured: true,
  },
  {
    id: "furniture-assembly",
    name: "Furniture Assembly",
    slug: "furniture-assembly",
    description: "Expert assembly for all types of furniture and fixtures",
    serviceCount: 28,
    featured: true,
  },

  {
    id: "design-uiux",
    name: "Design & UI/UX",
    slug: "design-uiux",
    description:
      "Professional designers for branding, web, and mobile projects",
    serviceCount: 56,
    featured: true,
  },
  {
    id: "programming-web-dev",
    name: "Programming & Web Development",
    slug: "programming-web-dev",
    description: "Expert developers for websites, apps, and custom software",
    serviceCount: 72,
    featured: true,
  },
  {
    id: "plumbing-electrical",
    name: "Plumbing & Electrical",
    slug: "plumbing-electrical",
    description:
      "Licensed plumbers and electricians for repairs and installations",
    serviceCount: 41,
    featured: true,
  },
  {
    id: "home-maintenance",
    name: "Home Maintenance",
    slug: "home-maintenance",
    description: "General repairs, HVAC, and property upkeep services",
    serviceCount: 53,
    featured: true,
  },
  {
    id: "music",
    name: "Music",
    slug: "music",
    description: "Live musicians, DJs, and entertainment for events",
    serviceCount: 3421,
  },
  {
    id: "travel",
    name: "Travel",
    slug: "travel",
    description: "Travel planning, tours, and transportation services",
    serviceCount: 892,
  },
  {
    id: "photography",
    name: "Photography",
    slug: "photography",
    description:
      "Professional photography for events, portraits, and commercial",
    serviceCount: 1245,
  },
  {
    id: "food-beverages",
    name: "Food & Beverages",
    slug: "food-beverages",
    description: "Catering, chef services, and food delivery for all occasions",
    serviceCount: 2103,
    featured: true,
  },
  {
    id: "health-beauty",
    name: "Health & Beauty",
    slug: "health-beauty",
    description: "Beauty services, wellness, and personal care professionals",
    serviceCount: 2103,
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((cat) => cat.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.slug === slug);
};

export const getFeaturedCategories = (): Category[] => {
  return categories.filter((cat) => cat.featured);
};
