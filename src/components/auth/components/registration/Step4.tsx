import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PasswordCreation } from '@/components/auth/components/PasswordCreation';
import { MessagePopup } from '@/components/auth/components/MessagePopup';
import verficayionSetup from '@/assets/verificationSucc.gif';
import { useRegistrationStore } from '../../store/useRegistrationStore';
import type { Step4Props } from '@/types/auth';

export const Step4 = ({ onNext, onPrevious }: Step4Props) => {
  const { t } = useTranslation("auth");
  const { updateStep4 } = useRegistrationStore();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handlePasswordSubmit = (password: string) => {
    console.log('Password created:', password);
    updateStep4(password);
    setShowSuccessPopup(true);
  };

  const handleContinue = () => {
    setShowSuccessPopup(false);
    onNext();
  };

  return (
    <div className="w-full flex flex-col">
      <div className="space-y-6 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        {/* Password Creation */}
        <PasswordCreation
          title={t("step4.title")}
          subtitle={t("step4.subtitle")}
          buttonLabel={t("step4.buttonLabel")}
          onSubmit={handlePasswordSubmit}
          onBack={onPrevious}
          buttonClassName="bg-accent-darker2 hover:bg-accent-darker text-white"
          backButtonClassName="border-2 border-accent-darker2 text-accent-darker2 hover:bg-accent-darker2 hover:text-white"
        />
      </div>

      {/* Success Popup */}
      <MessagePopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        icon={<img src={verficayionSetup} alt="PIN Success" className="w-24 h-24" />}
        title={t("step4.successTitle")}
        message={t("step4.successMessage")}
        primaryButton={{
          label: t("labels.done"),
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

