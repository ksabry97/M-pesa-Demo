/**
 * Example Button Component using Design Tokens
 * Demonstrates how to use the design system in React components
 */

import React from "react";

type ButtonVariant = "fill" | "outline" | "ghost" | "alpha";
type ButtonSize = "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

/**
 * Button component showcasing design token usage
 *
 * @example
 * // Using with Tailwind classes (recommended)
 * <Button variant="fill">Primary Button</Button>
 * <Button variant="outline" size="lg">Secondary Button</Button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "fill",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  // Base classes using design tokens
  const baseClasses =
    "font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant classes using design tokens from Tailwind config
  const variantClasses = {
    fill: "bg-button-fill-bg text-button-fill-fg hover:opacity-90",
    outline:
      "bg-button-outline-bg text-button-outline-fg border-2 border-button-outline-border hover:bg-accent hover:text-white",
    ghost:
      "bg-button-ghost-bg text-text-highContrast hover:bg-background-panel",
    alpha: "bg-button-alpha-bg text-button-alpha-fg hover:bg-opacity-80",
  };

  // Size classes using design tokens
  const sizeClasses = {
    md: "h-component-md px-md text-body-3 rounded-md",
    lg: "h-component-lg px-lg text-body-2 rounded-md",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
