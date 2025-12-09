import { type Provider } from "../../types";
import { MapPin, ArrowUpRight } from "lucide-react";
import { categories as categoriesData } from "../../data/categories";
import { getServicesByProvider } from "../../data/services";
// Import SVG assets from Figma design
import cardBg from "../../assets/services/card-bg.svg";
import VerificationTag from "../../assets/services/VerificationTag.svg";
// Import placeholder images from assets
import foodImage1 from "../../assets/services/food-1.png";
import foodImage2 from "../../assets/services/food-2.png";
import cleaningImage from "../../assets/services/cleaning-1.png";
import spaImage from "../../assets/services/spa-1.png";

// Array of placeholder images for provider profiles
const placeholderProfileImages = [
  foodImage1,
  foodImage2,
  cleaningImage,
  spaImage,
];

export interface FeaturedProvidersProps {
  /**
   * Array of provider objects to display
   */
  providers: Provider[];

  /**
   * Optional section title (defaults to "Featured Providers")
   */
  title?: string;

  /**
   * Optional click handler for provider cards
   */
  onProviderClick?: (providerId: string) => void;

  /**
   * Optional className
   */
  className?: string;
}

/**
 * FeaturedProviders Component
 *
 * Displays a grid of featured provider cards matching the Figma design exactly.
 * Purple top section with white title, white cards with purple banner, profile image, and details.
 */
