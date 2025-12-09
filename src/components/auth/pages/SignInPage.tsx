import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useSignInForm } from '../hooks/useSignInForm';
import { PhoneLoginFields } from '../components/login/PhoneLoginFields';
import { EmailLoginFields } from '../components/login/EmailLoginFields';

function SignInPage() {
  const { t } = useTranslation(); // Remove "auth" namespace
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="bg-white rounded-2xl shadow-lg p-10 w-full 
      min-w-[600px] mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">{t("auth.welcomeBack")}</h2>
        <p className="text-lg text-gray-600">{t("auth.signInToAccount")}</p>
        
        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-blue-50 rounded-xl text-base text-left">
          <p className="font-semibold text-blue-900 mb-2">{t("auth.demoCredentials")}</p>
          {loginMethod === 'email' ? (
            <>
              <p className="text-blue-700">{t("auth.email")}: demo@paysky.com</p>
              <p className="text-blue-700">{t("auth.labels.password")}: demo123</p>
            </>
          ) : (
            <>
              <p className="text-blue-700">{t("auth.phoneNumber")}: 712345678</p>
              <p className="text-blue-700">{t("auth.labels.password")}: demo123</p>
            </>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Error Message */}
        {errorMessage && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-base text-red-600">{errorMessage}</p>
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
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onCheckedChange={(checked) => handleRememberMeChange(checked as boolean)}
              className="w-5 h-5"
            />
            <Label
              htmlFor="rememberMe"
              className="mb-0 cursor-pointer text-base font-normal text-gray-700"
            >
              {t("auth.rememberMe")}
            </Label>
          </div>
          <button
            type="button"
            onClick={() => navigate('/auth/otp')}
            className="text-base text-accent-darker2 transition-colors hover:text-accent-darker font-medium"
          >
            {t("auth.forgotPassword")}
          </button>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isFormValid}
          className={`w-full h-14 text-lg rounded-xl text-white font-medium transition-colors ${
            !isFormValid
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-accent-darker2 hover:bg-white hover:text-accent-darker2 hover:border hover:border-accent-darker2'
          }`}
        >
          {t("login")}
        </Button>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-base">
            <span className="bg-white px-4 text-gray-500">
              {t("auth.orLoginWith")}
            </span>
          </div>
        </div>

        {/* Toggle Login Method */}
        <Button
          type="button"
          variant="outline"
          onClick={toggleLoginMethod}
          className="w-full h-14 text-lg rounded-xl border-2 border-accent-darker2 text-accent-darker2 hover:bg-accent-darker2 hover:text-white transition-colors font-medium"
        >
          {loginMethod === 'phone'
            ? t("auth.loginWithEmail")
            : t("auth.loginWithPhone")}
        </Button>

        {/* Sign Up Link */}
        <p className="pt-6 text-center text-base text-gray-600">
          {t("auth.dontHaveAccount")}{' '}
          <button
            onClick={() => navigate('/auth/sign-up')}
            type="button"
            className="font-semibold text-accent-darker2 hover:text-accent-darker transition-colors"
          >
            {t("auth.createAccount")}
          </button>
        </p>
      </form>
    </div>
    </div>
  );
}

export default SignInPage;
