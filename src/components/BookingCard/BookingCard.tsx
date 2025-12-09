import { Clock } from "lucide-react";
import type { Booking } from "../../types";
import { getServiceById } from "../../data/services";
import { getProviderById } from "../../data/providers";
import { getCategoryById } from "../../data/categories";
import { StarRating } from "../ProductCard/StarRating";
import { ProductTag } from "../ProductCard/ProductTag";

export interface BookingCardProps {
  /**
   * Booking data to display
   */
  booking: Booking;

  /**
   * Optional click handler for "View Details" button
   */
  onClick?: () => void;

  /**
   * Optional className
   */
  className?: string;

  /**
   * Show cancel button
   */
  showCancelButton?: boolean;

  /**
   * Cancel handler
   */
  onCancel?: (bookingId: string) => void;
}

/**
 * BookingCard Component
 *
 * Displays booking information in a horizontal card format matching Figma design.
 * Layout: Image on left (260px x 272px), Content on right (416px width).
 * Card dimensions: 676px width × 272px height (exact Figma specs).
 *
 * @example
 * ```tsx
 * <BookingCard
 *   booking={booking}
 *   onClick={() => navigate(`/bookings/${booking.id}`)}
 *   showCancelButton={true}
 *   onCancel={(id) => cancelBooking(id)}
 * />
 * ```
 */
