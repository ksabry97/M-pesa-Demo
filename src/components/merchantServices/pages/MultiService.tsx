import React, { useState } from 'react';
import { Star, Clock, MapPin, ArrowLeft, Heart, Upload, BadgeCheck } from 'lucide-react';
import Booking from '../components/Booking';
import coverImg from '@/assets/profileCover.png';
import Packages from '../components/packages';
import Terms from '../components/Terms';
import Reviews from '../components/Reviews';
import AppointmentPopup from '../components/AppointmentPopup';

function MultiService() {
  const [selectedPackage, setSelectedPackage] = useState<{
    pax: number;
    price: number;
    time: string;
    name: string;
  } | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: 'December 10, 2025',
    time: '00:00 am',
    staff: '---'
  });

  const serviceData = {
    category: 'Food & Beverages',
    name: 'Nyama Choma Catering (Multiple Options)',
    verified: true,
    rating: 4.8,
    reviews: 156,
    duration: 240,
    price: 1500.99,
    description: 'Traditional Kenyan BBQ catering service for events with multiple package options',
    provider: {
      name: 'Kenyan Delights',
      verified: true,
      location: 'Nairobi, Kenya',
      avatar: 'T'
    }
  };

  const handlePackageSelect = (pkg: { pax: number; price: number; time: string; name: string }) => {
    setSelectedPackage(pkg);
    setIsPopupOpen(true);
  };

  const handleAppointmentBook = (date: string, time: string, staff: string) => {
    setAppointmentDetails({ date, time, staff });
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Buttons */}
      <div className="w-full flex justify-between items-center px-10 pt-8">
        <button className="flex items-center gap-2 text-accent-darker2 bg-white px-4 py-2 rounded-md shadow-sm">
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white text-accent-darker2 px-4 py-2 rounded-md shadow-sm">
            <Upload size={16} />
            Share
          </button>
          <button className="bg-white p-3 rounded-md shadow">
            <Heart size={18} className="text-accent-darker2" />
          </button>
        </div>
      </div>

      {/* Header Image */}
      <div className="px-10 mt-6">
        <img 
          src={coverImg} 
          alt="Cover" 
          className="w-full h-[260px] object-cover rounded-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="px-10 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Info Card */}
            <div className="bg-white rounded-2xl shadow p-6">
              {/* Category Badge */}
              <div className="inline-block bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded mb-4">
                {serviceData.category}
              </div>

              {/* Title + Price */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🍖</span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    {serviceData.name}
                    {serviceData.verified && <BadgeCheck className="w-5 h-5 text-accent-darker2" />}
                  </h1>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">${serviceData.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">per session</p>
                </div>
              </div>

              {/* Rating + Duration */}
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(serviceData.rating)
                          ? 'fill-orange-400 text-orange-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm font-semibold text-gray-900 ml-1">{serviceData.rating}</span>
                  <span className="text-sm text-gray-500">({serviceData.reviews} reviews)</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{serviceData.duration} minutes</span>
                </div>
              </div>

              {/* Description */}
              <div className="border-t pt-4">
                <p className="text-gray-700 text-base">
                  {serviceData.description}
                </p>
              </div>
            </div>

            <Packages onPackageSelect={handlePackageSelect} />
            <Terms />
            <Reviews />
          </div>

          {/* Right Section - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <Booking 
                selectedPackage={selectedPackage}
                appointmentDetails={appointmentDetails}
              />
            </div>
          </div>
        </div>
      </div>

      <AppointmentPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onBook={handleAppointmentBook}
      />
    </div>
  );
}

export default MultiService;
