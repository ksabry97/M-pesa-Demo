import { ReactNode } from "react";
import { MapPin, Clock } from "lucide-react";

export type ProductTagType = "category" | "location" | "duration";

export interface ProductTagProps {
  /**
   * Type of tag - determines styling
   */
  type: ProductTagType;
  
  /**
   * Text content of the tag
   */
  text: string;
  
  /**
   * Optional icon (if not provided, default icon based on type will be used)
   */
  icon?: ReactNode;
  
  /**
   * Optional className
   */
  className?: string;
}

/**
 * ProductTag Component
 * 
 * Displays a tag badge on product cards. Supports different types:
 * - category: Dark background (#1c2024)
 * - location: Orange/red background (rgba(223,38,0,0.82))
 * - duration: Dark blue background (#272962)
 */
export const ProductTag = ({
  type,
  text,
  icon,
  className = "",
}: ProductTagProps) => {
  // Get default icon based on type
  const getDefaultIcon = () => {
    switch (type) {
      case "location":
        return <MapPin size={16} className="text-white" />;
      case "duration":
        return <Clock size={16} className="text-white" />;
      default:
        return null;
    }
  };

  // Get background color based on type
  const getBackgroundColor = () => {
    switch (type) {
      case "category":
        return "bg-tag-bestSellerBg text-tag-bestSellerFg";
      case "location":
        return "bg-[rgba(223,38,0,0.82)] text-white";
      case "duration":
        return "bg-[#272962] text-text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const displayIcon = icon !== undefined ? icon : getDefaultIcon();

  return (
    <div
      className={`
        ${getBackgroundColor()}
        flex
        items-center
        gap-1
        h-6
        px-2
        py-1
        rounded
        shrink-0
        ${className}
      `}
    >
      {displayIcon && (
        <div className="flex items-center justify-center shrink-0">
          {displayIcon}
        </div>
      )}
      <span className="text-label-3 font-medium leading-4 whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};

export default ProductTag;

