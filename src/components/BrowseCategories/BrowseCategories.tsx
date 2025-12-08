import { ReactNode } from "react";
import { CategoryCard } from "./CategoryCard";

export interface Category {
  id: string;
  name: string;
  icon: ReactNode | string;
  serviceCount: number;
  backgroundColor: string;
}

export interface BrowseCategoriesProps {
  /**
   * Array of categories to display
   */
  categories: Category[];
  
  /**
   * Optional click handler for categories
   */
  onCategoryClick?: (categoryId: string) => void;
  
  /**
   * Optional className
   */
  className?: string;
}

/**
 * BrowseCategories Component
 * 
 * A banner component displaying category cards in a horizontal scrollable layout.
 * Matches the Figma design with purple background and category cards.
 */
export const BrowseCategories = ({
  categories,
  onCategoryClick,
  className = "",
}: BrowseCategoriesProps) => {
  return (
    <section className={`w-full bg-[#5753C6] rounded-[8px] p-4 md:p-8 ${className}`}>
      {/* Title */}
      <h2 className="text-h6 font-medium text-white mb-6 md:mb-12">
        Browse Categories
      </h2>

      {/* Categories Container - Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 w-full">
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-full"
          >
            <CategoryCard
              icon={category.icon}
              name={category.name}
              serviceCount={category.serviceCount}
              backgroundColor={category.backgroundColor}
              onClick={() => onCategoryClick?.(category.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;

