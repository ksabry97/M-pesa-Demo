import { useTranslation } from 'react-i18next';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PasswordInput } from './PasswordInput';

interface EmailLoginFieldsProps {
  form: any;
  email: string;
  onEmailChange: (value: string) => void;
}

export const EmailLoginFields = ({
  form,
  email,
  onEmailChange,
}: EmailLoginFieldsProps) => {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="space-y-3">
        <Label htmlFor="email" className="text-base font-medium text-gray-700">
          {t("auth.emailAddress")}
        </Label>
        <Input
          id="email"
          type="email"
          placeholder={t("auth.placeholders.enterEmail")}
          value={email}
          onChange={(e) => {
            const value = e.target.value;
            onEmailChange(value);
            form.setValue('email', value, { shouldValidate: true });
          }}
          className={`bg-lightBg rounded-xl h-14 text-lg ${
            form.formState.errors.email ? 'border-primaryRed' : ''
          }`}
        />
        {form.formState.errors.email && (
          <p className="mt-2 text-sm text-primaryRed">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      <PasswordInput
        id="password"
        label={t("auth.labels.password")}
        placeholder={t("auth.placeholders.enterPassword")}
        register={form.register('password')}
        error={form.formState.errors.password}
        className="rounded-xl h-14 text-lg"
      />
    </>
  );
};
