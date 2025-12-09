import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { OTPVerification } from '@/components/auth/components/OTPVerification';

function OTPPage() {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();

  // Static OTP for testing
  const VALID_OTP = '123456';

  const handleVerify = (otp: string) => {
    console.log('OTP:', otp);
    
    // Verify OTP
    if (otp === VALID_OTP) {
      // Valid OTP - navigate to reset password page
      navigate('/auth/reset-password');
    } else {
      // Invalid OTP - show error (handled by component)
      return false;
    }
  };

  const handleResend = () => {
    // TODO: Call API to resend OTP
    console.log('Resending OTP...');
  };

  return (
     <div className="flex items-center justify-center min-h-screen">
    <OTPVerification
      title={t("otpPage.title")}
      subtitle={t("otpPage.subtitle")}
      phoneNumber="+2 (0)2345678910"
      onVerify={handleVerify}
      onBack={() => navigate(-1)}
      onResend={handleResend}
      type="password"
    />
    </div>
  );
}

export default OTPPage;
