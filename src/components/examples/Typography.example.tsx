/**
 * Example Typography Components using Design Tokens
 * Demonstrates typography token usage
 */

import React from "react";

// Heading Components
export const H3: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h3 className={`text-h3 font-bold text-text-highContrast ${className}`}>
    {children}
  </h3>
);

export const H4: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h4 className={`text-h4 font-bold text-text-highContrast ${className}`}>
    {children}
  </h4>
);

export const H5: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h5 className={`text-h5 font-medium text-text-highContrast ${className}`}>
    {children}
  </h5>
);

export const H6: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h6 className={`text-h6 font-bold text-text-highContrast ${className}`}>
    {children}
  </h6>
);

// Body Text Components
export const Body2: React.FC<{
  children: React.ReactNode;
  className?: string;
  medium?: boolean;
}> = ({ children, className = "", medium = false }) => (
  <p
    className={`text-body-2 ${
      medium ? "font-medium" : "font-regular"
    } text-text-primary ${className}`}
  >
    {children}
  </p>
);

export const Body3: React.FC<{
  children: React.ReactNode;
  className?: string;
  medium?: boolean;
}> = ({ children, className = "", medium = false }) => (
  <p
    className={`text-body-3 ${
      medium ? "font-medium" : "font-regular"
    } text-text-primary ${className}`}
  >
    {children}
  </p>
);

export const Body4: React.FC<{
  children: React.ReactNode;
  className?: string;
  medium?: boolean;
}> = ({ children, className = "", medium = false }) => (
  <p
    className={`text-body-4 ${
      medium ? "font-medium" : "font-regular"
    } text-text-primary ${className}`}
  >
    {children}
  </p>
);

// Label Components
export const Label1: React.FC<{
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
}> = ({ children, className = "", bold = false }) => (
  <label
    className={`text-label-1 ${
      bold ? "font-bold" : "font-regular"
    } text-text-highContrast ${className}`}
  >
    {children}
  </label>
);

export const Label2: React.FC<{
  children: React.ReactNode;
  className?: string;
  semiBold?: boolean;
}> = ({ children, className = "", semiBold = false }) => (
  <label
    className={`text-label-2 ${
      semiBold ? "font-semibold" : "font-regular"
    } text-text-highContrast ${className}`}
  >
    {children}
  </label>
);

// Example usage component
export const TypographyShowcase: React.FC = () => {
  return (
    <div className="p-lg space-y-md bg-background-primary">
      <H3>Heading 3 - Main Title</H3>
      <H4>Heading 4 - Section Title</H4>
      <H5>Heading 5 - Subsection Title</H5>
      <H6>Heading 6 - Small Heading</H6>

      <div className="space-y-xs mt-lg">
        <Body2>
          Body 2 - Default paragraph text with comfortable reading size
        </Body2>
        <Body2 medium>Body 2 Medium - Emphasized paragraph text</Body2>
        <Body3>Body 3 - Smaller body text for secondary content</Body3>
        <Body4>Body 4 - Smallest body text for captions and labels</Body4>
      </div>

      <div className="space-y-xs mt-lg">
        <Label1>Label 1 - Form label</Label1>
        <Label2 semiBold>Label 2 - Emphasized label</Label2>
      </div>
    </div>
  );
};
