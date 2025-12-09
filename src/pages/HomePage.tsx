import { Layout } from "../components/Layout";
import { ServiceCard } from "../components/ServiceCard";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { BrowseCategories } from "../components/BrowseCategories";
import { SponsorBanner } from "../components/SponsorBanner";
import { ServicesCarousel } from "../components/ServicesCarousel";
import { useProductStore } from "../store/useProductStore";
import { categories as categoriesData } from "../data/categories";
import { getProviderById } from "../data/providers";
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

const HomePage = () => {
  // Use Zustand store for products and favorites
  const services = useProductStore((state) => state.services);
  const toggleFavorite = useProductStore((state) => state.toggleFavorite);
  const isFavorite = useProductStore((state) => state.isFavorite);
  const addToCart = useProductStore((state) => state.addToCart);

  // Get featured services - filtered from services array
  const featuredServices = services.filter((service) => service.featured);

  const handleBookNow = (serviceId: string) => {
    console.log(`Book now clicked for service: ${serviceId}`);
    // Add service to cart
    addToCart({
      serviceId,
      quantity: 1,
    });
    // TODO: Navigate to booking page or show booking modal
  };

  const handleCategoryClick = (categoryId: string) => {
    console.log(`Category clicked: ${categoryId}`);
    // TODO: Navigate to category page or filter services
  };

  // Map category icons to the data
  const getCategoryIcon = (categoryId: string): React.ReactElement => {
    const iconMap: Record<string, React.ReactElement> = {
      music: <Music className="w-12 h-12 text-white" />,
      travel: <Plane className="w-12 h-12 text-white" />,
      photography: <Camera className="w-12 h-12 text-white" />,
      "food-beverages": <ChefHat className="w-12 h-12 text-white" />,
      "health-beauty": <Heart className="w-12 h-12 text-white" />,
    };
    return iconMap[categoryId] || <Sparkles className="w-12 h-12 text-white" />;
  };

  const getCategoryColor = (categoryId: string) => {
    const colorMap: Record<string, string> = {
      music: "#8B5CF6", // Purple
      travel: "#06B6D4", // Cyan/Teal
      photography: "#F97316", // Orange
      "food-beverages": "#5753C6", // Dark Purple
      "health-beauty": "#0E7490", // Dark Blue/Teal
    };
    return colorMap[categoryId] || "#6366F1"; // Default indigo
  };

  // Get featured categories (Music, Travel, Photography, Food, Health)
  const displayCategories = categoriesData
    .filter((cat) =>
      [
        "music",
        "travel",
        "photography",
        "food-beverages",
        "health-beauty",
      ].includes(cat.id)
    )
    .map((cat) => ({
      id: cat.id,
      name: cat.name,
      icon: getCategoryIcon(cat.id),
      serviceCount: cat.serviceCount,
      backgroundColor: getCategoryColor(cat.id),
    }));

  // Map service categories to icons for the Browse Services section
  const getServiceIcon = (categoryId: string): React.ReactElement => {
    const iconMap: Record<string, React.ReactElement> = {
      "cleaning-services": <Sparkles className="w-6 h-6" />,
      "auto-mechanics": <Wrench className="w-6 h-6" />,
      "furniture-assembly": <Sofa className="w-6 h-6" />,
      "moving-delivery": <Truck className="w-6 h-6" />,
      "design-uiux": <Palette className="w-6 h-6" />,
      "programming-web-dev": <Code className="w-6 h-6" />,
      "plumbing-electrical": <Droplets className="w-6 h-6" />,
      "home-maintenance": <Home className="w-6 h-6" />,
    };
    return iconMap[categoryId] || <Sparkles className="w-6 h-6" />;
  };

  // Get the 8 featured categories for Browse Services section
  const browseServices = categoriesData
    .filter((cat) => cat.featured)
    .slice(0, 8)
    .map((cat) => ({
      icon: getServiceIcon(cat.id),
      title: cat.name,
      description: cat.description,
    }));

  // Map browse services to carousel format with background images
  const carouselServices = browseServices.map((service, index) => ({
    ...service,
    backgroundImage:
      [
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1440&h=600&fit=crop", // Cleaning
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1440&h=600&fit=crop", // Auto Mechanics
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1440&h=600&fit=crop", // Furniture
        "https://images.unsplash.com/photo-1601581875305-f0a3e7c64b38?w=1440&h=600&fit=crop", // Moving
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1440&h=600&fit=crop", // Design
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1440&h=600&fit=crop", // Programming
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1440&h=600&fit=crop", // Plumbing
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1440&h=600&fit=crop", // Home Maintenance
      ][index] ||
      "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=1440&h=600&fit=crop",
  }));

  return (
    <Layout>
      <div className="w-full px-4 md:px-8 pt-8 bg-[#F0F1FE]">
        {/* Services Carousel Section */}
        <section className="mb-12">
          <ServicesCarousel
            services={carouselServices}
            onServiceClick={(index) => {
              console.log(
                `Service carousel clicked: ${browseServices[index].title}`
              );
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
                {browseServices.map((service, index) => (
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
                {featuredServices.map((service) => {
                  const provider = getProviderById(service.providerId);
                  const category = categoriesData.find(
                    (cat) => cat.id === service.categoryId
                  );

                  // Determine button text based on pricing type
                  const buttonText =
                    service.pricingType === "package"
                      ? "Select packages"
                      : "Book now";

                  // Hide price for package-based services
                  const displayPrice =
                    service.pricingType === "package"
                      ? undefined
                      : service.basePrice;

                  return (
                    <ProductCard
                      key={service.id}
                      image={service.images?.[0] || undefined}
                      imageAlt={service.name}
                      category={category?.name || "Service"}
                      location={provider?.location || "Kenya"}
                      duration={service.duration || 60}
                      isFavorite={isFavorite(service.id)}
                      onFavoriteToggle={() => toggleFavorite(service.id)}
                      merchantLogo={provider?.logo || undefined}
                      rating={service.rating}
                      reviewCount={service.reviewCount}
                      title={service.name}
                      description={
                        service.shortDescription || service.description
                      }
                      isVerified={service.verified || false}
                      price={displayPrice}
                      currency={service.currency}
                      buttonText={buttonText}
                      onBookNow={() => handleBookNow(service.id)}
                      onClick={() =>
                        console.log(`Product clicked: ${service.name}`)
                      }
                    />
                  );
                })}
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
            categories={displayCategories}
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

            {/* Products Grid - Show all services */}
            <div className="flex-1">
              <div className="mb-[46px]">
                <h2 className="text-[22px] font-semibold text-text-highContrast leading-[22px]">
                  Popular Services
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {services.map((service) => {
                  const provider = getProviderById(service.providerId);
                  const category = categoriesData.find(
                    (cat) => cat.id === service.categoryId
                  );

                  // Determine button text based on pricing type
                  const buttonText =
                    service.pricingType === "package"
                      ? "Select packages"
                      : "Book now";

                  // Hide price for package-based services
                  const displayPrice =
                    service.pricingType === "package"
                      ? undefined
                      : service.basePrice;

                  return (
                    <ProductCard
                      key={`second-${service.id}`}
                      image={service.images?.[0] || undefined}
                      imageAlt={service.name}
                      category={category?.name || "Service"}
                      location={provider?.location || "Kenya"}
                      duration={service.duration || 60}
                      isFavorite={isFavorite(service.id)}
                      onFavoriteToggle={() => toggleFavorite(service.id)}
                      merchantLogo={provider?.logo || undefined}
                      rating={service.rating}
                      reviewCount={service.reviewCount}
                      title={service.name}
                      description={
                        service.shortDescription || service.description
                      }
                      isVerified={service.verified || false}
                      price={displayPrice}
                      currency={service.currency}
                      buttonText={buttonText}
                      onBookNow={() => handleBookNow(service.id)}
                      onClick={() =>
                        console.log(`Product clicked: ${service.name}`)
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