export const FeaturedProviders = ({
  providers,
  title = "Featured Providers",
  onProviderClick,
  className = "",
}: FeaturedProvidersProps) => {
  // Get category name from ID
  const getCategoryName = (categoryId: string): string => {
    const category = categoriesData.find((cat) => cat.id === categoryId);
    return category?.name || categoryId.replace(/-/g, " ");
  };

  // Get first category for display
  const getPrimaryCategory = (provider: Provider): string => {
    return provider.categories && provider.categories.length > 0
      ? getCategoryName(provider.categories[0])
      : "Services";
  };

  return (
    <section
      className={`w-full relative bg-[#f0f1fe] flex flex-col items-start pb-8 pt-[100px] px-4 md:px-8 ${className}`}
    >
      {/* Purple Top Section Background - Exact height from Figma: 320.498px */}
      <div className="absolute bg-[#5151cd] h-[320.498px] left-0 top-0 w-full z-0" />

      <div className="relative z-10 w-full max-w-[1376px] mx-auto flex flex-col items-start">
        {/* Section Title Container - Exact from Figma */}
        <div className="flex flex-col items-start relative shrink-0 w-full mb-6">
          <div className="flex items-center px-2 py-1 relative shrink-0">
            <h2 className="text-[32px] leading-[38px] font-bold text-white tracking-[-0.2px] font-poppins">
              {title}
            </h2>
          </div>
        </div>

        {/* Providers Grid Container - Exact from Figma: gap-4 (16px) */}
        <div className="flex flex-wrap gap-4 items-start relative shrink-0 w-full">
          {providers.slice(0, 4).map((provider, index) => {
            const profileImage =
              placeholderProfileImages[index % placeholderProfileImages.length];

            return (
              <a
                key={provider.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onProviderClick?.(provider.id);
                }}
                className="
                  bg-[#fbfdfc]
                  border
                  border-[#d7dad9]
                  border-solid
                  flex
                  flex-col
                  items-center
                  overflow-hidden
                  pb-[60px]
                  pt-0
                  px-0
                  relative
                  rounded-[10px]
                  shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]
                  shrink-0
                  w-full
                  sm:w-[calc(50%-8px)]
                  md:w-[207px]
                  md:h-[296px]
                  cursor-pointer
                  transition-all
                  hover:shadow-lg
                "
              >
                {/* Purple Top Banner with SVG Background - Exact from Figma: 88px height, mb-[-60px] */}
                <div className="h-[88px] mb-[-60px] relative shrink-0 w-full">
                  <div className="absolute inset-0 bg-[#5151cd]" />
                  <img
                    src={cardBg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>

                {/* Profile Section Container - Exact spacing from Figma: gap-2 (8px), mb-[-60px], py-2 (8px) */}
                <div className="flex flex-col gap-2 items-center mb-[-60px] px-0 py-2 relative shrink-0 w-full">
                  {/* Circular Profile Image Container - Exact from Figma: 96px (w-24 h-24), border-4, p-1 (4px) */}
                  <div className="border-4 border-[#d7dad9] border-solid flex flex-col items-start overflow-hidden p-1 relative rounded-full shrink-0 w-24 h-24 bg-[#fbfdfc]">
                    {/* Inner Image - Exact from Figma: h-[88px] */}
                    <div className="h-[88px] w-full relative shrink-0 rounded-full overflow-hidden">
                      {provider.logo ? (
                        <img
                          src={provider.logo}
                          alt={`${provider.name} logo`}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = profileImage;
                          }}
                        />
                      ) : (
                        <img
                          src={profileImage}
                          alt={`${provider.name} profile`}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                      )}
                    </div>
                  </div>

                  {/* Name, Category, Location Container - Exact spacing from Figma: gap-1 (4px), h-[68px] */}
                  <div className="flex flex-col gap-1 items-start relative shrink-0" style={{ height: "68px" }}>
                    {/* Name and Verification Row - Exact from Figma: gap-1 (4px), h-6 (24px) */}
                    <div className="flex gap-1 items-center justify-center h-6 w-full relative shrink-0">
                      <h3 className="text-[16px] leading-[22px] font-normal text-[#1a211e] text-center tracking-[-0.18px] relative shrink-0 font-poppins">
                        {provider.name}
                      </h3>
                      {provider.verified && (
                        <div className="h-6 relative rounded-[4px] shrink-0">
                          <div className="flex gap-2 items-center overflow-hidden p-1 relative rounded-[inherit] h-full">
                            <img
                              src={VerificationTag}
                              alt="Verified"
                              className="w-[18px] h-[18px] shrink-0"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Category - Exact from Figma */}
                    <div className="flex flex-col items-center justify-center relative shrink-0 w-full">
                      <p className="text-[14px] leading-[20px] font-normal text-[#5f6563] text-center tracking-[0px] relative shrink-0 font-poppins">
                        {getPrimaryCategory(provider)}
                      </p>
                    </div>

                    {/* Location Row - Exact from Figma: gap-1 (4px), h-4 (16px) */}
                    <div className="flex gap-1 items-center justify-center h-4 w-full pl-0 pr-[0.008px] py-0 relative shrink-0">
                      <MapPin className="w-3 h-3 text-[#5f6563] shrink-0" />
                      <p className="text-[12px] leading-[16px] font-normal text-[#5f6563] text-center tracking-[0px] relative shrink-0 font-poppins">
                        {provider.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer to push bottom section down - accounts for negative margins */}
                <div className="flex-1 min-h-[60px]"></div>

                {/* Bottom Section with Service Count - Exact from Figma: border-t, p-4 (16px) */}
                <div className="border-t border-[#e6e7ff] border-b-0 border-l-0 border-r-0 border-solid flex items-center justify-between p-4 relative shrink-0 w-full">
                  <div className="flex flex-col items-start justify-center relative shrink-0">
                    <div className="flex flex-col items-start justify-center p-0 relative shrink-0 w-full">
                      <p className="text-[14px] leading-[20px] font-medium text-[#1a211e] text-left tracking-[0px] relative shrink-0 font-poppins">
                        {getServicesByProvider(provider.id).length}
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center p-0 relative shrink-0">
                      <p className="text-[12px] leading-[16px] font-normal text-[#5f6563] text-left tracking-[0px] relative shrink-0 font-poppins">
                        Total services
                      </p>
                    </div>
                  </div>
                  <button
                    className="bg-[rgba(0,0,255,0.03)] flex gap-0 items-center justify-center overflow-hidden p-2 relative rounded-[12px] shrink-0 w-10 h-10 hover:bg-[rgba(0,0,255,0.05)] transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      onProviderClick?.(provider.id);
                    }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#272962] shrink-0" />
                  </button>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
