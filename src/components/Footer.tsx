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
              src="/images/Company_Logo.jpg" 
              alt="HMD Pro LLC Logo" 
              className="h-16 w-auto mb-6"
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
              {/* LinkedIn */}
              <a href="#" className="flex items-center justify-center bg-gray-800 rounded transition-colors h-12 w-12 text-gray-400 hover:text-white" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="flex items-center justify-center bg-gray-800 rounded transition-colors h-12 w-12 text-gray-400 hover:text-white" aria-label="YouTube">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112c-1.863-.502-9.386-.502-9.386-.502s-7.523 0-9.386.502a2.994 2.994 0 0 0-2.112 2.112c-.502 1.863-.502 5.754-.502 5.754s0 3.891.502 5.754a2.994 2.994 0 0 0 2.112 2.112c1.863.502 9.386.502 9.386.502s7.523 0 9.386-.502a2.994 2.994 0 0 0 2.112-2.112c.502-1.863.502-5.754.502-5.754s0-3.891-.502-5.754zm-13.498 9.314v-7.001l6.5 3.5-6.5 3.501z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="flex items-center justify-center bg-gray-800 rounded transition-colors h-12 w-12 text-gray-400 hover:text-white" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.138a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z" />
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