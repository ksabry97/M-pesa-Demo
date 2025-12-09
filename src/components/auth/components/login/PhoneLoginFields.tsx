import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PasswordInput } from './PasswordInput';
import type { PhoneLoginFieldsProps } from '@/types/auth';

export const PhoneLoginFields = ({
  form,
  phoneNumber,
  countryCode,
  onPhoneNumberChange,
  onCountryCodeChange,
}: PhoneLoginFieldsProps) => {
  const countries = [
    { name: "Kenya", flag: "🇰🇪", code: "+254" },
    { name: "Lesotho", flag: "🇱🇸", code: "+266" },
    { name: "Tanzania", flag: "🇹🇿", code: "+255" },
  ];

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
          Phone Number
        </Label>
        <div className="flex gap-1">
          <Select value={countryCode} onValueChange={onCountryCodeChange}>
            <SelectTrigger className="w-[120px] bg-gray-100 rounded-xl">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  <span className="flex items-center gap-2">
                    <span>{country.flag}</span>
                    <span>{country.code}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            id="phoneNumber"
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => {
              const value = e.target.value;
              onPhoneNumberChange(value);
              form.setValue('phoneNumber', value, { shouldValidate: true });
            }}
            className={`flex-1 bg-gray-100 rounded-xl ${
              form.formState.errors.phoneNumber ? 'border-red-500' : ''
            }`}
          />
        </div>
        {form.formState.errors.phoneNumber && (
          <p className="mt-1.5 text-xs text-primaryRed">
            {form.formState.errors.phoneNumber.message}
          </p>
        )}
      </div>
      <PasswordInput
        id="password"
        label="Password"
        placeholder="Enter password"
        register={form.register('password')}
        error={form.formState.errors.password}
        className="rounded-xl"
      />
    </>
  );
};

