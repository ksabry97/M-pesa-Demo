import { Search, ChevronDown, Globe, Languages, LogIn, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(() => {
    return localStorage.getItem('selectedCountry') || 'Kenya';
  });
  const [selectedLang, setSelectedLang] = useState(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    return storedLang.toUpperCase().slice(0, 2);
  });

  const countries = ['Kenya', 'Lesotho', 'Tanzania'];
  const languages = [
    { code: 'EN', name: 'English', i18nCode: 'en' },
    { code: 'FR', name: 'French', i18nCode: 'fr' },
    { code: 'SW', name: 'Kiswahili', i18nCode: 'sw' }
  ];

  useEffect(() => {
    localStorage.setItem('selectedCountry', selectedCountry);
  }, [selectedCountry]);

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setSelectedLang(lang.code);
    i18n.changeLanguage(lang.i18nCode);
    setLangDropdownOpen(false);
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-1 py-4">
        <div className="flex items-center justify-between gap-2">
          {/* Logo Section - Left */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 flex items-center justify-center rounded">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">M-Pesa</span>
              <span className="text-sm text-gray-400">marketplace</span>
            </div>
          </div>

          {/* Search Bar - Center */}
          <div className="flex-1 max-w-2xl">
            <div className="relative flex items-center">
              <div className="absolute left-4">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="px-6 py-2.5 bg-green-600 text-white font-medium rounded-r-lg hover:bg-green-700 transition-colors">
                {t('search')}
              </button>
            </div>
          </div>

          {/* Controls - Right */}
          <div className="flex items-center gap-4">
            {/* Country Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">{selectedCountry}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              {countryDropdownOpen && (
                <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[120px] z-50">
                  {countries.map((country) => (
                    <button
                      key={country}
                      onClick={() => {
                        setSelectedCountry(country);
                        setCountryDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {country}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Language Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Languages className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">{selectedLang}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              {langDropdownOpen && (
                <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[140px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Shopping Cart Button */}
            <button className="relative flex items-center gap-2 px-4 py-2">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
            </button>
            {/* Login Button */}
            <button className="flex items-center gap-2 px-6 py-2 text-black">
              <LogIn className="w-4 h-4" />
              {t('login')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
