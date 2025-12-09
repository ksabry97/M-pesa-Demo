import * as yup from 'yup';
import type { TFunction } from 'i18next';

export const createPhoneLoginSchema = (t: TFunction) =>
  yup.object({
    phoneNumber: yup
      .string()
      .min(10, t("validation.phoneMinLength"))
      .matches(/^[0-9]+$/, t("validation.phoneDigitsOnly"))
      .required(t("validation.phoneRequired")),
    password: yup
      .string()
      .min(6, t("validation.passwordMinLength"))
      .required(t("validation.passwordRequired")),
    rememberMe: yup.boolean().default(false),
  });

export const createMerchantLoginSchema = (t: TFunction) =>
  yup.object({
    merchantId: yup
      .string()
      .min(3, t("validation.merchantIdMinLength"))
      .required(t("validation.merchantIdRequired")),
    password: yup
      .string()
      .min(6, t("validation.passwordMinLength"))
      .required(t("validation.passwordRequired")),
    rememberMe: yup.boolean().default(false),
  });

export type PhoneLoginFormData = {
  phoneNumber: string;
  password: string;
  rememberMe: boolean;
};

export type MerchantLoginFormData = {
  merchantId: string;
  password: string;
  rememberMe: boolean;
};
