import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PasswordCreation } from '@/components/auth/components/PasswordCreation';
import { MessagePopup } from '@/components/auth/components/MessagePopup';
import verificationGif from '@/assets/passReset.gif';

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePasswordSubmit = (password: string) => {
    console.log('Password reset:', password);
    // TODO: Call API to reset password
    // Show success popup
    setShowSuccess(true);
  };

  return (
    <>
     <div className="flex items-center justify-center min-h-screen ">
      <PasswordCreation
        title="Create a new Password"
        subtitle="Create a strong password to secure your account"
        buttonLabel="Save Password"
        onSubmit={handlePasswordSubmit}
      />
    </div>

      <MessagePopup
        open={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          navigate('/auth/login');
        }}
        icon={<img src={verificationGif} alt="success" className="w-[110px] h-[110px]" />}
        title={<span className="text-black font-bold text-center">Password set successfully</span>}
        message={
          <p className="text-placeholderColor text-center">
            Remember to keep your password code safe and secure..
          </p>
        }
        primaryButton={{
          label: 'Back to Login',
          onClick: () => {
            setShowSuccess(false);
            navigate('/auth/login');
          },
          className: 'bg-accent-darker2 text-white w-full',
        }}
      />
    </>
  );
}

export default ResetPasswordPage;
