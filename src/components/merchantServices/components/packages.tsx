import React, { useState } from 'react'
import peopleIcon from '@/assets/people.svg';
import checkIcon from '@/assets/check.svg';

interface PackagesProps {
  onPackageSelect: (pkg: {
    pax: number;
    price: number;
    time: string;
    name: string;
  }) => void;
}

function Packages({ onPackageSelect }: PackagesProps) {
  const [selectedPackage, setSelectedPackage] = useState(0);

  const packages = [
    {
      pax: 10,
      price: 12000.99,
      time: "120 min",
    },
    {
      pax: 20,
      price: 12000.99,
      time: "300 min",
    },
    {
      pax: 50,
      price: 3000.99,
      time: "300 min",
    },
    {
      pax: 100,
      price: 8000.99,
      time: "360 min",
    },
  ];

  const handleSelectPackage = (index: number) => {
    setSelectedPackage(index);
    const pkg = packages[index];
    onPackageSelect({
      ...pkg,
      name: `Nyama Choma Catering (${pkg.pax} pax)`
    });
  };

  return (
    <div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Select Package</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg, index) => (
            <div
              key={pkg.pax}
              onClick={() => handleSelectPackage(index)}
              className={`
                rounded-2xl p-5 cursor-pointer transition-all h-[400px] flex flex-col bg-background-panel
                ${selectedPackage === index 
                  ? 'border-2 border-accent-darker2 shadow-lg' 
                  : 'border-2 border-transparent hover:shadow-md'
                }
              `}
            >
              {/* Header with Icon */}
              <div className="flex items-center gap-2 mb-3">
                <img src={peopleIcon} alt="people" className="w-6 h-6 text-gray-600" />
                <h4 className="font-bold text-gray-900 text-lg">
                  {pkg.pax} people
                </h4>
              </div>

              {/* Service Title */}
              <h5 className="font-semibold text-gray-900 mb-4">
                Nyama Choma Catering ({pkg.pax} pax)
              </h5>

              {/* Price & Duration */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <p className="text-accent text-xl">
                    $ {pkg.price.toLocaleString()}
                  </p>
                  <span className="text-gray-500 text-sm">/ {pkg.time}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-5 flex-grow">
                <li className="flex items-start gap-2">
                  <img src={checkIcon} alt="check" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Serves {pkg.pax} people
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <img src={checkIcon} alt="check" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Traditional Kenyan BBQ setup
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <img src={checkIcon} alt="check" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    2 professional chefs
                  </span>
                </li>
              </ul>

              {/* Selected Button */}
              {selectedPackage === index ? (
                <button className="w-full py-2.5 rounded-full border-2 border-accent-darker2 text-accent-darker2 font-semibold bg-white hover:bg-background-panel transition-colors mt-auto">
                  Selected
                </button>
              ) : (
                <button className="w-full py-2.5 rounded-full bg-accent-darker2 text-white font-semibold hover:bg-accent-darker transition-colors mt-auto">
                  Book now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Packages
