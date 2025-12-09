import { useEffect, useRef, useState } from "react";
import {
  SquareLibrary,
  ChevronRight,
  ChevronsRight,
  Sparkles,
  Wrench,
  Boxes,
  Truck,
  Home,
  Palette,
  Code,
  Droplets,
  Music,
  Plane,
  Camera,
  UtensilsCrossed,
  Sparkle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { categories } from "../../data/categories";
import { services } from "../../data/services";

// Map category IDs to icons
const categoryIconMap: Record<string, LucideIcon> = {
  "cleaning-services": Sparkles,
  "auto-mechanics": Wrench,
  "furniture-assembly": Boxes,
  "moving-delivery": Truck,
  "design-uiux": Palette,
  "programming-web-dev": Code,
  "plumbing-electrical": Droplets,
  "home-maintenance": Home,
  "food-beverages": UtensilsCrossed,
  music: Music,
  travel: Plane,
  photography: Camera,
  "health-beauty": Sparkle,
};

// Get first service from each category for default description
const getDefaultDescription = (categoryId: string): string => {
  const categoryService = services.find((s) => s.categoryId === categoryId);
  return categoryService?.shortDescription || "We help you create a unique and memorable identity that resonates with your target audience.";
};

interface CategoriesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

const CategoriesMegaMenu = ({
  isOpen,
  onClose,
  triggerRef,
}: CategoriesMegaMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isOpen) return;

    // Calculate position based on button - align left edge with button
    // Use getBoundingClientRect for viewport coordinates (works with fixed positioning)
    const updatePosition = () => {
      if (triggerRef?.current && typeof window !== 'undefined') {
        const rect = triggerRef.current.getBoundingClientRect();
        const menuWidth = Math.min(910, window.innerWidth - 32);
        const leftPosition = rect.left;
        // Ensure menu doesn't overflow on the right
        const maxLeft = window.innerWidth - menuWidth - 16;
        const finalLeft = Math.max(16, Math.min(leftPosition, maxLeft));
        
        setPosition({
          top: rect.bottom + 4, // Use viewport coordinates for fixed positioning
          left: finalLeft,
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    // Don't update position on scroll - keep menu fixed in place

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef?.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    const cleanup = () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener('resize', updatePosition);
    };

    return cleanup;
  }, [isOpen, onClose, triggerRef]);

  // Get featured categories for left section (first 5)
  const featuredCategories = categories
    .filter((cat) => cat.featured)
    .slice(0, 5);

  // Get remaining featured categories for right section
  const moreCategories = categories
    .filter((cat) => cat.featured)
    .slice(5);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop for mobile */}
      <div 
        className="fixed inset-0 bg-black/20 z-[99] lg:hidden"
        onClick={onClose}
      ></div>
      <div
        ref={menuRef}
        className="fixed bg-background-primary rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] z-[100] w-[calc(100vw-32px)] max-w-[910px] overflow-hidden"
        style={{
          top: position.top > 0 ? `${position.top}px` : '80px',
          left: position.left > 0 ? `${position.left}px` : '16px',
        }}
      >
      <div className="flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section - Service List */}
        <div className="border-b lg:border-b-0 lg:border-r border-border-primary flex-1 p-3 sm:p-sm">
          <h3 className="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] font-poppins font-medium text-text-highContrast mb-3 sm:mb-sm">
            Service
          </h3>
          <div className="flex flex-col gap-2">
            {featuredCategories.map((category) => {
              const Icon = categoryIconMap[category.id] || SquareLibrary;
              const description = category.description || getDefaultDescription(category.id);
              return (
                <button
                  key={category.id}
                  onClick={onClose}
                  className="bg-background-surface rounded-[4px] p-2 sm:p-sm hover:opacity-90 transition-opacity text-left w-full"
                >
                  <div className="flex gap-2 sm:gap-xs items-start">
                    <div className="flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-icon-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-poppins font-medium text-text-highContrast mb-1 sm:mb-2">
                        {category.name}
                      </p>
                      <p className="text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-poppins font-regular text-text-primary line-clamp-2">
                        {description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-icon-primary shrink-0" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Section - More Services Grid */}
        <div className="flex-1 p-3 sm:p-sm">
          <div className="flex items-center justify-between mb-3 sm:mb-sm">
            <h3 className="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] font-poppins font-medium text-text-highContrast">
              More services
            </h3>
            <button
              onClick={onClose}
              className="flex items-center gap-1 h-8 px-2 bg-button-ghost-bg border border-transparent rounded-[12px] hover:opacity-90 transition-opacity shrink-0"
            >
              <span className="text-[12px] leading-[16px] font-poppins font-medium text-button-outline-fg whitespace-nowrap">
                More
              </span>
              <ChevronsRight className="w-3 h-3 text-button-outline-fg" />
            </button>
          </div>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-sm max-h-[400px] sm:max-h-[516px] overflow-y-auto overscroll-contain"
            style={{ scrollBehavior: 'smooth' }}
          >
            {moreCategories.map((category) => {
              const Icon = categoryIconMap[category.id] || SquareLibrary;
              return (
                <button
                  key={category.id}
                  onClick={onClose}
                  className="bg-background-surface border border-border-primary rounded-[8px] p-4 sm:p-md flex flex-col gap-2 sm:gap-sm hover:opacity-90 transition-opacity text-left h-auto min-h-[180px] sm:min-h-[212px]"
                >
                  <div className="bg-[#0011ee0f] w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#5753c6]" />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <h4 className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-poppins font-regular text-[#5753c6]">
                      {category.name}
                    </h4>
                    <p className="text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-poppins font-regular text-text-highContrast">
                      {category.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CategoriesMegaMenu;

