import { ReactNode } from "react";

export interface CategoryCardProps {
  /**
   * Icon to display (React component or image URL)
   */
  icon: ReactNode | string;
  
  /**
   * Category name
   */
  name: string;
  
  /**
   * Number of services in this category
   */
  serviceCount: number;
  
  /**
   * Background color for the card (hex color)
   */
  backgroundColor: string;
  
  /**
   * Optional click handler
   */
  onClick?: () => void;
  
  /**
   * Optional className
   */
  className?: string;
}

/**
 * CategoryCard Component
 * 
 * A category card component for the Browse Categories section.
 * Displays an icon, category name, and service count with a colored background.
 */
export const CategoryCard = ({
  icon,
  name,
  serviceCount,
  backgroundColor,
  onClick,
  className = "",
}: CategoryCardProps) => {
  const isClickable = !!onClick;

  return (
    <div
      className={`
        bg-background-primary
        border
        border-border-primary
        rounded-[8px]
        p-1
        flex
        flex-col
        items-center
        justify-center
        w-full
        h-[128px]
        shadow-[0px_3px_3px_0px_rgba(0,17,238,0.06)]
        transition-all
        ${isClickable ? "cursor-pointer hover:shadow-lg" : ""}
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
      <div
        className="
          flex
          flex-col
          gap-1
          items-center
          justify-center
          p-2
          rounded-[8px]
          w-full
          h-full
        "
        style={{ backgroundColor }}
      >
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          {typeof icon === "string" ? (
            <img
              src={icon}
              alt={`${name} icon`}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              {icon}
            </div>
          )}
        </div>

        {/* Category Name */}
        <h3 className="text-body-2 font-medium text-white text-center leading-6">
          {name}
        </h3>

        {/* Service Count */}
        <p className="text-body-2 font-medium text-white/90 text-center leading-6">
          {serviceCount.toLocaleString()} Services
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;



