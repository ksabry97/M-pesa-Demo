import { LayoutList, ChevronDown, Flame, Zap } from "lucide-react";
import { useState, useRef } from "react";
import CategoriesMegaMenu from "./CategoriesMegaMenu";

const HeaderSubNav = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="bg-background-panel border-border-primary px-4 md:px-8 py-2 relative">
      <div className="mx-auto">
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-1">
          {/* All Categories Button */}
          <div className="relative shrink-0 z-[99]">
            <button
              ref={buttonRef}
              onClick={(e) => {
                e.stopPropagation();
                setCategoriesOpen(!categoriesOpen);
              }}
              className="flex items-center gap-1.5 sm:gap-2 h-[40px] sm:h-[44px] md:h-[48px] px-3 sm:px-4 bg-button-fill-bg text-button-fill-fg rounded-[12px] hover:opacity-90 transition-opacity"
            >
              <LayoutList className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] font-poppins font-medium whitespace-nowrap">
                All categories
              </span>
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden sm:flex items-center justify-center w-0 h-[48px]">
            <div className="w-px h-full bg-border-primary rotate-0"></div>
          </div>

          {/* Deals Button */}
          <button className="flex items-center gap-1.5 sm:gap-2 h-[40px] sm:h-[44px] md:h-[48px] px-2 sm:px-3 md:px-4 bg-transparent rounded-[12px] hover:bg-background-primary transition-colors shrink-0">
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-icon-primary" />
            <span className="text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] text-button-outline-fg font-poppins font-medium whitespace-nowrap">
              Deals
            </span>
          </button>

          {/* Flash Sale Button with Hot Tag */}
          <button className="flex items-center gap-1.5 sm:gap-2 h-[40px] sm:h-[44px] md:h-[48px] px-2 sm:px-3 md:px-4 bg-transparent  rounded-[12px] hover:bg-background-primary transition-colors shrink-0">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-icon-primary" />
            <span className="text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] text-button-outline-fg font-poppins font-medium whitespace-nowrap">
              Flash Sale
            </span>
            <span className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-tag-hotOffers text-white text-[10px] sm:text-[11px] md:text-[12px] leading-[16px] tracking-[-0.12px] font-poppins font-medium rounded-[4px]">
              Hot
            </span>
          </button>
        </div>
      </div>
      
      {/* Render mega menu outside overflow container */}
      <CategoriesMegaMenu
        isOpen={categoriesOpen}
        onClose={() => setCategoriesOpen(false)}
        triggerRef={buttonRef}
      />
    </div>
  );
};

export default HeaderSubNav;
