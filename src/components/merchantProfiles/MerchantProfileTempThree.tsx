import { ArrowLeft, Heart, Upload, MapPin, Phone, Star, Search } from "lucide-react";
import merchantCoverImg from "@/assets/profileCover.png";
import verifiedIcon from "@/assets/verified.svg";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

import { mockProducts } from "./mockProducts";
import { ProductCard } from "../ProductCard/ProductCard";
import { useState, useMemo } from "react";

export default function MerchantProfileTempThree() {
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
      return mockProducts;
    }
    return mockProducts.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleFavoriteToggle = (productId: string, isFavorite: boolean) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: isFavorite,
    }));
  };

  const handleBookNow = (title: string) => {
    toast.success(`${title} is successfully booked!`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          {/* View Cover Photo Label */}
          <div className="absolute bottom-4 left-12 text-white flex items-center gap-2">
            <span className="text-sm">👁 View Cover Photo</span>
          </div>
        </div>
      </div>

      {/* Merchant Info Section */}
      <div className="relative mt-[150px] mx-8 bg-[#FBFDFC] border border-border-primary rounded-3xl p-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-3xl font-bold text-purple-600">
              T
            </div>

            {/* Info */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                TechZone Kenya
              </h1>
              <p className="text-gray-600 mt-1">
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
                  <span className="text-gray-700 font-medium">4.7</span>
                  <span className="text-gray-500">(48 reviews)</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin size={16} />
                  <span>Nairobi, Kenya</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
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
              <span className="text-sm  text-black">
                Verified Provider
              </span>
            </div>
            <div className="flex items-center justify-center py-3 w-[150px] bg-[#0000FF08] rounded-md">
              <span className="text-sm font-medium text-accent-darker2">Open Now</span>
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

      {/* Category Filter */}
      <div className="mx-8 mt-6">
        <div className="flex justify-between items-center border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 whitespace-nowrap text-sm font-medium transition-colors relative flex-1 ${
                selectedCategory === category
                  ? "text-accent-darker2"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {category}
              {selectedCategory === category && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-darker2"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* available Service cards section */}
      <div className="mx-8 mt-10 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {currentProducts.map((product) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-6 w py-2 rounded-md border border-gray-300 disabled:opacity-50 min-w-[180px]"
            >
              Previous
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-10 h-10 rounded-full p-2 ${
                      currentPage === pageNumber
                        ? 'bg-[#0011EE0F] text-accent-darker2'
                        : 'border border-gray-300'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-6 py-2 rounded-md  bg-accent-darker2 text-white border border-gray-300 min-w-[180px]"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
