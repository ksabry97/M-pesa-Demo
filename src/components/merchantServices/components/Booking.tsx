import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface BookingProps {
  selectedPackage: {
    pax: number;
    price: number;
    time: string;
    name: string;
  } | null;
  appointmentDetails?: {
    date: string;
    time: string;
    staff: string;
  };
}

function Booking({ selectedPackage, appointmentDetails }: BookingProps) {
  const { t } = useTranslation();
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const bookingData = {
    service: selectedPackage?.name || 'Nyama Choma Catering (20 pax)',
    date: appointmentDetails?.date || 'December 10, 2025',
    time: appointmentDetails?.time || '00:00 am',
    staff: appointmentDetails?.staff || '---',
    duration: selectedPackage?.time || '240 min',
    total: selectedPackage ? `$ ${selectedPackage.price.toLocaleString()}` : '$ 1,500.99'
  };

  const handlePayNow = () => {
    if (!agreeToTerms) {
      alert('Please agree to the cancellation policy and terms of service');
      return;
    }
    console.log('Processing payment...');
  };

  return (
    <div className="bg-white rounded-2xl shadow-md w-full p-6">
      {/* Header */}
      <div className="pb-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Booking Summary</h2>
      </div>

      {/* Booking Details */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-start">
          <span className="text-sm text-gray-600">Service</span>
          <span className="text-sm text-gray-800 text-right">{bookingData.service}</span>
        </div>

        <div className="flex justify-between items-start">
          <span className="text-sm text-gray-600">Date</span>
          <span className="text-sm text-gray-800">{bookingData.date}</span>
        </div>

        <div className="flex justify-between items-start">
          <span className="text-sm text-gray-600">Time</span>
          <span className="text-sm text-gray-800">{bookingData.time}</span>
        </div>

        <div className="flex justify-between items-start">
          <span className="text-sm text-gray-600">Staff</span>
          <span className="text-sm text-gray-800">{bookingData.staff}</span>
        </div>

        <div className="flex justify-between items-start">
          <span className="text-sm text-gray-600">Duration</span>
          <span className="text-sm text-gray-800">{bookingData.duration}</span>
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="mb-6 border-y border-gray-200 py-4">
        <div className="flex items-start gap-2">
          <Checkbox
            id="terms"
            checked={agreeToTerms}
            onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
            className="mt-0.5 cursor-pointer border-gray-300 rounded w-5 h-5"
          />
          <Label
            htmlFor="terms"
            className="text-xs text-gray-900 cursor-pointer leading-relaxed"
          >
            I agree to the cancellation policy and terms of service
          </Label>
        </div>
      </div>

      {/* Total Section */}
      <div className="pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-800">Total</span>
          <span className="text-2xl font-bold text-blue-600">{bookingData.total}</span>
        </div>
      </div>

      {/* Pay Now Button */}
      <Button
        onClick={handlePayNow}
        disabled={!agreeToTerms}
        className={`
          w-full h-12 rounded-lg text-base font-medium transition-colors
          ${!agreeToTerms
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
            : 'bg-accent-darker2 text-white'
          }
        `}
      >
        Pay now
      </Button>
    </div>
  );
}

export default Booking;
