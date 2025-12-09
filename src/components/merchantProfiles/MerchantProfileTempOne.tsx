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
import { useState } from "react";

export default function MerchantProfileTempOne() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const handleFavoriteToggle = (productId: string, isFavorite: boolean) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: isFavorite,
    }));
  };

  const handleBookNow = (title: string) => {
    toast.success(`${title} is successfully booked!`);
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
      <div className="mx-8 mt-8 flex items-center gap-6">
        {/* Search Bar - 70% */}
        <div className="flex-1 relative ">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="What service are you looking for today?"
            className="w-full pl-12 pr-4 h-14"
          />
        </div>

        {/* Filters - 30% */}
        <div className="flex-[0.3] flex items-center gap-3">
          <Select defaultValue="all">
            <SelectTrigger className="flex-1 h-12">
              <SelectValue placeholder="All Durations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Durations</SelectItem>
              <SelectItem value="under1">Under 1 hour</SelectItem>
              <SelectItem value="1-2">1-2 hours</SelectItem>
              <SelectItem value="2plus">2+ hours</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="popular">
            <SelectTrigger className="flex-1 h-12">
              <SelectValue placeholder="Most Popular" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rated">Highest Rated</SelectItem>
              <SelectItem value="price">Lowest Price</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* available Service cards section */}
      <div className="mx-8 mt-10 mb-10">
        <h3 className="text-lg font-semibold text-text-highContrast mb-4 mx-2">
          Available Services (11)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {mockProducts.map((product) => (
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
    </>
  );
}
