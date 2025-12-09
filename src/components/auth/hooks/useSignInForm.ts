import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const phoneLoginSchema = yup.object({
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(9, 'Phone number must be at least 9 digits')
    .max(15, 'Phone number must not exceed 15 digits')
    .required('Phone number is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const emailLoginSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const useSignInForm = () => {
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('email');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+254');
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const phoneForm = useForm({
    resolver: yupResolver(phoneLoginSchema),
    mode: 'onChange',
  });

  const emailForm = useForm({
    resolver: yupResolver(emailLoginSchema),
    mode: 'onChange',
  });

  const toggleLoginMethod = () => {
    setLoginMethod((prev) => (prev === 'phone' ? 'email' : 'phone'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors
    
    // Demo credentials
    const demoEmail = 'demo@paysky.com';
    const demoPassword = 'demo123';
    const demoPhone = '712345678';
    
    if (loginMethod === 'phone') {
      const fullPhone = countryCode + phoneNumber;
      
      // Check demo phone credentials
      if (phoneNumber === demoPhone && phoneForm.getValues('password') === demoPassword) {
        navigate('/');
      } else {
        setErrorMessage('Invalid phone number or password. Please try again.');
      }
    } else {
      // Check demo email credentials
      if (email === demoEmail && emailForm.getValues('password') === demoPassword) {
        navigate('/');
      } else {
        setErrorMessage('Invalid email or password. Please try again.');
      }
    }
  };

  const isFormValid = loginMethod === 'phone' 
    ? phoneForm.formState.isValid 
    : emailForm.formState.isValid;

  return {
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
    handleRememberMeChange: setRememberMe,
    handleSubmit,
    navigate,
  };
};

