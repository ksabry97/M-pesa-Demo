import { Star } from "lucide-react";

export interface StarRatingProps {
  /**
   * Rating value from 0 to 5
   */
  rating: number;
  
  /**
   * Number of reviews
   */
  reviewCount?: number;
  
  /**
   * Size of the stars in pixels
   */
  size?: number;
  
  /**
   * Optional className
   */
  className?: string;
}

/**
 * StarRating Component
 * 
 * Displays a 5-star rating with support for half stars and review count.
 * Matches the Figma design system.
 */
export const StarRating = ({
  rating,
  reviewCount,
  size = 16,
  className = "",
}: StarRatingProps) => {
  // Clamp rating between 0 and 5
  const clampedRating = Math.max(0, Math.min(5, rating));
  
  // Calculate full stars, half stars, and empty stars
  const fullStars = Math.floor(clampedRating);
  const hasHalfStar = clampedRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center gap-0.5">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star
            key={`full-${index}`}
            size={size}
            className="fill-rating-fill text-rating-fill"
          />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <div className="relative" style={{ width: size, height: size }}>
            <Star
              size={size}
              className="absolute fill-rating-empty text-rating-empty"
            />
            <div 
              className="absolute overflow-hidden" 
              style={{ 
                width: size / 2, 
                height: size,
                left: 0,
                top: 0
              }}
            >
              <Star
                size={size}
                className="fill-rating-fill text-rating-fill"
              />
            </div>
          </div>
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <Star
            key={`empty-${index}`}
            size={size}
            className="fill-rating-empty text-rating-empty"
          />
        ))}
      </div>
      
      {/* Rating number and review count */}
      <span className="text-[10px] leading-3 font-semibold text-text-primary">
        {clampedRating.toFixed(1)}
      </span>
      {reviewCount !== undefined && (
        <span className="text-[10px] leading-3 font-medium text-text-primary">
          ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  );
};

export default StarRating;

