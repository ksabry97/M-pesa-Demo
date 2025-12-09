import { ArrowLeft, Heart, Upload, MapPin, Phone, Star, Search } from "lucide-react";
import merchantCoverImg from "@/assets/profileCover.png";
import verifiedIcon from "@/assets/whiteVerified.svg";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { mockProducts } from "./mockProducts";
import { ProductCard } from "../ProductCard/ProductCard";
import { useState, useMemo } from "react";

export default function MerchantProfileTempTwo() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const itemsPerPage = 10;

  // Extract unique categories from mockProducts
  const categories = [
    "All",
    "Events & Catering",
    "Professional Services",
    "Beauty & Wellness",
    "Home Services",
    "Automotive Services"
  ]

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return mockProducts.slice(0,10);
    }
    return mockProducts.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);



  const handleFavoriteToggle = (productId: string, isFavorite: boolean) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: isFavorite,
    }));
  };

  const handleBookNow = (title: string) => {
    toast.success(`${title} is successfully booked!`);
  };


  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
    <>
      <div className="w-full h-[270px] bg-background-accentDarker2">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-10 pt-10">
          <button className="flex items-center gap-2 text-accent-darker2 bg-white px-4 py-2 rounded-md">
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white text-accent-darker2 px-4 py-2 rounded-md">
              <Upload size={16} />
              Share
            </button>

            <button className="bg-white p-3 rounded-md shadow ">
              <Heart size={18} className="text-accent-darker2" />
            </button>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative px-8 top-[40px]">
          <img
            src={merchantCoverImg}
            alt="Cover"
            className="w-full h-[260px] object-cover rounded-3xl"
          />

          {/* Dark Overlay */}
          <div className="absolute top-0 left-8 right-8 h-[260px] bg-black/40 rounded-3xl"></div>
        </div>
      </div>

      {/* Merchant Info Section */}
      <div className="relative mx-8 p-[30px] -mt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-purple-600">
              T
            </div>

            {/* Info */}
            <div>
              <h1 className="text-2xl font-bold text-white">
                TechZone Kenya
              </h1>
              <p className="text-white mt-1">
                Leading electronics retailer in East Africa
              </p>

              {/* Rating and Location */}
              <div className="flex items-center gap-4 mt-2 text-sm">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                  <span className="text-white font-medium">4.7</span>
                  <span className="text-white">(48 reviews)</span>
                </div>

                <div className="flex items-center gap-1 text-white">
                  <MapPin size={16} />
                  <span>Nairobi, Kenya</span>
                </div>

                <div className="flex items-center gap-1 text-white">
                  <Phone size={16} />
                  <span>+254700111222</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center flex-col gap-2">
               <div className="flex items-center px-4 py-2">
              <div className="w-8 h-8  flex items-center justify-center">
                <span className="text-white text-xs">
                    <img src={verifiedIcon} alt="Verified" />
                </span>
              </div>
              <span className="text-sm  text-white">
                Verified Provider
              </span>
            </div>
            <div className="flex items-center justify-center py-3 w-[150px]">
              <span className="text-sm font-medium text-white">Open Now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="mx-8 mt-8 flex items-center justify-between gap-6">
        <h3 className="text-lg font-semibold text-text-highContrast whitespace-nowrap">
          Available Services ({filteredProducts.length})
        </h3>
        
        {/* Search Bar */}
        <div className="relative w-[500px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="What service are you looking for today?"
            className="w-full pl-12 pr-4 h-12"
          />
        </div>
      </div>

      {/* Content Section with Sidebar and Products */}
      <div className="mx-8 mt-8 mb-10 flex gap-6 p-5">
        {/* Category Sidebar */}
        <div className="w-[250px]">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {categories.map((category) => (
                <div
                    key={category}
                    className={`transition-all duration-200 m-5 ${
                    selectedCategory === category ? "" : ""
                    }`} 
                >
                    <button
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full px-6 py-3 text-left text-sm font-medium transition-colors rounded-lg
                        ${
                        selectedCategory === category
                            ? "bg-accent-darker2 text-white"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                    {category}
                    </button>
                </div>
                ))}

          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                hideLocation={true}
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
                onBookNow={() => handleBookNow(product.title)}
                onClick={() =>
                  console.log(`Product clicked: ${product.title}`)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
