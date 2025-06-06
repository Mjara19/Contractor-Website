import React from 'react';
import { ArrowRight, Award, Clock, PenTool as Tool, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              QUALITY CONSTRUCTION SERVICES
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Building dreams into reality with craftsmanship and dedication
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                GET FREE ESTIMATE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:(732) 325-5895"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                (732) 325-5895
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive construction and remodeling services with over 25 years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Tool className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">KITCHEN REMODELING</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transform your kitchen with our expert remodeling services, from simple updates to complete renovations.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">BATHROOM REMODELING</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create your dream bathroom with our comprehensive remodeling services and quality craftsmanship.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">HOME ADDITIONS</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expand your living space with professionally designed and built home additions and extensions.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg"
            >
              VIEW ALL SERVICES
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">ABOUT HMD PRO LLC</h2>
              <div className="w-24 h-1 bg-red-600 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 25 years of experience in the construction industry, HMD Pro LLC has built a reputation for excellence, quality craftsmanship, and exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded by Hermel Jara, our company believes in building not just structures, but lasting relationships with our clients. We take pride in delivering projects that exceed expectations.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-red-600 text-white px-8 py-3 font-semibold hover:bg-red-700 transition-colors"
              >
                LEARN MORE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="/images/IMG_5882.jpg"
                alt="Hermel Jara - Owner of HMD Pro LLC"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-xl font-light">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl font-light">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl font-light">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl font-light">Expert Team Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">RECENT PROJECTS</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Take a look at some of our latest completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Kitchen Remodel"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">MODERN KITCHEN REMODEL</h3>
                <p className="text-gray-600">Complete kitchen renovation with custom cabinets and high-end finishes.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Bathroom Renovation"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">LUXURY BATHROOM</h3>
                <p className="text-gray-600">Spa-like bathroom transformation with modern fixtures and tile work.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Home Addition"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">CUSTOM HOME ADDITION</h3>
                <p className="text-gray-600">Two-story addition with seamless integration to existing structure.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg"
            >
              VIEW ALL PROJECTS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO START YOUR PROJECT?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today for a free consultation and estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              GET FREE ESTIMATE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:(732) 325-5895"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              CALL NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;