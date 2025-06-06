import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/images/Company_Logo.jpg" 
              alt="HMD Pro LLC Logo" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 25 years of experience in the construction industry, HMD Pro LLC has built a reputation for excellence, quality craftsmanship, and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
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
              &copy; {new Date().getFullYear()} HMD Pro LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;