import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRegistrationStore } from '../../store/useRegistrationStore';
import type { Step1Props } from '@/types/auth';

export const Step1BusinessLocation = ({ onNext }: Step1Props) => {
  const { t } = useTranslation(); // Remove "auth" namespace
  const { country, agreeToTerms, updateStep1 } = useRegistrationStore();

  const countries = [
    { name: "Kenya", flag: "🇰🇪" },
    { name: "Lesotho", flag: "🇱🇸" },
    { name: "Tanzania", flag: "🇹🇿" },
  ];

  const handleCountryChange = (newCountry: string) => {
    updateStep1({ country: newCountry, agreeToTerms });
  };

  const handleTermsChange = (checked: boolean) => {
    updateStep1({ country, agreeToTerms: checked as boolean });
  };

  const handleNext = () => {
    if (agreeToTerms) {
      onNext();
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="space-y-8 bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
        <div className="space-y-3">
          <h3 className="text-3xl font-bold text-gray-900">
            {t("auth.step1.title")}
          </h3>
          <p className="text-base text-gray-600">
            {t("auth.step1.subtitle")}
          </p>
        </div>

        <div className="space-y-3">
          <label className="text-base font-medium text-gray-900 block">
            {t("auth.step1.countryLabel")}
          </label>
          <Select value={country} onValueChange={handleCountryChange}>
            <SelectTrigger className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl h-14 text-lg border-gray-300 transition-all">
              <SelectValue placeholder={t("auth.step1.selectCountry")} />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {countries.map((countryItem) => (
                <SelectItem 
                  key={countryItem.name} 
                  value={countryItem.name}
                  className="text-lg py-3 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">{countryItem.flag}</span>
                    <span>{countryItem.name}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start gap-3 pt-2">
          <Checkbox
            id="terms"
            checked={agreeToTerms}
            onCheckedChange={handleTermsChange}
            className="mt-1 w-5 h-5"
          />
          <label
            htmlFor="terms"
            className="text-base text-gray-700 leading-relaxed cursor-pointer flex-1"
          >
            {t("auth.step1.agreeToTerms")}{' '}
            <a href="#" className="text-accent-darker2 hover:text-accent-darker font-medium hover:underline">
              {t("auth.step1.userAgreement")}
            </a>{' '}
            {t("auth.step1.and")}{' '}
            <a href="#" className="text-accent-darker2 hover:text-accent-darker font-medium hover:underline">
              {t("auth.step1.termsConditions")}
            </a>
          </label>
        </div>

        <div className="flex justify-end pt-4">
          <Button
            onClick={handleNext}
            disabled={!agreeToTerms}
            className={`w-full sm:w-auto px-16 h-12 text-lg font-medium rounded-xl transition-all ${
              agreeToTerms
                ? "bg-accent-darker2 text-white hover:bg-accent-darker"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {t("auth.next")}
          </Button>
        </div>
      </div>
    </div>
  );
};

