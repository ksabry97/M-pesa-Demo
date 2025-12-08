export interface SponsorBannerProps {
  /**
   * Image source for the sponsor banner
   */
  image: string;
  
  /**
   * Alt text for the image
   */
  imageAlt?: string;
  
  /**
   * Height of the banner (default: 918px)
   * Use "auto" or "full" to match parent container height
   */
  height?: number | string | "auto" | "full";
  
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
 * SponsorBanner Component
 * 
 * A sponsor banner component with a "Sponsor" tag overlay.
 * Matches the Figma design for right-side sponsor banners.
 */
export const SponsorBanner = ({
  image,
  imageAlt = "Sponsor",
  height = 918,
  onClick,
  className = "",
}: SponsorBannerProps) => {
  const isClickable = !!onClick;
  
  // Handle different height values
  let heightStyle: string | undefined;
  let heightClass = "";
  
  if (height === "auto" || height === "full") {
    heightClass = height === "full" ? "h-full" : "h-auto";
  } else {
    heightStyle = typeof height === "number" ? `${height}px` : height;
  }

  return (
    <div
      className={`
        bg-[#1f1f1f]
        border
        border-border-primary
        rounded-[12px]
        overflow-hidden
        relative
        w-full
        transition-all
        ${heightClass}
        ${isClickable ? "cursor-pointer hover:opacity-90" : ""}
        ${className}
      `}
      style={heightStyle ? { height: heightStyle } : undefined}
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
      {/* Sponsor Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
      </div>

      {/* Sponsor Tag */}
      <div className="absolute top-2 left-2">
        <div className="bg-tag-bestSellerBg text-tag-bestSellerFg flex items-center gap-1 h-6 px-2 py-1 rounded">
          <span className="text-label-3 font-medium leading-4">
            Sponsor
          </span>
        </div>
      </div>
    </div>
  );
};

export default SponsorBanner;

