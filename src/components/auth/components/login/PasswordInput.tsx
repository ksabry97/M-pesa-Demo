import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { PasswordInputProps } from '@/types/auth';

export const PasswordInput = ({
  id,
  label,
  placeholder,
  register,
  error,
  autoComplete = 'password',
  className = '',
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Label htmlFor={id} className="mb-2 block text-sm font-normal text-primaryGray">
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register}
          className={`${error ? 'border-primaryRed bg-lightBg' : 'bg-lightBg'} ${className}`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-primaryGray hover:text-primaryBlack"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-primaryRed">{error.message}</p>
      )}
    </div>
  );
};

