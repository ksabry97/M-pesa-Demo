import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import InfoIcon from '@/assets/info-circle.svg';
import type { PasswordCreationProps } from '@/types/auth';
import {
  createPasswordSchema,
  type PasswordFormData,
} from '@/components/auth/validation/registration';

// Password strength calculation
const calculatePasswordStrength = (password: string): number => {
  let strength = 0;
  if (password.length >= 8) strength += 20;
  if (password.length >= 12) strength += 10;
  if (/[a-z]/.test(password)) strength += 20;
  if (/[A-Z]/.test(password)) strength += 20;
  if (/[0-9]/.test(password)) strength += 15;
  if (/[^a-zA-Z0-9]/.test(password)) strength += 15;
  return Math.min(strength, 100);
};

export const PasswordCreation = ({
  title,
  subtitle,
  buttonLabel,
  onSubmit,
  onBack,
}: PasswordCreationProps) => {
  const { t } = useTranslation("auth");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Create password schema with translations
  const passwordSchema = createPasswordSchema(t);

  // Get strength label and color
  const getStrengthDetails = (strength: number): {
    label: string;
    title: string;
    message: string;
    color: string;
    bgColor: string;
    textColor: string;
  } => {
    if (strength === 0)
      return {
        label: '',
        title: '',
        message: '',
        color: '',
        bgColor: 'bg-gray-200',
        textColor: '',
      };
    if (strength < 50)
      return {
        label: t("passwordCreation.weak"),
        title: t("passwordCreation.weakTitle"),
        message: t("passwordCreation.weakMessage"),
        color: 'text-primaryRed',
        bgColor: 'bg-primaryRed',
        textColor: 'text-primaryRed',
      };
    if (strength < 70)
      return {
        label: t("passwordCreation.medium"),
        title: t("passwordCreation.mediumTitle"),
        message: t("passwordCreation.mediumMessage"),
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-500',
        textColor: 'text-yellow-600',
      };
    return {
      label: t("passwordCreation.strong"),
      title: t("passwordCreation.strongTitle"),
      message: '',
      color: 'text-green-600',
      bgColor: 'bg-green-500',
      textColor: 'text-green-600',
    };
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<PasswordFormData>({
    resolver: yupResolver(passwordSchema),
    mode: 'onChange',
    defaultValues: {
      password: '',
    },
  });

  const password = watch('password');

  // Update password strength when password changes
  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(password || ''));
  }, [password]);

  const strengthDetails = getStrengthDetails(passwordStrength);
  const progressWidth =
    strengthDetails.label === t("passwordCreation.strong") ? '100%' : `${Math.min(passwordStrength, 100)}%`;
  const canContinue = isValid && passwordStrength >= 50;

  const handleFormSubmit = (data: PasswordFormData) => {
    onSubmit(data.password);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-primaryBlack mb-2">{title}</h1>

      {/* Subtitle */}
      <p className="text-sm text-primaryGray mb-8 text-center">{subtitle}</p>

      {/* Form */}
      <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full space-y-5">
        {/* Password Field */}
        <div>
          <Label htmlFor="password" className="mb-2 block text-sm font-normal text-primaryGray">
            {t("labels.password")}
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder={t("placeholders.enterNewPassword")}
              {...register('password')}
              className={errors.password ? 'border-primaryRed bg-gray-50' : 'bg-gray-50'}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-primaryGray hover:text-primaryBlack"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Password Strength */}
        {password && (
          <div className="space-y-3">
            {/* Strength Label */}
            {strengthDetails.label && (
              <p className={`text-sm font-medium ${strengthDetails.textColor}`}>
                {strengthDetails.label}
              </p>
            )}

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${strengthDetails.bgColor}`}
                style={{ width: progressWidth }}
              />
            </div>

            {/* Messages with Info Icon */}
            {strengthDetails.title && (
              <div className="flex items-start gap-2">
                <img src={InfoIcon} alt="info" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <ul className="space-y-1">
                  <li className="text-sm text-primaryGray flex items-start">
                    <span className="mr-2">•</span>
                    <span>{strengthDetails.title}</span>
                  </li>
                  {strengthDetails.message && (
                    <li className="text-sm text-primaryGray flex items-start">
                      <span className="mr-2">•</span>
                      <span>{strengthDetails.message}</span>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            disabled={!canContinue}
            className={`h-[52px] min-w-[260px] max-w-[260px] ${
              !canContinue ? 'bg-disabledDarkGray text-disabledLightGray' : 'bg-buttonBlue'
            }`}
          >
            {buttonLabel}
          </Button>
        </div>

        {/* Back Button (optional) */}
        {onBack && (
          <div className="flex justify-center">
            <Button
              type="button"
              onClick={onBack}
              variant="default"
              className="h-[52px] min-w-[260px] max-w-[260px]"
            >
              {t("labels.back")}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

