import { Heart } from "lucide-react";
import { useState } from "react";

export interface FavoriteButtonProps {
  /**
   * Whether the item is currently favorited
   */
  isFavorite?: boolean;
  
  /**
   * Callback when favorite state changes
   */
  onToggle?: (isFavorite: boolean) => void;
  
  /**
   * Button variant style
   */
  variant?: "ghost" | "alpha";
  
  /**
   * Optional className
   */
  className?: string;
}

/**
 * FavoriteButton Component
 * 
 * A heart icon button for favoriting products.
 * Supports ghost and alpha variants matching the Figma design.
 */
export const FavoriteButton = ({
  isFavorite = false,
  onToggle,
  variant = "ghost",
  className = "",
}: FavoriteButtonProps) => {
  const [internalFavorite, setInternalFavorite] = useState(isFavorite);
  
  // Use controlled or uncontrolled state
  const favorite = onToggle !== undefined ? isFavorite : internalFavorite;
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking favorite
    const newState = !favorite;
    
    if (onToggle) {
      onToggle(newState);
    } else {
      setInternalFavorite(newState);
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "alpha":
        return "bg-button-alpha-bg";
      case "ghost":
      default:
        return "bg-button-ghost-bg border border-transparent";
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        ${getVariantClasses()}
        flex
        items-center
        justify-center
        w-10
        h-10
        rounded-xl
        transition-colors
        hover:opacity-80
        ${className}
      `}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart
        size={16}
        className={`
          transition-colors
          ${favorite ? "fill-[#272962] text-[#272962]" : "text-[#272962]"}
        `}
      />
    </button>
  );
};

export default FavoriteButton;

