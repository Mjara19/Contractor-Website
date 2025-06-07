import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/images/Company_Logo(2).png" 
              alt="HMD Pro LLC Logo" 
              className="h-54 max-h-56 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 25 years of experience in the construction industry, HMD Pro LLC has built a reputation for excellence, quality craftsmanship, and exceptional customer service.
            </p>
            {/* Social Icons Grid */}
            <div className="grid grid-cols-3 gap-4 w-40">
              {/* Facebook */}
              <a href="#" className="flex items-center justify-center bg-gray-800 rounded transition-colors h-12 w-12 text-gray-400 hover:text-white" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              {/* Instagram */}
              <a href="#" className="flex items-center justify-center bg-gray-800 rounded transition-colors h-12 w-12 text-gray-400 hover:text-white" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@yourtiktok" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 rounded transition-colors h-12 w-12 text-gray-400 hover:text-white" aria-label="TikTok">
                <svg className="h-6 w-6" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.948 2.667h-3.03v18.948c0 1.13-.917 2.047-2.047 2.047a2.05 2.05 0 0 1-2.047-2.047c0-1.13.917-2.047 2.047-2.047.226 0 .409-.183.409-.409v-3.03a.41.41 0 0 0-.409-.409c-3.012 0-5.486 2.474-5.486 5.486 0 3.012 2.474 5.486 5.486 5.486 3.012 0 5.486-2.474 5.486-5.486V12.6c1.13.726 2.462 1.153 3.89 1.153h.409a.41.41 0 0 0 .409-.409v-3.03a.41.41 0 0 0-.409-.409h-.409c-.726 0-1.409-.183-2.047-.522-.638-.339-1.183-.83-1.53-1.409-.348-.579-.53-1.262-.53-1.988v-.409a.41.41 0 0 0-.409-.409z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-red-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:(732) 325-5895" className="text-gray-300 hover:text-white">
                    (732) 325-5895
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-red-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:hermeljara0@gmail.com" className="text-gray-300 hover:text-white">
                    hermeljara0@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-red-600" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-300">6 Gaszi Avenue<br />South River, NJ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">SERVICE AREAS</h3>
            <div className="space-y-2">
              <p className="text-gray-300 font-semibold mb-3">New Jersey Counties:</p>
              <ul className="space-y-1 text-gray-300">
                <li>• Middlesex County</li>
                <li>• Essex County</li>
                <li>• Monmouth County</li>
                <li>• Somerset County</li>
                <li>• Mercer County</li>
                <li>• Union County</li>
              </ul>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">BUSINESS HOURS</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-red-600" />
                <div>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="font-semibold">7:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="ml-8">
                <p className="text-gray-300">Saturday - Sunday</p>
                <p className="font-semibold">Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} HMD Pro Construction LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;