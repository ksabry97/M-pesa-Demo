import type { ReactNode } from 'react';
import type { UseFormReturn, UseFormRegisterReturn, FieldError } from 'react-hook-form';
import type { PhoneLoginFormData, MerchantLoginFormData } from '@/components/auth/validation/signIn';

// Shared Types

export interface BusinessCategory {
  id: string;
  name: string;
  icon: string;
}

export interface FileUploadItem {
  id: string;
  file: File;
  preview?: string;
  uploadProgress?: number;
  isUploading?: boolean;
}

// Registration Types

export interface RegistrationData {
  // Step 1: Business Location
  country: string;
  agreeToTerms: boolean;
  
  // Step 2: Personal Details
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  
  // Step 3: OTP Verification (no data stored, just verification status)
  isPhoneVerified: boolean;
  
  // Step 4: Password
  password: string;
  
  // Step 5: Business Details
  businessName: string;
  businessCategory: string;
  businessAddress: string;
  nationalId: string;
  businessWebsite?: string;
  contractFiles: FileUploadItem[];
  
  // Step 6: Documents
  nationalIdFront: FileUploadItem[];
  nationalIdBack: FileUploadItem[];
  commercialRegistration: FileUploadItem[];
  taxRegistration: FileUploadItem[];
  
  // Step 7: Review & Agreement
  signature: string;
}

// Auth Components
export interface OTPVerificationProps {
  title: string;
  subtitle: string;
  phoneNumber?: string;
  onVerify: (otp: string) => void | boolean;
  onBack: () => void;
  onResend?: () => void;
  type?: 'phone' | 'password';
}

export interface PasswordCreationProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  onSubmit: (password: string) => void;
  onBack?: () => void;
}

export interface MessagePopupProps {
  open: boolean;
  onClose: () => void;
  // content
  icon?: ReactNode;
  title?: ReactNode;
  message?: ReactNode;
  // Buttons
  primaryButton?: {
    label: string;
    onClick: () => void;
    className?: string;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
    className?: string;
  };
  // Styling
  titleClassName?: string;
  messageClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
}

// Registration Step Components
export interface Step1Props {
  onNext: () => void;
}

export interface Step2Props {
  onNext: () => void;
  onPrevious: () => void;
  onDataChange?: (data: { phoneNumber: string; countryCode: string }) => void;
}

export interface Step3Props {
  onNext: () => void;
  onPrevious: () => void;
  phoneNumber?: string;
}

export interface Step4Props {
  onNext: () => void;
  onPrevious: () => void;
}

export interface Step5Props {
  onNext: () => void;
  onPrevious: () => void;
}

export interface Step6Props {
  onPrevious: () => void;
  onNext?: () => void;
}

export interface ReviewAccountProps {
  onEdit?: () => void;
  onComplete: () => void;
  onBack?: () => void;
}

// Shared Components
export interface BusinessCategorySelectorProps {
  value?: string;
  onChange: (category: BusinessCategory) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  categories?: BusinessCategory[];
  containerClassName?: string;
  triggerClassName?: string;
}

export interface FileUploadSectionProps {
  label: string;
  optional?: boolean;
  description?: ReactNode;
  value: FileUploadItem[];
  onChange: (files: FileUploadItem[]) => void;
  accept?: string;
  multiple?: boolean;
  emptyStateLabel?: string;
  uploadButtonLabel?: string;
  uploadMoreLabel?: string;
  showUploadMore?: boolean;
  simulateUploadProgress?: boolean;
  emptyStateIcon?: ReactNode;
  className?: string;
}

// Sign In Components
export interface PhoneLoginFieldsProps {
  form: UseFormReturn<PhoneLoginFormData>;
  phoneNumber: string;
  countryCode: string;
  onPhoneNumberChange: (value: string) => void;
  onCountryCodeChange: (value: string) => void;
  t: (key: string) => string;
}

export interface MerchantLoginFieldsProps {
  form: UseFormReturn<MerchantLoginFormData>;
  t: (key: string) => string;
}

export interface PasswordInputProps {
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  autoComplete?: string;
  className?: string;
}