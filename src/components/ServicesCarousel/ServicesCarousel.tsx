import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { type ServiceCardProps } from "../ServiceCard";

export interface ServiceCarouselItem {
  /**
   * Icon to display (for reference, but we'll use background image in carousel)
   */
  icon?: ServiceCardProps["icon"];
  
  /**
   * Title of the service
   */
  title: string;
  
  /**
   * Description/subtitle of the service
   */
  description: string;
  
  /**
   * Background image URL for the carousel slide
   */
  backgroundImage?: string;
  
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export interface ServicesCarouselProps {
  /**
   * Array of services to display in the carousel
   */
  services: ServiceCarouselItem[];
  
  /**
   * Optional click handler for service cards
   */
  onServiceClick?: (index: number) => void;
  
  /**
   * Auto-play interval in milliseconds (0 to disable)
   */
  autoPlay?: number;
  
  /**
   * Optional className
   */
  className?: string;
}

/**
 * ServicesCarousel Component
 * 
 * A banner-style carousel component matching the Figma design.
 * Displays services with background images, text overlays, and navigation arrows.
 */
export const ServicesCarousel = ({
  services,
  onServiceClick,
  autoPlay = 0,
  className = "",
}: ServicesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay > 0 && services.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, autoPlay);

      return () => clearInterval(interval);
    }
  }, [autoPlay, services.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  // Default background images for services (you can replace these with actual images)
  const getBackgroundImage = (service: ServiceCarouselItem) => {
    if (service.backgroundImage) {
      return service.backgroundImage;
    }
    // Fallback to a placeholder or service-specific image
    return "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=1440&h=600&fit=crop";
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Carousel Container */}
      <div className="relative h-[600px] w-full overflow-hidden rounded-[12px]">
        {/* Slides Container with Transition */}
        <div className="relative h-full w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  src={getBackgroundImage(service)}
                  alt={service.title}
                  className="h-full w-full object-cover object-center"
                />
                {/* Gradient Overlay - matches Figma: from 18.393% to 62.335% */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[18.393%] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.5)] to-[62.335%]" />
              </div>

              {/* Content Overlay */}
              {index === currentIndex && (
                <div className="relative z-10 flex h-full items-center px-[164px] py-8">
                  <div className="flex flex-col gap-[11px]">
                    {/* Title - matches Figma H3 styling */}
                    <h2 className="text-[40px] font-bold leading-[48px] tracking-[-0.3px] text-white">
                      {service.title}
                    </h2>
                    
                    {/* Description - matches Figma Body-2 styling */}
                    <p className="text-base font-normal leading-6 text-white">
                      {service.description}
                    </p>
                    
                    {/* Book Now Button - matches Figma button styling */}
                    <button
                      onClick={() => {
                        onServiceClick?.(index);
                        service.onClick?.();
                      }}
                      className="mt-2 flex h-12 w-fit items-center justify-center gap-2 rounded-[12px] bg-[#272962] px-4 py-2 transition-all hover:bg-[#1f1f4d]"
                    >
                      <span className="text-sm font-medium leading-5 text-white">
                        Book now
                      </span>
                      <ChevronsRight className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows - matches Figma positioning (left-16 = 64px) */}
        {services.length > 1 && (
          <>
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="
                absolute
                left-16
                top-1/2
                z-20
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-transparent
                bg-background-surface
                shadow-md
                transition-all
                hover:bg-background-panel
              "
              aria-label="Previous service"
            >
              <ChevronLeft className="h-5 w-5 text-text-highContrast" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="
                absolute
                right-16
                top-1/2
                z-20
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-transparent
                bg-background-surface
                shadow-md
                transition-all
                hover:bg-background-panel
              "
              aria-label="Next service"
            >
              <ChevronRight className="h-5 w-5 text-text-highContrast" />
            </button>
          </>
        )}

        {/* Slide Indicators (optional) */}
        {services.length > 1 && (
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesCarousel;
