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
  const { t } = useTranslation(); // Remove "auth" namespace
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
   <div className="flex flex-col items-center justify-center w-full max-w-[600px] mx-auto px-6">

      {/* Title */}
      <h1 className="text-3xl font-semibold text-black mb-3">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="text-base text-gray-600 mb-10 text-center">
        {subtitle} {phoneNumber && <span className="font-semibold">{phoneNumber}</span>}
      </p>

      {/* OTP Input Boxes */}
      <div className="flex gap-4 mb-6">
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
            className="w-16 h-16 text-center text-2xl font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-buttonBlue focus:border-buttonBlue bg-gray-50"
            autoFocus={index === 0}
          />
        ))}
      </div>

      {/* Timer */}
      <p className="text-base text-gray-600 mb-8">{formatTime(timer)}</p>

      {/* Resend Link */}
      <p className="text-base text-gray-600 mb-10">
        {t("auth.otpVerification.didntGetCode")}{' '}
        <button
          type="button"
          onClick={handleResend}
          disabled={timer > 0}
          className="text-accent-darker2 font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t("auth.labels.resend")}
        </button>
      </p>

      {/* Continue Button */}
      <div className="w-full max-w-[320px] my-3">
        <Button
          onClick={handleContinue}
          disabled={!isComplete}
          className={`w-full h-14 text-lg rounded-xl ${
            isComplete
              ? 'bg-accent-darker2 text-white hover:bg-accent-darker2/90'
              : 'bg-gray-400 text-gray-500 cursor-not-allowed'
          }`}
        >
          {t("auth.labels.continue")}
        </Button>
      </div>

      {/* Back Button */}
      <div className="w-full max-w-[320px]">
        <Button
          onClick={onBack}
          variant="default"
          className="w-full h-14 text-lg rounded-xl"
        >
          {t("auth.labels.back")}
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
        icon={<img src={invalidCredential} alt="invalid" className="w-20 h-20 mt-10" />}
        title={<span className="text-black font-bold text-center">{t("auth.otpVerification.invalidCredentials")}</span>}
        message={<p className="text-placeholderColor text-center">{t("auth.otpVerification.invalidCredentialsMessage")}</p>}
        primaryButton={{
          label: t("auth.labels.retry"),
          onClick: () => {
            setShowError(false);
            setOtp(['', '', '', '', '', '']);
            inputRefs.current[0]?.focus();
          },
          className: 'bg-accent-darker2 text-white w-full h-14 text-lg rounded-xl',
        }}
      />
    </div>
  );
};

