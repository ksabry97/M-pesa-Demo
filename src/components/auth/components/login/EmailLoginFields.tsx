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
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            const value = e.target.value;
            onEmailChange(value);
            form.setValue('email', value, { shouldValidate: true });
          }}
          className={`bg-lightBg rounded-xl ${
            form.formState.errors.email ? 'border-primaryRed' : ''
          }`}
        />
        {form.formState.errors.email && (
          <p className="mt-1.5 text-xs text-primaryRed">
            {form.formState.errors.email.message}
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
