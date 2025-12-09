import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useSignInForm } from '../hooks/useSignInForm';
import { PhoneLoginFields } from '../components/login/PhoneLoginFields';
import { EmailLoginFields } from '../components/login/EmailLoginFields';

function SignInPage() {
  const {
    loginMethod,
    phoneNumber,
    countryCode,
    email,
    setPhoneNumber,
    setCountryCode,
    setEmail,
    phoneForm,
    emailForm,
    rememberMe,
    isFormValid,
    errorMessage,
    toggleLoginMethod,
    handleRememberMeChange,
    handleSubmit,
    navigate,
  } = useSignInForm();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
        <p className="text-gray-600">Sign in to your account</p>
        
        {/* Demo Credentials */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-left">
          <p className="font-semibold text-blue-900 mb-1">Demo Credentials:</p>
          {loginMethod === 'email' ? (
            <>
              <p className="text-blue-700">Email: demo@paysky.com</p>
              <p className="text-blue-700">Password: demo123</p>
            </>
          ) : (
            <>
              <p className="text-blue-700">Phone: 712345678</p>
              <p className="text-blue-700">Password: demo123</p>
            </>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Error Message */}
        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{errorMessage}</p>
          </div>
        )}

        {loginMethod === 'phone' ? (
          <PhoneLoginFields
            form={phoneForm}
            phoneNumber={phoneNumber}
            countryCode={countryCode}
            onPhoneNumberChange={setPhoneNumber}
            onCountryCodeChange={setCountryCode}
          />
        ) : (
          <EmailLoginFields
            form={emailForm}
            email={email}
            onEmailChange={setEmail}
          />
        )}

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onCheckedChange={(checked) => handleRememberMeChange(checked as boolean)}
            />
            <Label
              htmlFor="rememberMe"
              className="mb-0 cursor-pointer text-sm font-normal text-gray-700"
            >
              Remember me
            </Label>
          </div>
          <button
            type="button"
            onClick={() => navigate('/auth/otp')}
            className="text-sm text-accent-darker2 transition-colors hover:text-accent-darker"
          >
            Forgot password?
          </button>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isFormValid}
          className={`w-full h-12 rounded-xl text-white font-medium transition-colors ${
            !isFormValid
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
              : 'bg-accent-darker2 hover:bg-accent-darker'
          }`}
        >
          Login
        </Button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-500">
              Or login with
            </span>
          </div>
        </div>

        {/* Toggle Login Method */}
        <Button
          type="button"
          variant="outline"
          onClick={toggleLoginMethod}
          className="w-full h-12 rounded-xl border-2 border-accent-darker2 text-accent-darker2 hover:bg-accent-darker2 hover:text-white transition-colors"
        >
          {loginMethod === 'phone'
            ? 'Login with Email'
            : 'Login with Phone Number'}
        </Button>

        {/* Sign Up Link */}
        <p className="pt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/auth/sign-up')}
            type="button"
            className="font-semibold text-accent-darker2 hover:text-accent-darker transition-colors"
          >
            Create Account
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignInPage;
