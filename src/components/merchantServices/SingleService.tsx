import React, { useState } from 'react'
import { Star, Clock, MapPin, ShieldCheck, ArrowLeft, Heart, Upload, BadgeCheck } from 'lucide-react'
import Booking from './Booking'
import coverImg from '@/assets/profileCover.png'
import Packages from './packages'
import Terms from './Terms'
import Reviews from './Reviews'
import AppointmentPopup from './AppointmentPopup'
import AppointmentInline from './AppointmentInline'

function SingleService() {
  // No selectedPackage state needed for single service
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: 'December 10, 2025',
    time: '00:00 am',
    staff: '---'
  });

  const serviceData = {
    category: 'Food & Beverages',
    name: 'Nyama Choma Catering (20 pax)',
    verified: true,
    rating: 4.8,
    reviews: 156,
    duration: 240,
    price: 1500.99,
    description: 'Traditional Kenyan BBQ catering service for events',
    provider: {
      name: 'Kenyan Delights',
      verified: true,
      location: 'Nairobi, Kenya',
      avatar: 'T'
    }
  }

  // Create a package object from serviceData for the booking
  const singlePackage = {
    pax: 20,
    price: serviceData.price,
    time: `${serviceData.duration} min`,
    name: serviceData.name
  };

  const handleAppointmentBook = (date: string, time: string, staff: string) => {
    setAppointmentDetails({ date, time, staff });
  };

  return (
    <div className="min-h-screen bg-background-panel">

      {/* -------------------- Top Buttons Row -------------------- */}
      <div className="w-full flex justify-between items-center px-5 pt-8">
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

      {/* -------------------- Header Image Full Width -------------------- */}
      <div className="px-10 mt-6">
        <img 
          src={coverImg} 
          alt="Cover" 
          className="w-full h-[260px] object-cover rounded-3xl"
        />
      </div>

      {/* -------------------- MAIN GRID -------------------- */}
      <div className="px-10 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* -------------------- LEFT SECTION -------------------- */}
          <div className="lg:col-span-2 space-y-6">

            {/* Service Information Card */}
            <div className="bg-white rounded-2xl shadow p-6">

              {/* Category Badge */}
              <div className="inline-block bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded mb-4">
                {serviceData.category}
              </div>

              {/* Title + Price */}
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  {serviceData.name}
                  {serviceData.verified && <BadgeCheck className="w-5 h-5 text-accent-darker2" />}
                </h1>

                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">${serviceData.price}</p>
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
              <p className="text-gray-700 text-base mb-6">
                {serviceData.description}
              </p>

              {/* Provider */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Service Provider</h3>

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-indigo-100 rounded-md flex items-center justify-center">
                      <span className="text-3xl font-bold text-indigo-900">
                        {serviceData.provider.avatar}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900">{serviceData.provider.name}</h4>
                      </div>
                      

                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <ShieldCheck className="w-5 h-5 inline-block mr-1 text-text-accent" />
                        <span className='text-black'>Verified Provider</span>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <MapPin className="w-5 h-5" />
                        <span>{serviceData.provider.location}</span>
                      </div>
                    </div>
                  </div>

                  <button className="text-sm font-medium text-indigo-900 p-2 rounded-lg bg-[#0000FF08] hover:text-indigo-700">
                    View All Services
                  </button>
                </div>
              </div>
            </div>
            <Terms />
            <Reviews />
          </div>

          {/* -------------------- RIGHT SECTION (BOOKING) -------------------- */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <AppointmentInline onBook={handleAppointmentBook} />
              <Booking 
                selectedPackage={singlePackage}
                appointmentDetails={appointmentDetails}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SingleService
