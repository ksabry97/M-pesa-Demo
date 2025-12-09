import * as yup from 'yup';

/**
 * Creates password validation schema
 * @param t - Translation function from react-i18next
 */
export const createPasswordSchema = (t: (key: string) => string) => {
  return yup.object({
    password: yup
      .string()
      .min(8, t("validation.passwordMinLength8"))
      .required(t("validation.passwordRequired")),
  });
};

/**
 * Creates business info validation schema (Step 5)
 * @param t - Translation function from react-i18next
 */
export const createBusinessInfoSchema = (t: (key: string) => string) => {
  return yup.object({
    businessName: yup
      .string()
      .min(3, t("validation.businessNameRequired"))
      .required(t("validation.businessNameRequired")),
    businessCategory: yup
      .string()
      .min(1, t("validation.businessCategoryRequired"))
      .required(t("validation.businessCategoryRequired")),
    businessAddress: yup
      .string()
      .min(3, t("validation.businessAddressRequired"))
      .required(t("validation.businessAddressRequired")),
    nationalId: yup
      .string()
      .min(10, t("validation.nationalIdMinLength"))
      .required(t("validation.nationalIdRequired")),
    businessWebsite: yup
      .string()
      .url(t("validation.invalidUrl"))
      .transform((value) => value || undefined)
      .optional(),
  });
};

/**
 * Creates business profile validation schema
 * @param t - Translation function from react-i18next
 */
export const createBusinessProfileSchema = (t: (key: string) => string) => {
  return yup.object({
    businessAddress: yup
      .string()
      .min(3, t("validation.businessAddressRequired"))
      .required(t("validation.businessAddressRequired")),
    businessCategory: yup
      .string()
      .min(1, t("validation.businessCategoryRequired"))
      .required(t("validation.businessCategoryRequired")),
    hasPhysicalStore: yup
      .string()
      .oneOf(['yes', 'no'], t("validation.physicalStoreRequired"))
      .required(t("validation.physicalStoreRequired")),
  });
};

// Type exports for form data
export type PasswordFormData = yup.InferType<ReturnType<typeof createPasswordSchema>>;
export type BusinessInfoFormData = yup.InferType<ReturnType<typeof createBusinessInfoSchema>>;
export type BusinessProfileFormData = yup.InferType<ReturnType<typeof createBusinessProfileSchema>>;

