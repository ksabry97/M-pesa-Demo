export interface AdsBannerProps {
  /**
   * Image source for the ads banner
   */
  image: string;
  
  /**
   * Alt text for the image
   */
  imageAlt?: string;
  
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
 * AdsBanner Component
 * 
 * A full-width responsive ads banner component matching the Figma design.
 * Displays after the Browse Services section.
 * 
 * Figma specs:
 * - Width: 1376px (full width minus padding)
 * - Height: 334px
 * - Responsive on mobile/tablet
 */
export const AdsBanner = ({
  image,
  imageAlt = "Advertisement",
  onClick,
  className = "",
}: AdsBannerProps) => {
  const isClickable = !!onClick;

  return (
    <section className={`w-full mb-12 ${className}`}>
      <div
        className={`
          relative
          w-full
          h-[200px]
          sm:h-[250px]
          md:h-[300px]
          lg:h-[334px]
          rounded-[12px]
          overflow-hidden
          transition-all
          ${isClickable ? "cursor-pointer hover:opacity-90" : ""}
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
        {/* Ads Image */}
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>

        {/* Sponsor Tag - Top Left */}
        <div className="absolute top-2 left-2 z-10">
          <div className="bg-tag-bestSellerBg text-tag-bestSellerFg flex items-center gap-1 h-6 px-2 py-1 rounded">
            <span className="text-label-3 font-medium leading-4">
              Sponsor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsBanner;

