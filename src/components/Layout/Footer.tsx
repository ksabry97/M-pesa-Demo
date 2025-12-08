import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 flex items-center justify-center rounded">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">M-Pesa</span>
                <span className="text-sm text-gray-400">marketplace</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted marketplace for services across Africa. Connect with skilled professionals and get things done.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-green-600 rounded transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-green-600 rounded transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-green-600 rounded transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-green-600 rounded transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition-colors">Browse Services</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition-colors">Become a Provider</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition-colors">Help Center</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition-colors">Cleaning Services</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition-colors">Auto Mechanics</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition-colors">Home Maintenance</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition-colors">Design & UI/UX</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition-colors">Programming</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                <span className="text-sm">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">support@mpesa-marketplace.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} M-Pesa Marketplace. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-green-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-green-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-green-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

