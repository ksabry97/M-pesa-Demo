import { Search, MousePointer2, CreditCard } from "lucide-react";

export interface HowItWorksStep {
  /**
   * Step number (1, 2, 3, etc.)
   */
  step: number;

  /**
   * Icon to display for the step
   */
  icon: React.ReactNode;

  /**
   * Title of the step
   */
  title: string;

  /**
   * Description of the step
   */
  description: string;
}

export interface HowItWorksProps {
  /**
   * Optional custom steps (defaults to standard 3-step process)
   */
  steps?: HowItWorksStep[];

  /**
   * Optional section title (defaults to "How It Works")
   */
  title?: string;

  /**
   * Optional subtitle (defaults to "Getting help is simple and straightforward")
   */
  subtitle?: string;

  /**
   * Optional className
   */
  className?: string;
}

/**
 * HowItWorks Component
 *
 * Displays a 3-step process section matching the Figma design exactly.
 * Purple background with white text, white cards with purple borders.
 *
 * @example
 * ```tsx
 * <HowItWorks />
 * ```
 */
export const HowItWorks = ({
  steps,
  title = "How It Works",
  subtitle = "Getting help is simple and straightforward",
  className = "",
}: HowItWorksProps) => {
  // Default steps matching Figma design
  const defaultSteps: HowItWorksStep[] = [
    {
      step: 1,
      icon: <Search className="w-8 h-8" />,
      title: "Browse",
      description:
        "Find the right expert for any task in minutes. Browse verified businesses.",
    },
    {
      step: 2,
      icon: <MousePointer2 className="w-8 h-8" />,
      title: "Select",
      description:
        "Choose the service category you need to browse available providers",
    },
    {
      step: 3,
      icon: <CreditCard className="w-8 h-8" />,
      title: "Book",
      description:
        "Proceed to payment to finalize your order and receive instant confirmation",
    },
  ];

  const displaySteps = steps || defaultSteps;

  return (
    <section className={`w-full bg-accent pb-8 px-4 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto pt-[50px]">
        {/* Section Title and Subtitle */}
        <div className="mb-12 px-2">
          <h2 className="text-[40px] leading-[48px] font-bold text-white mb-2">
            {title}
          </h2>
          <p className="text-[18px] leading-[28px] font-normal text-white">
            {subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col md:flex-row gap-6">
          {displaySteps.map((step) => (
            <div
              key={step.step}
              className="flex-1 bg-background-primary border border-accent-darker rounded-[16px] p-6 shadow-[0px_3px_3px_0px_rgba(0,17,238,0.06)] relative overflow-hidden"
            >
              {/* Large Faded Number Background */}
              <div className="absolute top-[-1px] right-[-1px] h-24 w-24 opacity-5">
                <p className="text-[72px] leading-[88px] font-bold text-accent-darker">
                  {String(step.step).padStart(2, "0")}
                </p>
              </div>

              {/* Decorative Circle */}
              <div className="absolute bottom-[-33px] right-[-36px] w-32 h-32 bg-accent rounded-full opacity-5" />

              {/* Content */}
              <div className="relative flex flex-col gap-1">
                <div className="flex gap-2 items-start">
                  {/* Icon Container */}
                  <div className="bg-accent-subtle w-16 h-16 rounded-[16px] flex items-center justify-center shrink-0 shadow-[0px_3px_3px_0px_rgba(0,17,238,0.06)]">
                    <div className="text-accent-darker2">{step.icon}</div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 flex flex-col gap-1">
                    {/* Step Number */}
                    <p className="text-[24px] leading-[30px] font-medium text-accent-darker">
                      {String(step.step).padStart(2, "0")}
                    </p>

                    {/* Step Title */}
                    <h3 className="text-[20px] leading-[24px] font-bold text-text-highContrast">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[16px] leading-[24px] font-regular text-text-primary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
