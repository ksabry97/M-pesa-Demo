import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import LogoWhite from '../../assets/logo-white.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-background-accentDarker2 text-text-white rounded-t-[16px] pt-lg px-lg">
      <div className="w-full">
        {/* Top Section - 4 Columns */}
        <div className="min-h-[220px] mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Left Column - Company Info */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="h-8">
                <img 
                  src={LogoWhite} 
                  alt="M-Pesa Marketplace Logo" 
                  className="h-[27px] w-auto object-contain"
                />
              </div>
              
              {/* Description */}
              <p className="text-body-2 text-text-white leading-[24px] tracking-[-0.3125px]">
                Connecting you with verified professionals for all your daily service needs. Fast, reliable, and trusted by thousands.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-text-white flex-shrink-0" />
                  <span className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px]">
                    support@mpesa-marketplace.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-text-white flex-shrink-0" />
                  <span className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px]">
                    1-800-SERVICE
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-text-white flex-shrink-0" />
                  <span className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px]">
                    Nairobi, Kenya
                  </span>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-body-2 text-text-white font-regular leading-[24px] tracking-[-0.3125px]">
                Services
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Design & UI/UX
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Programming
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Home Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Auto Repair
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Pet Care
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-body-2 text-text-white font-regular leading-[24px] tracking-[-0.3125px]">
                Company
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Become a Pro
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-body-2 text-text-white font-regular leading-[24px] tracking-[-0.3125px]">
                Support
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section - Download App */}
        <div className="border-t border-border-primary pt-[33px] pb-0">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 min-h-[93px]">
            <div className="flex flex-col gap-2">
              <h3 className="text-body-2 text-text-white font-regular leading-[24px] tracking-[-0.3125px]">
                Download Our App
              </h3>
              <p className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px]">
                Get the best experience on mobile
              </p>
            </div>
            <div className="flex gap-4">
              {/* App Store Button */}
              <a 
                href="#" 
                className="bg-accent flex items-center gap-2 px-6 py-0 h-[60px] rounded-[10px] hover:opacity-90 transition-opacity"
              >
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-white text-xs">📱</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-body-4 text-text-white leading-[16px]">
                    Download on the
                  </span>
                  <span className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] font-medium">
                    App Store
                  </span>
                </div>
              </a>
              
              {/* Google Play Button */}
              <a 
                href="#" 
                className="bg-accent flex items-center gap-2 px-6 py-0 h-[60px] rounded-[10px] hover:opacity-90 transition-opacity"
              >
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-white text-xs">▶</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-body-4 text-text-white leading-[16px]">
                    Get it on
                  </span>
                  <span className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] font-medium">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Social */}
        <div className="border-t border-border-primary pt-1 pb-0">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 min-h-[73px] py-4">
            <p className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px]">
              © {new Date().getFullYear()} M-Pesa Marketplace. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#5b62fd6b] flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#5b62fd6b] flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#5b62fd6b] flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#5b62fd6b] flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
