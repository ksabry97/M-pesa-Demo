import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { RegistrationData } from '@/types/auth';

interface RegistrationStore extends RegistrationData {
  // Actions
  updateStep1: (data: { country: string; agreeToTerms: boolean }) => void;
  updateStep2: (data: { fullName: string; countryCode: string; phoneNumber: string }) => void;
  setPhoneVerified: (verified: boolean) => void;
  updateStep4: (password: string) => void;
  updateStep5: (data: {
    businessName: string;
    businessCategory: string;
    businessAddress: string;
    nationalId: string;
    businessWebsite?: string;
    contractFiles: RegistrationData['contractFiles'];
  }) => void;
  updateStep6: (data: {
    nationalIdFront: RegistrationData['nationalIdFront'];
    nationalIdBack: RegistrationData['nationalIdBack'];
    commercialRegistration: RegistrationData['commercialRegistration'];
    taxRegistration: RegistrationData['taxRegistration'];
  }) => void;
  updateSignature: (signature: string) => void;
  submitRegistration: () => Promise<RegistrationData>;
  resetStore: () => void;
}

const initialData: RegistrationData = {
  // Step 1
  country: '',
  agreeToTerms: false,
  
  // Step 2
  fullName: '',
  countryCode: '+20',
  phoneNumber: '',
  
  // Step 3
  isPhoneVerified: false,
  
  // Step 4
  password: '',
  
  // Step 5
  businessName: '',
  businessCategory: '',
  businessAddress: '',
  nationalId: '',
  businessWebsite: '',
  contractFiles: [],
  
  // Step 6
  nationalIdFront: [],
  nationalIdBack: [],
  commercialRegistration: [],
  taxRegistration: [],
  
  // Step 7
  signature: '',
};

export const useRegistrationStore = create<RegistrationStore>()(
  persist(
    (set, get) => ({
      ...initialData,
      
      updateStep1: (data) => {
        set((state) => ({
          ...state,
          country: data.country,
          agreeToTerms: data.agreeToTerms,
        }));
      },
      
      updateStep2: (data) => {
        set((state) => ({
          ...state,
          fullName: data.fullName,
          countryCode: data.countryCode,
          phoneNumber: data.phoneNumber,
        }));
      },
      
      setPhoneVerified: (verified) => {
        set((state) => ({
          ...state,
          isPhoneVerified: verified,
        }));
      },
      
      updateStep4: (password) => {
        set((state) => ({
          ...state,
          password,
        }));
      },
      
      updateStep5: (data) => {
        set((state) => ({
          ...state,
          businessName: data.businessName,
          businessCategory: data.businessCategory,
          businessAddress: data.businessAddress,
          nationalId: data.nationalId,
          businessWebsite: data.businessWebsite,
          contractFiles: data.contractFiles,
        }));
      },
      
      updateStep6: (data) => {
        set((state) => ({
          ...state,
          nationalIdFront: data.nationalIdFront,
          nationalIdBack: data.nationalIdBack,
          commercialRegistration: data.commercialRegistration,
          taxRegistration: data.taxRegistration,
        }));
      },
      
      updateSignature: (signature) => {
        set((state) => ({
          ...state,
          signature,
        }));
      },
      
      submitRegistration: async () => {
        const state = get();
        const payload: RegistrationData = {
          country: state.country,
          agreeToTerms: state.agreeToTerms,
          fullName: state.fullName,
          countryCode: state.countryCode,
          phoneNumber: state.phoneNumber,
          isPhoneVerified: state.isPhoneVerified,
          password: state.password,
          businessName: state.businessName,
          businessCategory: state.businessCategory,
          businessAddress: state.businessAddress,
          nationalId: state.nationalId,
          businessWebsite: state.businessWebsite,
          contractFiles: state.contractFiles,
          nationalIdFront: state.nationalIdFront,
          nationalIdBack: state.nationalIdBack,
          commercialRegistration: state.commercialRegistration,
          taxRegistration: state.taxRegistration,
          signature: state.signature,
        };
        
        // TODO: Replace with actual API call
        console.log('Submitting registration:', payload);
        
        // Simulate API call
        // await registrationService.submit(payload);
        
        // Reset store after successful submission
        get().resetStore();
        
        return payload;
      },
      
      resetStore: () => {
        set(initialData);
      },
    }),
    {
      name: 'registration-storage', 
      // Custom storage that excludes File objects (they can't be serialized)
      partialize: (state) => ({
        // Persist all fields except file arrays (File objects can't be serialized)
        country: state.country,
        agreeToTerms: state.agreeToTerms,
        fullName: state.fullName,
        countryCode: state.countryCode,
        phoneNumber: state.phoneNumber,
        isPhoneVerified: state.isPhoneVerified,
        password: state.password,
        businessName: state.businessName,
        businessCategory: state.businessCategory,
        businessAddress: state.businessAddress,
        nationalId: state.nationalId,
        businessWebsite: state.businessWebsite,
        signature: state.signature,
      }),
    }
  )
);

