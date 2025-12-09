import { CheckCircle2 } from "lucide-react";
import { StarRating } from "./StarRating";
import { ProductTag } from "./ProductTag";
import { FavoriteButton } from "./FavoriteButton";

export interface ProductCardProps {
  /**
   * Product image URL
   */
  image: string;
  
  /**
   * Alt text for the image
   */
  imageAlt?: string;
  hideLocation?: boolean;
  
  /**
   * Category tag text (e.g., "Food & Beverages")
   */
  category?: string;
  
  /**
   * Location tag text (e.g., "Nairobi, Kenya")
   */
  location?: string;
  
  /**
   * Duration in minutes (e.g., "240")
   */
  duration?: number;
  
  /**
   * Whether the product is favorited
   */
  isFavorite?: boolean;
  
  /**
   * Callback when favorite state changes
   */
  onFavoriteToggle?: (isFavorite: boolean) => void;
  
  /**
   * Merchant/Provider logo URL
   */
  merchantLogo?: string;
  
  /**
   * Product rating (0-5)
   */
  rating: number;
  
  /**
   * Number of reviews
   */
  reviewCount: number;
  
  /**
   * Product title/name
   */
  title: string;
  
  /**
   * Product description
   */
  description: string;
  
  /**
   * Whether the product/service is verified
   */
  isVerified?: boolean;
  
  /**
   * Product price (number)
   */
  price: number;
  
  /**
   * Currency symbol (default: "AED")
   */
  currency?: string;
  
  /**
   * Callback when "Book now" button is clicked
   */
  onBookNow?: () => void;
  
  /**
   * Callback when card is clicked
   */
  onClick?: () => void;
  
  /**
   * Optional className
   */
  className?: string;
}

/**
 * ProductCard Component
 * 
 * A comprehensive product/service card component matching the Figma design.
 * Displays product image, tags, rating, details, price, and action button.
 * 
 * @example
 * ```tsx
 * <ProductCard
 *   image="/product.jpg"
 *   category="Food & Beverages"
 *   location="Nairobi, Kenya"
 *   duration={240}
 *   rating={4.5}
 *   reviewCount={738}
 *   title="Nyama Choma Catering (20 pax)"
 *   description="Traditional Kenyan BBQ catering service for events"
 *   price={15000.30}
 *   currency="AED"
 *   onBookNow={() => console.log('Book now')}
 * />
 * ```
 */
export const ProductCard = ({
  image,
  imageAlt,
  category,
  location,
  duration,
  isFavorite = false,
  onFavoriteToggle,
  merchantLogo,
  rating,
  reviewCount,
  title,
  description,
  isVerified = false,
  price,
  currency = "AED",
  onBookNow,
  onClick,
  hideLocation,
  className = "",
}: ProductCardProps) => {
  // Format price: split integer and decimal parts
  const formatPrice = (priceValue: number) => {
    const parts = priceValue.toFixed(2).split(".");
    return {
      integer: parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), // Add thousand separators
      decimal: parts[1],
    };
  };

  const priceParts = formatPrice(price);
  const isClickable = !!onClick;

  return (
    <div
      className={`
        bg-productCard-bg
        border
        border-border-primary
        rounded-[6px]
        flex
        flex-col
        overflow-hidden
        w-full
        transition-all
        ${isClickable ? "cursor-pointer hover:shadow-md" : ""}
        ${className}
      `}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={(e) => {
        if (isClickable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {/* Image Section */}
      <div className="relative w-full h-[220px] overflow-hidden">
        {/* Main Product Image */}
        <img
          src={image}
          alt={imageAlt || title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='220'%3E%3Crect fill='%23f0f0f0' width='260' height='220'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-family='sans-serif' font-size='14'%3EImage%3C/text%3E%3C/svg%3E";
          }}
        />

        {/* Tags Overlay (Top Left) */}
        {(category || location || duration) && (
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {category && (
              <ProductTag type="category" text={category} />
            )}
            {location && !hideLocation && (
              <ProductTag type="location" text={location} />
            )}
            {duration && (
              <ProductTag type="duration" text={`${duration} min`} />
            )}
          </div>
        )}

        {/* Favorite Button (Top Right) */}
        <div className="absolute top-2 right-2">
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={onFavoriteToggle}
            variant="ghost"
          />
        </div>

        {/* Merchant Logo (Bottom Left) */}
        {merchantLogo && (
          <div className="absolute bottom-2 left-2">
            <div className="bg-background-panel rounded p-0.5">
              <img
                src={merchantLogo}
                alt="Merchant logo"
                className="w-5 h-5 rounded object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-1 px-2 py-1">
        {/* Rating and Title Section */}
        <div className="flex flex-col gap-2 py-1">
          {/* Rating */}
          <div className="flex items-center">
            <StarRating rating={rating} reviewCount={reviewCount} />
          </div>

          {/* Title with Verification Badge */}
          <div className="flex items-center gap-2">
            {isVerified && (
              <div className="flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} className="text-accent-darker" />
              </div>
            )}
            <h3 className="flex-1 text-label-2 font-semibold text-text-highContrast truncate">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-label-2 font-regular text-text-primary line-clamp-2 py-1">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-1 py-1">
          <span className="text-currency-lg font-regular text-text-highContrast">
            {currency}
          </span>
          <div className="flex items-center text-h6 font-medium text-text-highContrast">
            <span>{priceParts.integer}</span>
            <span>.{priceParts.decimal}</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      {onBookNow && (
        <div className="px-2 pb-2">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click
              onBookNow();
            }}
            className="
              w-full
              h-10
              bg-button-fill-bg
              text-button-fill-fg
              rounded-xl
              flex
              items-center
              justify-center
              text-body-3
              font-medium
              transition-colors
              hover:opacity-90
            "
          >
            Book now
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

