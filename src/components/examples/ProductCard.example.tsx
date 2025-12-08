/**
 * Example Card Component using Design Tokens
 * Demonstrates product card styling with design system
 */

import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  rating?: number;
  tag?: "hotOffers" | "bestSeller" | "lowStock" | "newArrivals";
  image?: string;
}

/**
 * Product Card component using design tokens
 *
 * @example
 * <ProductCard
 *   title="Web Development"
 *   description="Professional web development services"
 *   price={149.99}
 *   rating={4.5}
 *   tag="bestSeller"
 * />
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  rating,
  tag,
  image,
}) => {
  // Tag styling based on design tokens
  const tagClasses = {
    hotOffers: "bg-tag-hotOffers text-white",
    bestSeller: "bg-tag-bestSellerBg text-tag-bestSellerFg",
    lowStock: "bg-tag-lowStockBg text-tag-lowStockFg",
    newArrivals: "bg-accent text-white",
  };

  return (
    <div className="bg-productCard-bg rounded-8 shadow-elevation-1 overflow-hidden max-w-product-card-max hover:shadow-blur-1 transition-shadow duration-300">
      {/* Image Section */}
      {image && (
        <div className="relative h-48 bg-background-panel">
          {tag && (
            <span
              className={`absolute top-2 left-2 px-xs py-2xs text-body-4 font-medium rounded-sm ${tagClasses[tag]}`}
            >
              {tag === "hotOffers" && "Hot Offer"}
              {tag === "bestSeller" && "Best Seller"}
              {tag === "lowStock" && "Low Stock"}
              {tag === "newArrivals" && "New"}
            </span>
          )}
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Content Section */}
      <div className="p-md">
        {/* Title */}
        <h3 className="text-h6 font-bold text-text-highContrast mb-xs">
          {title}
        </h3>

        {/* Description */}
        <p className="text-body-3 font-regular text-text-primary mb-md line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-2xs mb-md">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-sm ${
                    star <= Math.floor(rating)
                      ? "text-rating-fill"
                      : "text-rating-empty"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-body-4 text-text-primary">
              {rating.toFixed(1)}
            </span>
          </div>
        )}

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <span className="text-h6 font-bold text-accent">
            ${price.toFixed(2)}
          </span>
          <button className="bg-button-fill-bg text-button-fill-fg px-md py-xs rounded-md text-body-4 font-medium hover:opacity-90 transition-opacity">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
