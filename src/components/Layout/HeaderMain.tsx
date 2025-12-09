import { Search, ChevronDown, Globe, Heart } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/Logo.png";
import { Navigate, useNavigate } from "react-router-dom";

const HeaderMain = () => {
  const { i18n } = useTranslation();
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  
  // Refs for click-outside detection
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState(() => {
    return localStorage.getItem("selectedCountry") || "Kenya";
  });
  const [selectedLang, setSelectedLang] = useState(() => {
    const storedLang = localStorage.getItem("i18nextLng") || "en";
    return storedLang === "en"
      ? "English"
      : storedLang === "fr"
      ? "French"
      : "Kiswahili";
  });

  const countries = [
    { name: "Kenya", flag: "ke" },
    { name: "Lesotho", flag: "ls" },
    { name: "Tanzania", flag: "tz" },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "sw", name: "Kiswahili" },
  ];

  const categories = [
    "All Categories",
    "Cleaning Services",
    "Auto Mechanics",
    "Furniture Assembly",
    "Moving & Delivery",
    "Design & UI/UX",
    "Programming & Web Development",
    "Plumbing & Electrical",
    "Home Maintenance",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("selectedCountry", selectedCountry);
  }, [selectedCountry]);

  // Click outside detection for country dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setCountryDropdownOpen(false);
      }
    };

    if (countryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [countryDropdownOpen]);

  // Click outside detection for language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };

    if (langDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langDropdownOpen]);

  // Click outside detection for category dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target as Node)
      ) {
        setCategoryDropdownOpen(false);
      }
    };

    if (categoryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [categoryDropdownOpen]);

  const handleLanguageChange = (lang: (typeof languages)[0]) => {
    setSelectedLang(lang.name);
    i18n.changeLanguage(lang.code);
    setLangDropdownOpen(false);
  };

  const getCountryFlag = () => {
    return countries.find((c) => c.name === selectedCountry)?.flag || "🇰🇪";
  };

  return (
    <div className="bg-background-primary border-b border-border-primary px-4 md:px-8 py-0 overflow-visible">
      <div className="flex flex-col w-full overflow-visible">
        {/* Main Header Row */}
        <div className="flex items-center justify-between gap-2 sm:gap-3 h-[60px] sm:h-[70px] md:h-[80px] w-full overflow-visible">
          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 sm:flex-none sm:w-1/2 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <img
                src={Logo}
                alt="Logo"
                className="h-[20px] sm:h-[24px] md:h-[27px] w-auto object-contain"
              />
            </div>
            <div className="hidden lg:flex items-center gap-0 flex-1 max-w-[600px]">
              {/* Category Dropdown */}
              <div className="relative" ref={categoryDropdownRef}>
                <button
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="flex items-center justify-between gap-2 h-[40px] px-4 bg-input-active  border-r-2 rounded-l-[4px] text-text-highContrast text-[16px] leading-[22px] whitespace-nowrap min-w-[165px]"
                >
                  <span className="font-poppins font-regular tracking-[-0.18px]">
                    All Categories
                  </span>
                  <ChevronDown className="w-4 h-4 text-icon-primary shrink-0" />
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute top-full mt-1 left-0 bg-background-surface border border-border-primary rounded-[4px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] py-1 min-w-[200px] z-[100]">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setCategoryDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-[14px] text-text-primary hover:bg-background-panel transition-colors font-poppins"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Input */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="What service are you looking for today?"
                  className="w-full h-[40px] px-4 pr-10 bg-input-bg text-[16px] leading-[22px] text-text-highContrast placeholder:text-input-placeholder font-poppins font-regular tracking-[-0.18px] focus:outline-none focus:border-input-borderActive focus:bg-input-active transition-colors"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-icon-primary pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0 overflow-visible">
            {/* Country Dropdown */}
            <div className="relative" ref={countryDropdownRef}>
              <button
                onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                className="flex items-center justify-center gap-2 h-[40px] md:h-[48px] px-3 md:px-4 bg-button-ghost-bg  rounded-[12px] hover:bg-background-panel transition-colors"
              >
                <Globe className="w-3 h-3 md:w-4 md:h-4 text-icon-primary" />
                <span className="text-[12px] md:text-[14px] leading-[20px] text-button-outline-fg font-poppins font-medium whitespace-nowrap flex gap-1 items-center">
                  {selectedCountry}{" "}
                  <img
                    src={`https://flagcdn.com/64x48/${getCountryFlag().toLowerCase()}.png`}
                    alt={getCountryFlag()}
                    style={{
                      width: "12px",
                      height: "12px",
                      objectFit: "cover", // or "contain"
                      borderRadius: "2px",
                    }}
                  />
                </span>
                <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-icon-primary" />
              </button>

              {countryDropdownOpen && (
                <div className="absolute top-full mt-1 left-0 md:left-auto md:right-0 bg-background-surface border border-border-primary rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] py-1 min-w-[140px] z-[100]">
                  {countries.map((country) => (
                    <button
                      key={country.name}
                      onClick={() => {
                        setSelectedCountry(country.name);
                        setCountryDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-[14px] text-text-primary hover:bg-background-panel transition-colors font-poppins flex gap-1 items-center"
                    >
                      {country.name}{" "}
                      <img
                        src={`https://flagcdn.com/64x48/${country.flag.toLowerCase()}.png`}
                        alt={country.flag}
                        style={{
                          width: "12px",
                          height: "12px",
                          objectFit: "cover", // or "contain"
                          borderRadius: "2px",
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center justify-center gap-1 md:gap-2 h-[40px] md:h-[48px] px-2 md:px-3 lg:px-4 bg-button-ghost-bg  rounded-[12px] hover:bg-background-panel transition-colors"
              >
                <Globe className="w-3 h-3 md:w-4 md:h-4 text-icon-primary" />
                <span className="text-[12px] md:text-[14px] leading-[20px] text-button-outline-fg font-poppins font-medium">
                  {selectedLang}
                </span>
                <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-icon-primary" />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full mt-1 left-0 md:left-auto md:right-0 bg-background-surface border border-border-primary rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] py-1 min-w-[140px] z-[100]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className="w-full text-left px-4 py-2 text-[14px] text-text-primary hover:bg-background-panel transition-colors font-poppins"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Wishlist Button - Hidden on mobile */}
            <button
              className="hidden sm:flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-button-outline-bg border border-button-outline-border rounded-[12px] hover:bg-background-panel transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-icon-primary" />
            </button>

            {/* Join Button */}
            <button 
            onClick={() => navigate('/auth/login')}
            className="flex items-center justify-center h-[36px] sm:h-[40px] md:h-[48px] px-3 sm:px-4 md:px-6 bg-button-fill-bg text-button-fill-fg rounded-[12px] hover:opacity-90 transition-opacity">
              <span className="text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] font-poppins font-medium">
                Join
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Full width row below main header */}
        <div className="lg:hidden w-full pb-3 md:pb-4 -mx-4 md:-mx-8 px-4 md:px-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full h-[40px] px-4 pr-10 bg-input-bg border border-input-border rounded-[4px] text-[14px] sm:text-[16px] leading-[22px] text-text-highContrast placeholder:text-input-placeholder font-poppins font-regular tracking-[-0.18px] focus:outline-none focus:border-input-borderActive focus:bg-input-active transition-colors"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-icon-primary pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
