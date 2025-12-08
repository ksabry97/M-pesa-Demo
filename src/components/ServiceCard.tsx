import { type ReactNode } from "react";

export interface ServiceCardProps {
  /**
   * Icon to display in the card. Can be a React component (e.g., from lucide-react) or an image URL
   */
  icon: ReactNode | string;
  
  /**
   * Title of the service
   */
  title: string;
  
  /**
   * Description of the service
   */
  description: string;
  
  /**
   * Optional click handler for the card
   */
  onClick?: () => void;
  
  /**
   * Optional additional CSS classes
   */
  className?: string;
}

/**
 * ServiceCard Component
 * 
 * A reusable service card component matching the Figma design.
 * Displays an icon, title, and description in a clean, modern card layout.
 * 
 * @example
 * ```tsx
 * <ServiceCard
 *   icon={<Sparkles className="w-6 h-6" />}
 *   title="Cleaning Services"
 *   description="Thorough home and office cleaning by trusted professionals"
 *   onClick={() => console.log('Card clicked')}
 * />
 * ```
 */
export const ServiceCard = ({
  icon,
  title,
  description,
  onClick,
  className = "",
}: ServiceCardProps) => {
  const isClickable = !!onClick;

  return (
    <div
      className={`
        bg-background-surface
        border
        border-border-primary
        rounded-[8px]
        p-6
        flex
        flex-col
        gap-4
        items-start
        w-full
        transition-all
        ${isClickable ? "cursor-pointer hover:shadow-md" : ""}
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
      {/* Icon Container */}
      <div
        className="
          bg-[rgba(0,17,238,0.06)]
          flex
          items-center
          justify-center
          p-2
          rounded-[14px]
          w-12
          h-12
          shrink-0
        "
      >
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-6 h-6"
          />
        ) : (
          <div className="w-6 h-6 flex items-center justify-center text-accent-darker">
            {icon}
          </div>
        )}
      </div>

      {/* Title */}
      <h3
        className="
          text-base
          leading-6
          font-regular
          text-text-accent
          tracking-[-0.3125px]
          w-full
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-sm
          leading-5
          font-regular
          text-text-highContrast
          tracking-[-0.1504px]
          w-full
          whitespace-pre-wrap
        "
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

