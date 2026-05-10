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
              src="/images/HMD_Pro_Construction_logo_v1-01.webp"
              alt="HMD Pro LLC Logo"
              loading="lazy"
              decoding="async"
              className="h-54 max-h-56 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Built on 20+ years of construction experience. HMD Pro Construction delivers modern quality with decades of proven craftsmanship and reliable service.
            </p>
            {/* Social Icons Grid */}
            <div className="grid grid-cols-3 gap-4 w-40">
              {/* TikTok */}
              <a href="https://www.tiktok.com/@hmdproconstruction?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 rounded transition-colors h-12 w-12 text-gray-400 hover:text-white" aria-label="TikTok">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/share/1A2ciamyNi/?mibextid=wwXIfr" className="flex items-center justify-center bg-gray-800 rounded transition-colors h-12 w-12 text-gray-400 hover:text-white" aria-label="Facebook">
                <a href="https://www.facebook.com/share/1A2ciamyNi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 rounded transition-colors h-12 w-12 text-gray-400 hover:text-white" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/hmdproconstruction?igsh=ZG9rbWx3YTk0MDYx&utm_source=qr" className="flex items-center justify-center bg-gray-800 rounded transition-colors h-12 w-12 text-gray-400 hover:text-white" aria-label="Instagram">
                <a href="https://www.instagram.com/hmdproconstruction?igsh=ZG9rbWx3YTk0MDYx&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 rounded transition-colors h-12 w-12 text-gray-400 hover:text-white" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
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
                  <a href="mailto:info@hmdproconstruction.com" className="text-gray-300 hover:text-white">
                    info@hmdproconstruction.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-red-600" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-300">New Jersey, United States</p>
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
                  <p className="font-semibold">8:00 AM - 5:00 PM</p>
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
              &copy; {new Date().getFullYear()} HMD Pro LLC. All rights reserved.
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