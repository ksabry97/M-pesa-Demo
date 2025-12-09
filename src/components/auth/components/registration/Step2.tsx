import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessagePopup } from '@/components/auth/components/MessagePopup';
import { useRegistrationStore } from '../../store/useRegistrationStore';
import type { Step2Props } from '@/types/auth';

export const Step2 = ({ onNext, onPrevious, onDataChange }: Step2Props) => {
  const { t } = useTranslation("auth");
  const { fullName, phoneNumber, countryCode, updateStep2 } = useRegistrationStore();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const countries = [
    { name: "Kenya", flag: "🇰🇪", code: "+254" },
    { name: "Lesotho", flag: "🇱🇸", code: "+266" },
    { name: "Tanzania", flag: "🇹🇿", code: "+255" },
  ];

  const handleFullNameChange = (value: string) => {
    updateStep2({ fullName: value, phoneNumber, countryCode });
  };

  const handlePhoneNumberChange = (value: string) => {
    updateStep2({ fullName, phoneNumber: value, countryCode });
  };

  const handleCountryCodeChange = (value: string) => {
    updateStep2({ fullName, phoneNumber, countryCode: value });
  };

  const handleNext = () => {
    if (fullName && phoneNumber) {
      setShowConfirmDialog(true);
    }
  };

  const handleConfirm = () => {
    setShowConfirmDialog(false);
    // Save phone data before proceeding
    onDataChange?.({ phoneNumber, countryCode });
    onNext();
  };

  const handleEditNumber = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="space-y-6 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Personal Information
          </h1>
          <p className="text-sm text-gray-600">
            Enter your details to create your account
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium text-gray-900">
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => handleFullNameChange(e.target.value)}
              placeholder="John Doe"
              className="h-12 bg-gray-50 hover:bg-gray-100 border-gray-300 text-base rounded-xl transition-all"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-900">
              Phone Number
            </Label>
            <div className="flex gap-3">
              <Select value={countryCode} onValueChange={handleCountryCodeChange}>
                <SelectTrigger className="w-[130px] bg-gray-50 hover:bg-gray-100 rounded-xl h-12 border-gray-300 transition-all">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code} className="text-base py-2">
                      <span className="flex items-center gap-2">
                        <span className="text-xl">{country.flag}</span>
                        <span>{country.code}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="712345678"
                value={phoneNumber}
                onChange={(e) => handlePhoneNumberChange(e.target.value)}
                className="flex-1 h-12 bg-gray-50 hover:bg-gray-100 border-gray-300 text-base rounded-xl transition-all"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-3 pt-4">
          <Button
            onClick={onPrevious}
            variant="outline"
            className="px-8 h-11 text-base font-medium rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-all"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!fullName || !phoneNumber}
            className={`px-12 h-11 text-base font-medium rounded-xl transition-all ${
              fullName && phoneNumber
                ? "bg-accent-darker2 text-white hover:bg-accent-darker"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <MessagePopup
        open={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        title={t("step2.confirmTitle")}
        message={
          <div className="space-y-1">
            <p className="text-gray-600">
              {t("step2.confirmMessage")}{' '}
              <span className="font-semibold text-gray-900">
                {countryCode} {phoneNumber}
              </span>
              .
            </p>
            <p className="text-gray-600">{t("step2.confirmMessage2")}</p>
          </div>
        }
        primaryButton={{
          label: t("labels.confirm"),
          onClick: handleConfirm,
          className: 'bg-accent-darker2 hover:bg-accent-darker text-white h-[52px] rounded-xl text-base font-medium order-1 w-[340px]',
        }}
        secondaryButton={{
          label: t("labels.editNumber"),
          onClick: handleEditNumber,
          className: 'bg-transparent text-gray-900 hover:text-accent-darker2 border-0 h-[52px] rounded-xl text-base font-medium order-2 w-[340px]',
        }}
        contentClassName="max-w-[440px]"
        footerClassName="flex flex-col gap-3 items-center sm:flex-col"
      />
    </div>
  );
};

