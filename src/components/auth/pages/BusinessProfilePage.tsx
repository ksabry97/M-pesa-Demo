import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MessagePopup } from '@/features/auth/components/MessagePopup';
import { cn } from '@/lib/utils';
import { BusinessCategorySelector } from '@/components/shared/BusinessCategorySelector';
import { LocationMapDialog } from '@/components/shared/LocationMapDialog';
import {
  createBusinessProfileSchema,
  type BusinessProfileFormData,
} from '@/features/auth/validation/registration';

import partyPropperImage from '@/assets/party-propper.svg';

function BusinessProfilePage() {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showLocationMap, setShowLocationMap] = useState(false);

  // Create validation schema with translations
  const businessProfileSchema = createBusinessProfileSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BusinessProfileFormData>({
    resolver: yupResolver(businessProfileSchema),
    defaultValues: {
      businessAddress: '',
      businessCategory: '',
      hasPhysicalStore: undefined,
    },
  });

  const hasPhysicalStore = watch('hasPhysicalStore');
  const selectedCategory = watch('businessCategory');

  const onSubmit = (data: BusinessProfileFormData) => {
    console.log('Business Profile submitted:', data);
    // TODO: Implement backend integration to save business profile
    // Show success popup instead of directly navigating
    setShowSuccessPopup(true);
  };

  const handleGetStarted = () => {
    setShowSuccessPopup(false);
    navigate('/dashboard');
  };

   const handleLocationSelect = (location: string) => {
    setValue('businessAddress', location, { shouldValidate: true });
    // Update store after setting value
    // setTimeout(() => updateStoreWithFormData(), 0);
  };


  return (
    <div className="space-y-6 pt-[5rem]">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-primaryBlack">
          {t("businessProfile.title")}
        </h1>
        <p className="text-sm text-primaryGray">
          {t("businessProfile.subtitle")}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Business Address */}
        <div>
          <Label htmlFor="businessAddress" className="mb-2 block text-sm font-normal text-primaryBlack">
            {t("labels.businessAddress")}
          </Label>
            <div className="relative">
            <Input
              id="businessAddress"
              type="text"
              placeholder={t("placeholders.selectLocation")}
              {...register('businessAddress')}
              className={errors.businessAddress ? 'bg-lightBg pr-10 border-primaryRed' : 'bg-lightBg pr-10'}
            />
            {/* Make MapPin clickable */}
            <MapPin
              className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primaryGray cursor-pointer"
              onClick={() => setShowLocationMap(true)}
            />
          </div>

          {/* Location Map Dialog */}
          <LocationMapDialog
            open={showLocationMap}
            onClose={() => setShowLocationMap(false)}
            onSelectLocation={handleLocationSelect}
            currentLocation={watch('businessAddress')}
          />
          {errors.businessAddress && (
            <p className="mt-1.5 text-xs text-primaryRed">
              {errors.businessAddress.message}
            </p>
          )}
        </div>

        {/* Business Category */}
        <BusinessCategorySelector
          value={selectedCategory}
          onChange={(category) =>
            setValue('businessCategory', category.name, { shouldValidate: true })
          }
          error={errors.businessCategory?.message}
        />
        {/* Physical Store Question */}
        <div>
          <Label className="mb-4 block text-sm font-normal text-primaryBlack">
            {t("businessProfile.physicalStoreQuestion")}
          </Label>

          <RadioGroup
            value={hasPhysicalStore}
            onValueChange={(value) => setValue('hasPhysicalStore', value as 'yes' | 'no')}
            className="grid grid-cols-2 gap-4"
          >
            {/* YES option */}
            <label
              htmlFor="yes"
              className={cn(
                "flex items-center gap-3 cursor-pointer rounded-xl bg-lightBg px-4 py-3 transition-all",
               
              )}
            >
              <RadioGroupItem
                value="yes"
                id="yes"
                className="h-5 w-5 rounded-full 
                          flex items-center justify-center 
                          "
              />
              <span className="mb-0 cursor-pointer text-sm font-normal text-primaryBlack">
                {t("labels.yes")}
              </span>
            </label>

            {/* NO option */}
            <label
              htmlFor="no"
              className={cn(
                "flex items-center gap-3 cursor-pointer rounded-xl bg-lightBg px-4 py-3 transition-all",
              )}
            >
              <RadioGroupItem
                value="no"
                id="no"
                className="h-5 w-5 rounded-full"
              />
              <span className="mb-0 cursor-pointer text-sm font-normal text-primaryBlack">
                {t("labels.no")}
              </span>
            </label>
          </RadioGroup>

          {errors.hasPhysicalStore && (
            <p className="mt-1.5 text-xs text-primaryRed">
              {errors.hasPhysicalStore.message}
            </p>
          )}
        </div>

        {/* Save Button */}
        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            variant="buttonBlue"
            className="h-[52px] w-full max-w-[520px] rounded-lg text-base font-medium"
          >
            {t("labels.save")}
          </Button>
        </div>
      </form>

      {/* Success Popup */}
      <MessagePopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        icon={
          <div className="mb-4">
            <img src={partyPropperImage} alt="Success" className="w-25 h-25 " />
          </div>
        }
        title={t("businessProfile.successTitle")}
        message={t("businessProfile.successMessage")}
        primaryButton={{
          label: t("labels.getStarted"),
          onClick: handleGetStarted,
          className: "bg-buttonBlue text-white w-full h-[52px] rounded-lg",
        }}
        contentClassName="max-w-md"
        titleClassName="text-2xl font-semibold text-primaryBlack"
        messageClassName="text-sm text-primaryGray"
      />
    </div>
  );
}

export default BusinessProfilePage;