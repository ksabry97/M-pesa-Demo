import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Step1BusinessLocation } from '../components/registration/Step1BusinessLocation';
import { Step2 } from '../components/registration/Step2';
import { Step3 } from '../components/registration/Step3';
import { Step4 } from '../components/registration/Step4';
import { HomePage } from '@/pages';


export const SignUpPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to home after last step
      navigate('/');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1BusinessLocation onNext={handleNext} />;
      case 2:
        return (
          <Step2
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <Step3
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 4:
        return <Step4 onNext={handleNext} onPrevious={handlePrevious} />;
      default:
        return <HomePage />;
    }
  };

  return (
     <div className="min-h-screen flex items-start mt-8 justify-center px-6">
    <div className="w-full max-w-[900px] min-w-[600px]">
      
      {/* Progress Bar */}
      <div className="mb-6">
        <p className="text-base font-medium text-gray-700 mb-3">
          {t('auth.step')} {currentStep} {t('auth.of')} {totalSteps}
        </p>
        <div className="h-2 w-full bg-gray-200 overflow-hidden rounded-full">
          <div
            className="h-full bg-accent-darker2 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      {renderStep()}
      
    </div>
  </div>
  );
};

