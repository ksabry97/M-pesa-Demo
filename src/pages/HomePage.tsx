import { useState } from "react";
import { Layout } from "../components/Layout";
import { ServiceCard } from "../components/ServiceCard";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { BrowseCategories } from "../components/BrowseCategories";
import { SponsorBanner } from "../components/SponsorBanner";
import { ServicesCarousel } from "../components/ServicesCarousel";
import sponserImage0 from "../assets/sponser-0.svg";
import sponserImage1 from "../assets/sponser-1.svg";
import sponserImage2 from "../assets/sponser-2.svg";
import sponserServiceImage from "../assets/sponser-service.svg";
import {
  Sparkles,
  Wrench,
  Sofa,
  Truck,
  Palette,
  Code,
  Droplets,
  Home,
  Music,
  Plane,
  Camera,
  ChefHat,
  Heart,
} from "lucide-react";

// Product data array matching Figma design examples
const products = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    category: "Food & Beverages",
    location: "Nairobi, Kenya",
    duration: 240,
    title: "Nyama Choma Catering (20 pax)",
    description: "Traditional Kenyan BBQ catering service for events",
    price: 15000.3,
    currency: "AED",
    rating: 4.5,
    reviewCount: 738,
    isVerified: true,
    merchantLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=400&h=300&fit=crop",
    category: "Electronics",
    location: "Mombasa Electronics",
    duration: 180,
    title: "Professional Kitchen Equipment Setup",
    description: "Complete kitchen equipment installation and setup service",
    price: 8500.0,
    currency: "AED",
    rating: 4.7,
    reviewCount: 342,
    isVerified: false,
    merchantLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
    category: "Health & Beauty",
    location: "Nairobi Trends",
    duration: 120,
    title: "Haircut & Styling - Ladies",
    description: "Professional haircuts and styling for all hair types",
    price: 1500.99,
    currency: "AED",
    rating: 4.8,
    reviewCount: 456,
    isVerified: true,
    merchantLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    category: "Home & Living",
    location: "Kisumu Glow",
    duration: 60,
    title: "House Cleaning Service",
    description: "Professional deep cleaning service for homes and offices",
    price: 75.5,
    currency: "AED",
    rating: 4.6,
    reviewCount: 892,
    isVerified: false,
    merchantLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
    category: "Health & Beauty",
    location: "Mombasa Oasis",
    duration: 90,
    title: "Luxury Spa Treatment",
    description: "Indulging spa experience with aromatherapy and massage",
    price: 200.0,
    currency: "AED",
    rating: 4.9,
    reviewCount: 234,
    isVerified: true,
    merchantLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=400&h=300&fit=crop",
    category: "Food & Beverages",
    location: "Nairobi, Kenya",
    duration: 240,
    title: "Event Catering Service",
    description: "Premium catering for weddings, corporate events, and parties",
    price: 12000.0,
    currency: "AED",
    rating: 4.4,
    reviewCount: 567,
    isVerified: true,
    merchantLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  {
    id: "7",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
    category: "Health & Beauty",
    location: "Nairobi Trends",
    duration: 120,
    title: "Men's Haircut & Grooming",
    description: "Professional men's haircut, beard trim, and grooming service",
    price: 800.0,
    currency: "AED",
    rating: 4.7,
    reviewCount: 312,
    isVerified: false,
    merchantLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  {
    id: "8",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    category: "Programming & Web Development",
    location: "Mombasa Tech",
    duration: 480,
    title: "Website Development Service",
    description:
      "Custom website development with modern design and functionality",
    price: 25000.5,
    currency: "AED",
    rating: 4.6,
    reviewCount: 189,
    isVerified: true,
    merchantLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
];

const HomePage = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const handleFavoriteToggle = (productId: string, isFavorite: boolean) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: isFavorite,
    }));
  };

  const handleBookNow = (productId: string) => {
    console.log(`Book now clicked for product: ${productId}`);
    // Add your booking logic here
  };

  const handleCategoryClick = (categoryId: string) => {
    console.log(`Category clicked: ${categoryId}`);
    // Add your category navigation logic here
  };

  // Categories data matching Figma design
  const categories = [
    {
      id: "music",
      name: "Music",
      icon: <Music className="w-12 h-12 text-white" />,
      serviceCount: 3421,
      backgroundColor: "#8B5CF6", // Purple
    },
    {
      id: "travel",
      name: "Travel",
      icon: <Plane className="w-12 h-12 text-white" />,
      serviceCount: 892,
      backgroundColor: "#06B6D4", // Cyan/Teal
    },
    {
      id: "photography",
      name: "Photography",
      icon: <Camera className="w-12 h-12 text-white" />,
      serviceCount: 1245,
      backgroundColor: "#F97316", // Orange
    },
    {
      id: "food-beverages",
      name: "Food & Beverages",
      icon: <ChefHat className="w-12 h-12 text-white" />,
      serviceCount: 2103,
      backgroundColor: "#5753C6", // Dark Purple
    },
    {
      id: "health-beauty",
      name: "Health & Beauty",
      icon: <Heart className="w-12 h-12 text-white" />,
      serviceCount: 2103,
      backgroundColor: "#0E7490", // Dark Blue/Teal
    },
  ];

  const services = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Cleaning Services",
      description: "Thorough home and office cleaning by trusted professionals",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Auto Mechanics",
      description:
        "Certified mechanics for repairs, maintenance, and diagnostics",
    },
    {
      icon: <Sofa className="w-6 h-6" />,
      title: "Furniture Assembly",
      description: "Expert assembly for all types of furniture and fixtures",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Moving & Delivery",
      description: "Reliable movers and delivery services for any distance",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design & UI/UX",
      description: "Professional designers for branding, web, and mobile apps",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming & Web Development",
      description: "Expert developers for websites, apps, and custom solutions",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Plumbing & Electrical",
      description:
        "Licensed plumbers and electricians for repairs and installations",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Home Maintenance",
      description: "General repairs, HVAC, and property upkeep services",
    },
  ];

  // Map services to carousel format with background images
  const carouselServices = services.map((service, index) => ({
    ...service,
    backgroundImage: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1440&h=600&fit=crop", // Cleaning
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1440&h=600&fit=crop", // Auto Mechanics
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1440&h=600&fit=crop", // Furniture
      "https://images.unsplash.com/photo-1601581875305-f0a3e7c64b38?w=1440&h=600&fit=crop", // Moving
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1440&h=600&fit=crop", // Design
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1440&h=600&fit=crop", // Programming
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1440&h=600&fit=crop", // Plumbing
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1440&h=600&fit=crop", // Home Maintenance
    ][index] || "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=1440&h=600&fit=crop",
  }));

  return (
    <Layout>
      <div className="w-full px-4 md:px-8 pt-8">
        {/* Services Carousel Section */}
        <section className="mb-12">
          <ServicesCarousel
            services={carouselServices}
            onServiceClick={(index) => {
              console.log(`Service carousel clicked: ${services[index].title}`);
            }}
            autoPlay={5000}
          />
        </section>

        {/* Browse Services Section */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Sponsor Banner - Left Side */}
            <div className="hidden lg:block w-[300px] flex-shrink-0">
              <SponsorBanner
                image={sponserServiceImage}
                imageAlt="Sponsor"
                height="full"
                onClick={() => console.log("Service sponsor banner clicked")}
              />
            </div>

            {/* Services Grid */}
            <div className="flex-1 flex flex-col">
              <h2 className="text-2xl font-semibold text-text-highContrast mb-6">
                Browse Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    onClick={() => console.log(`Clicked: ${service.title}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services Section - Matching Figma Design */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-[46px]">
                <h2 className="text-[22px] font-semibold text-text-highContrast leading-[22px]">
                  Popular Services
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    imageAlt={product.title}
                    category={product.category}
                    location={product.location}
                    duration={product.duration}
                    isFavorite={favorites[product.id] || false}
                    onFavoriteToggle={(isFavorite) =>
                      handleFavoriteToggle(product.id, isFavorite)
                    }
                    merchantLogo={product.merchantLogo}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    title={product.title}
                    description={product.description}
                    isVerified={product.isVerified}
                    price={product.price}
                    currency={product.currency}
                    onBookNow={() => handleBookNow(product.id)}
                    onClick={() =>
                      console.log(`Product clicked: ${product.title}`)
                    }
                  />
                ))}
              </div>
            </div>

            {/* Sponsor Banners - Right Side */}
            <div className="hidden lg:flex flex-col w-[250px] flex-shrink-0 gap-2">
              {/* Top Sponsor Banner */}
              <SponsorBanner
                image={sponserImage0}
                imageAlt="Sponsor"
                height={266}
                onClick={() => console.log("Sponsor banner 0 clicked")}
              />
              {/* Bottom Sponsor Banner */}
              <SponsorBanner
                image={sponserImage1}
                imageAlt="Sponsor"
                height={660}
                onClick={() => console.log("Sponsor banner 1 clicked")}
              />
            </div>
          </div>
        </section>

        {/* Browse Categories Section - Matching Figma Design */}
        <section className="mb-12">
          <BrowseCategories
            categories={categories}
            onCategoryClick={handleCategoryClick}
          />
        </section>

        {/* Popular Services Section (Second) - After Browse Categories */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sponsor Banner - Left Side */}
            <div className="hidden lg:block w-[250px] flex-shrink-0">
              <SponsorBanner
                image={sponserImage2}
                imageAlt="Sponsor"
                onClick={() => console.log("Sponsor banner clicked")}
              />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-[46px]">
                <h2 className="text-[22px] font-semibold text-text-highContrast leading-[22px]">
                  Popular Services
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard
                    key={`second-${product.id}`}
                    image={product.image}
                    imageAlt={product.title}
                    category={product.category}
                    location={product.location}
                    duration={product.duration}
                    isFavorite={favorites[product.id] || false}
                    onFavoriteToggle={(isFavorite) =>
                      handleFavoriteToggle(product.id, isFavorite)
                    }
                    merchantLogo={product.merchantLogo}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    title={product.title}
                    description={product.description}
                    isVerified={product.isVerified}
                    price={product.price}
                    currency={product.currency}
                    onBookNow={() => handleBookNow(product.id)}
                    onClick={() =>
                      console.log(`Product clicked: ${product.title}`)
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
