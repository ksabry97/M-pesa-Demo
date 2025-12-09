import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import LogoWhite from "../../assets/logo-white.svg";

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
                Connecting you with verified professionals for all your daily
                service needs. Fast, reliable, and trusted by thousands.
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
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    Design & UI/UX
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    Programming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    Home Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    Auto Repair
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
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
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    Become a Pro
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
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
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    Safety
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-3 text-text-white leading-[20px] tracking-[-0.1504px] hover:text-accent transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section - Download App */}
        <div className="border-t border-border-primary p-8 pl-0 pr-0 ">
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
                <div className="w-6 h-6  rounded flex items-center justify-center">
                  <span className="text-white text-xs">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6371 17.28C11.6571 18.23 10.5871 18.08 9.55708 17.63C8.46708 17.17 7.46708 17.15 6.31708 17.63C4.87708 18.25 4.11708 18.07 3.25708 17.28C-1.62292 12.25 -0.902922 4.59 4.63708 4.31C5.98708 4.38 6.92708 5.05 7.71708 5.11C8.89708 4.87 10.0271 4.18 11.2871 4.27C12.7971 4.39 13.9371 4.99 14.6871 6.07C11.5671 7.94 12.3071 12.05 15.1671 13.2C14.5971 14.7 13.8571 16.19 12.6271 17.29L12.6371 17.28ZM7.61708 4.25C7.46708 2.02 9.27708 0.18 11.3571 0C11.6471 2.58 9.01708 4.5 7.61708 4.25Z"
                        fill="#FDFDFF"
                      />
                    </svg>
                  </span>
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
                <div className="w-6 h-6 rounded flex items-center justify-center">
                  <span className="text-white text-xs">
                    <svg
                      width="18"
                      height="21"
                      viewBox="0 0 18 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.609002 0L10.792 10.186L0.610002 20.372C0.428942 20.2959 0.27443 20.1679 0.165892 20.0042C0.0573553 19.8405 -0.000360769 19.6484 1.69682e-06 19.452V0.92C7.83459e-05 0.723821 0.0578565 0.531998 0.166143 0.368413C0.274429 0.204827 0.42844 0.0767059 0.609002 0ZM11.499 10.893L13.801 13.195L2.864 19.528L11.499 10.893ZM14.698 7.695L17.505 9.321C18.052 9.638 18.052 10.364 17.505 10.681L14.698 12.307L12.174 9.783L14.698 7.695ZM0.831002 0.329L11.89 6.686L9.588 8.988L0.831002 0.329Z"
                        fill="#FDFDFF"
                      />
                    </svg>
                  </span>
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
              © {new Date().getFullYear()} M-Pesa Marketplace. All rights
              reserved.
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
