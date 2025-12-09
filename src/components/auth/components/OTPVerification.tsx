import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { MessagePopup } from '@/components/auth/components/MessagePopup';
import invalidCredential from "@/assets/invalidcradent.svg";
import type { OTPVerificationProps } from '@/types/auth';

export const OTPVerification = ({
  title,
  subtitle,
  phoneNumber,
  onVerify,
  onBack,
  onResend,
  type = 'phone',
}: OTPVerificationProps) => {
  const { t } = useTranslation("auth");
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60); // 60 seconds countdown
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [showError, setShowError] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Format timer display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle input change
  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only take the last digit
    setOtp(newOtp);

    // Auto-focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    // Focus on the next empty input or last input
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  // Check if all inputs are filled
  const isComplete = otp.every((digit) => digit !== '');

  // Handle continue
  const handleContinue = () => {
    if (isComplete) {
      const enteredOtp = otp.join('');
      const result = onVerify(enteredOtp);
      
      // If verification returns false, show error
      if (result === false) {
        setShowError(true);
      }
    }
  };

  // Handle resend
  const handleResend = () => {
    if (timer === 0) {
      setTimer(60);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
      onResend?.();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-primaryBlack mb-2">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="text-sm text-primaryGray mb-8 text-center">
        {subtitle} {phoneNumber && <span className="font-semibold">{phoneNumber}</span>}
      </p>

      {/* OTP Input Boxes */}
      <div className="flex gap-3 mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type={type === 'password' ? 'password' : 'password'}
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
            className="w-12 h-12 text-center text-lg font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-buttonBlue focus:border-buttonBlue bg-gray-50"
            autoFocus={index === 0}
          />
        ))}
      </div>

      {/* Timer */}
      <p className="text-sm text-primaryGray mb-6">{formatTime(timer)}</p>

      {/* Resend Link */}
      <p className="text-sm text-primaryGray mb-8">
        {t("otpVerification.didntGetCode")}{' '}
        <button
          type="button"
          onClick={handleResend}
          disabled={timer > 0}
          className="text-buttonBlue"
        >
          {t("labels.resend")}
        </button>
      </p>

      {/* Continue Button */}
      <div className="w-full max-w-[260px] my-2">
        <Button
          onClick={handleContinue}
          disabled={!isComplete}
          className={`w-full h-[52px]  rounded-xl ${
            isComplete
              ? 'bg-buttonBlue text-white hover:bg-buttonBlue/90'
              : 'bg-disabledDarkGray text-disabledLightGray cursor-not-allowed'
          }`}
        >
          {t("labels.continue")}
        </Button>
      </div>

      {/* Back Button */}
      <div className="w-full max-w-[260px] ">
        <Button
          onClick={onBack}
          variant="default"
          className="w-full h-[52px] rounded-xl"
        >
          {t("labels.back")}
        </Button>
      </div>

      {/* Error Popup */}
      <MessagePopup
        open={showError}
        onClose={() => {
          setShowError(false);
          setOtp(['', '', '', '', '', '']);
          inputRefs.current[0]?.focus();
        }}
        icon={<img src={invalidCredential} alt="invalid" className="w-15 h-15 mt-10" />}
        title={<span className="text-black font-bold text-center">{t("otpVerification.invalidCredentials")}</span>}
        message={<p className="text-placeholderColor text-center">{t("otpVerification.invalidCredentialsMessage")}</p>}
        primaryButton={{
          label: t("labels.retry"),
          onClick: () => {
            setShowError(false);
            setOtp(['', '', '', '', '', '']);
            inputRefs.current[0]?.focus();
          },
          className: 'bg-buttonBlue text-white w-full h-[52px]',
        }}
      />
    </div>
  );
};

