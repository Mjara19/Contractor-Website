import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Phone } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="HMD Pro LLC Logo" 
                className="h-12 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">HMD Pro LLC</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className={`flex items-center ${isActive('/')}`}>
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/projects" className={`flex items-center ${isActive('/projects')}`}>
              <span>Projects</span>
            </Link>
            <Link to="/about" className={`flex items-center ${isActive('/about')}`}>
              <User className="h-5 w-5 mr-1" />
              <span>About</span>
            </Link>
            <Link to="/contact" className={`flex items-center ${isActive('/contact')}`}>
              <Phone className="h-5 w-5 mr-1" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar