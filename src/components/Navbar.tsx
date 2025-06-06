import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Phone, Wrench, Pencil, Star, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-700 hover:text-red-600';
  };

  return (
    <nav className="bg-white shadow-md relative z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/Company_Logo.png" 
                alt="HMD Pro LLC Logo" 
                className="h-32 max-h-36 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`flex items-center py-2 px-1 text-sm font-medium uppercase tracking-wide transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`flex items-center py-2 px-1 text-sm font-medium uppercase tracking-wide transition-colors ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/services" className={`flex items-center py-2 px-1 text-sm font-medium uppercase tracking-wide transition-colors ${isActive('/services')}`}>
              Services
            </Link>
            <Link to="/projects" className={`flex items-center py-2 px-1 text-sm font-medium uppercase tracking-wide transition-colors ${isActive('/projects')}`}>
              Projects
            </Link>
            <Link to="/reviews" className={`flex items-center py-2 px-1 text-sm font-medium uppercase tracking-wide transition-colors ${isActive('/reviews')}`}>
              Reviews
            </Link>
            <Link to="/contact" className={`flex items-center py-2 px-1 text-sm font-medium uppercase tracking-wide transition-colors ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/reviews"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;