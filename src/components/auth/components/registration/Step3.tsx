import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OTPVerification } from '@/components/auth/components/OTPVerification';
import { MessagePopup } from '@/components/auth/components/MessagePopup';
import successVerificationNom from '@/assets/verificationSucc.gif';
import { useRegistrationStore } from '../../store/useRegistrationStore';
import type { Step3Props } from '@/types/auth';

export const Step3 = ({ onNext, onPrevious, phoneNumber }: Step3Props) => {
  const { t } = useTranslation(); // Remove "auth" namespace
  const { countryCode, phoneNumber: storePhoneNumber, setPhoneVerified } = useRegistrationStore();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Use phone number from store if not provided as prop
  const displayPhoneNumber = phoneNumber || `${countryCode} ${storePhoneNumber}`;

  const handleVerify = (otp: string) => {
    console.log('Verifying OTP:', otp);
    // TODO: Call API to verify OTP
    // For now, assume verification is successful
    setPhoneVerified(true);
    setShowSuccessPopup(true);
  };

  const handleContinue = () => {
    setShowSuccessPopup(false);
    onNext();
  };

  const handleResend = () => {
    console.log('Resending OTP...');
    // TODO: Call API to resend OTP
  };

  return (
    <div className="w-full flex flex-col">
      <div className="space-y-6 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        {/* OTP Verification */}
        <OTPVerification
          title={t("auth.step3.title")}
          subtitle={t("auth.step3.subtitle")}
          onVerify={handleVerify}
          onBack={onPrevious}
          onResend={handleResend}
          phoneNumber={`${countryCode || ''} ${phoneNumber || ''}`}
          buttonClassName="bg-accent-darker2 hover:bg-accent-darker text-white"
          backButtonClassName="border-2 border-accent-darker2 text-accent-darker2 hover:bg-accent-darker2 hover:text-white"
          type="phone"
        />
      </div>

      {/* Success Popup */}
      <MessagePopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        icon={<img src={successVerificationNom} alt="Verification Success" className="w-24 h-24" />}
        title={t("auth.step3.successTitle")}
        message={t("auth.step3.successMessage")}
        primaryButton={{
          label: t("auth.labels.continue"),
          onClick: handleContinue,
          className: 'bg-accent-darker2 hover:bg-accent-darker text-white w-full h-[52px] rounded-xl',
        }}
        contentClassName="max-w-md bg-white"
        titleClassName="text-2xl font-bold text-gray-900"
        messageClassName="text-base text-gray-600"
      />
    </div>
  );
};