export const BookingCard = ({
  booking,
  onClick,
  className = "",
  showCancelButton = false,
  onCancel,
}: BookingCardProps) => {
  const service = getServiceById(booking.serviceId);
  const provider = getProviderById(booking.providerId);
  const category = service ? getCategoryById(service.categoryId) : undefined;

  // Get status configuration
  const getStatusConfig = () => {
    switch (booking.status) {
      case "pending":
        return {
          label: "Pending",
          tagBg: "bg-[rgba(223,38,0,0.82)]",
          text: "Waiting for provider confirmation",
          textColor: "text-accent",
        };
      case "ready":
        return {
          label: "Ready",
          tagBg: "bg-[#30a46c]",
          text: "Ready for you to start",
          textColor: "text-[#2b9a66]",
        };
      case "active":
        return {
          label: "Active",
          tagBg: "bg-[#5151cd]",
          text: "Your Service is active Now",
          textColor: "text-[#5753c6]",
        };
      case "cancelled":
        return {
          label: "Canceled",
          tagBg: "bg-[#e5484d]",
          text: "Your Service has been canceled",
          textColor: "text-[#e5484d]",
        };
      case "completed":
        return {
          label: "Finished",
          tagBg: "bg-[#2b9a66]",
          text: "Your Service Finished",
          textColor: "text-[#2b9a66]",
        };
      default:
        return {
          label: booking.status,
          tagBg: "bg-gray-500",
          text: "Status unknown",
          textColor: "text-accent",
        };
    }
  };

  const statusConfig = getStatusConfig();

  // Format price: split integer and decimal parts
  const formatPrice = (price: number) => {
    const parts = price.toFixed(2).split(".");
    return {
      integer: parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), // Add thousand separators
      decimal: parts[1],
    };
  };

  const priceParts = formatPrice(booking.totalPrice);

  // Get duration in minutes
  const durationMinutes = booking.duration || service?.duration || 0;

  return (
    <div
      className={`
        bg-[rgba(253,255,254,0.93)]
        border
        border-border-primary
        rounded-[6px]
        flex
        flex-col
        lg:flex-row
        items-stretch
        overflow-hidden
        w-full
        min-h-[272px]
        lg:h-[272px]
        transition-all
        ${className}
      `}
    >
      {/* Image Section - Top on mobile, Left on desktop */}
      <div className="relative shrink-0 w-full h-[200px] lg:w-[260px] lg:h-[272px] overflow-hidden">
        {service?.images?.[0] ? (
          <img
            src={service.images[0]}
            alt={service.name}
            className="w-full h-full object-cover rounded-t-[6px] lg:rounded-l-[6px] lg:rounded-t-none"
          />
        ) : (
          <div className="w-full h-full bg-background-surface flex items-center justify-center rounded-t-[6px] lg:rounded-l-[6px] lg:rounded-t-none">
            <span className="text-text-primary text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* Content Section - Bottom on mobile, Right on desktop */}
      <div className="flex flex-1 flex-col gap-2 px-4 py-3 lg:py-1 h-full min-w-0">
        {/* Main Content */}
        <div className="flex flex-col gap-1">
          {/* Rating */}
          <div className="flex items-center h-4">
            {service && (
              <StarRating
                rating={service.rating}
                reviewCount={service.reviewCount}
                size={16}
              />
            )}
          </div>

          {/* Tags - Category and Duration */}
          <div className="flex gap-2 items-center py-2">
            {category && <ProductTag type="category" text={category.name} />}
            {durationMinutes > 0 && (
              <ProductTag
                type="duration"
                text={`${durationMinutes} min`}
                icon={<Clock size={16} className="text-white" />}
              />
            )}
          </div>

          {/* Service Name */}
          <div className="flex items-center">
            <h3 className="text-label-2 font-semibold text-text-highContrast line-clamp-2 lg:line-clamp-1">
              {service?.name || "Service"}
            </h3>
          </div>

          {/* Service Description */}
          <p className="text-label-2 font-regular text-text-primary line-clamp-2 lg:line-clamp-1 py-1">
            {service?.description ||
              service?.shortDescription ||
              "Service description"}
          </p>

          {/* Price */}
          <div className="flex items-center gap-1 py-1">
            <span className="text-[24px] leading-6 font-regular text-text-highContrast">
              {booking.currency}
            </span>
            <div className="flex items-center text-h6 font-medium text-text-highContrast">
              <span>{priceParts.integer}</span>
              <span>.{priceParts.decimal}</span>
            </div>
          </div>
        </div>

        {/* Status Section - Consistent spacing */}
        <div className="flex flex-col gap-2 shrink-0">
          <div className="flex gap-2 items-center flex-wrap">
            <div
              className={`
                ${statusConfig.tagBg}
                flex
                items-center
                gap-1
                h-6
                px-2
                py-1
                rounded
                shrink-0
              `}
            >
              <span className="text-label-3 font-medium text-white">
                {statusConfig.label}
              </span>
            </div>
            <p
              className={`text-label-3 font-medium ${
                statusConfig.textColor || "text-accent"
              }`}
            >
              {statusConfig.text}
            </p>
          </div>

          {/* Action Buttons */}
          {booking.status === "completed" && (
            <div className="flex flex-col sm:flex-row gap-[10px] items-stretch sm:items-center py-3 sm:py-2 px-2 sm:px-0 mt-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.();
                }}
                className="
                  flex-1
                  min-h-[44px]
                  sm:h-10
                  py-3
                  sm:py-2
                  px-4
                  bg-button-fill-bg
                  text-button-fill-fg
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  text-body-3
                  font-medium
                  transition-colors
                  hover:opacity-90
                "
              >
                Re-order Again
              </button>
            </div>
          )}
          {booking.status === "ready" && (
            <div className="flex flex-col sm:flex-row gap-[10px] items-stretch sm:items-center py-3 sm:py-2 px-2 sm:px-0 mt-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.();
                }}
                className="
                  flex-1
                  min-h-[44px]
                  sm:h-10
                  py-3
                  sm:py-2
                  px-4
                  bg-button-fill-bg
                  text-button-fill-fg
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  text-body-3
                  font-medium
                  transition-colors
                  hover:opacity-90
                "
              >
                Start Now
              </button>
              {showCancelButton &&
                (booking.status === "pending" ||
                  booking.status === "ready") && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCancel?.(booking.id);
                    }}
                    className="
                    flex-1
                    min-h-[44px]
                    sm:h-10
                    py-3
                    sm:py-2
                    px-4
                    border
                    border-[#e5484d]
                    text-[#e5484d]
                    bg-transparent
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    text-body-3
                    font-medium
                    transition-colors
                    hover:bg-red-50
                  "
                  >
                    Cancel Now
                  </button>
                )}
            </div>
          )}
          {booking.status !== "active" &&
            booking.status !== "cancelled" &&
            booking.status !== "completed" &&
            booking.status === "ready" && (
              <div className="flex flex-col sm:flex-row gap-[10px] items-stretch sm:items-center py-3 sm:py-2 px-2 sm:px-0 mt-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick?.();
                  }}
                  className="
                  flex-1
                  min-h-[44px]
                  sm:h-10
                  py-3
                  sm:py-2
                  px-4
                  bg-button-fill-bg
                  text-button-fill-fg
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  text-body-3
                  font-medium
                  transition-colors
                  hover:opacity-90
                "
                >
                  View Details
                </button>
                {showCancelButton &&
                  (booking.status === "pending" ||
                    booking.status === "ready") && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onCancel?.(booking.id);
                      }}
                      className="
                    flex-1
                    min-h-[44px]
                    sm:h-10
                    py-3
                    sm:py-2
                    px-4
                    border
                    border-[#e5484d]
                    text-[#e5484d]
                    bg-transparent
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    text-body-3
                    font-medium
                    transition-colors
                    hover:bg-red-50
                  "
                    >
                      Cancel Now
                    </button>
                  )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
