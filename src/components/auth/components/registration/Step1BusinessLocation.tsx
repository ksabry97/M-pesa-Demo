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
  const { t } = useTranslation("auth");
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
      <div className="space-y-6 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        {/* Title */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900">
            Where is your business located?
          </h3>
          <p className="text-sm text-gray-600">
            Select your country to continue
          </p>
        </div>

        {/* Country Select */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-900 block">
            Country
          </label>
          <Select value={country} onValueChange={handleCountryChange}>
            <SelectTrigger className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl h-12 text-base border-gray-300 transition-all">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {countries.map((countryItem) => (
                <SelectItem 
                  key={countryItem.name} 
                  value={countryItem.name}
                  className="text-base py-2 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl">{countryItem.flag}</span>
                    <span>{countryItem.name}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          <Checkbox
            id="terms"
            checked={agreeToTerms}
            onCheckedChange={handleTermsChange}
            className="mt-0.5"
          />
          <label
            htmlFor="terms"
            className="text-sm text-gray-700 leading-relaxed cursor-pointer flex-1"
          >
            I agree to the{' '}
            <a href="#" className="text-accent-darker2 hover:text-accent-darker font-medium hover:underline">
              User Agreement
            </a>{' '}
            and{' '}
            <a href="#" className="text-accent-darker2 hover:text-accent-darker font-medium hover:underline">
              Terms & Conditions
            </a>
          </label>
        </div>

        {/* Next Button */}
        <div className="flex justify-end pt-4">
          <Button
            onClick={handleNext}
            disabled={!agreeToTerms}
            className={`w-full sm:w-auto px-12 h-11 text-base font-medium rounded-xl transition-all ${
              agreeToTerms
                ? "bg-accent-darker2 text-white hover:bg-accent-darker"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

