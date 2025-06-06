import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, Hammer, Paintbrush, Ruler, Warehouse, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-red-600" />,
      title: 'HOME RENOVATION',
      description: 'Complete home renovation services including structural changes, layout modifications, and aesthetic updates.',
      features: ['Interior remodeling', 'Structural modifications', 'Floor plan optimization', 'Energy efficiency upgrades'],
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Wrench className="h-12 w-12 text-red-600" />,
      title: 'KITCHEN REMODELING',
      description: 'Transform your kitchen with our expert remodeling services, from simple updates to complete renovations.',
      features: ['Custom cabinetry', 'Countertop installation', 'Appliance upgrades', 'Lighting design'],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Hammer className="h-12 w-12 text-red-600" />,
      title: 'BATHROOM REMODELING',
      description: 'Create your dream bathroom with our comprehensive remodeling services.',
      features: ['Tile installation', 'Fixture upgrades', 'Vanity installation', 'Lighting improvements'],
      image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Paintbrush className="h-12 w-12 text-red-600" />,
      title: 'INTERIOR FINISHING',
      description: 'Expert interior finishing services to perfect every detail of your space.',
      features: ['Custom trim work', 'Wall texturing', 'Paint services', 'Door installation'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Ruler className="h-12 w-12 text-red-600" />,
      title: 'CUSTOM PROJECTS',
      description: 'Specialized construction services tailored to your unique needs and vision.',
      features: ['Custom built-ins', 'Specialty rooms', 'Custom storage solutions', 'Architectural details'],
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Warehouse className="h-12 w-12 text-red-600" />,
      title: 'ADDITIONS & EXTENSIONS',
      description: 'Expand your living space with professionally designed and built home additions.',
      features: ['Room additions', 'Second story additions', 'Garage conversions', 'Sunrooms'],
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">OUR SERVICES</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of construction and remodeling services
            to bring your vision to life with quality craftsmanship and attention to detail.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-xl font-bold text-gray-900 ml-3">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR PROCESS</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              From initial consultation to project completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">CONSULTATION</h3>
              <p className="text-gray-600">We meet to discuss your vision, needs, and budget for the project.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">DESIGN & PLANNING</h3>
              <p className="text-gray-600">Our team creates detailed plans and provides a comprehensive estimate.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">CONSTRUCTION</h3>
              <p className="text-gray-600">We execute the project with precision, keeping you informed every step.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">COMPLETION</h3>
              <p className="text-gray-600">Final walkthrough and handover of your beautifully completed project.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO START YOUR PROJECT?</h2>
          <p className="text-xl mb-8 text-red-100">
            Contact us for a free consultation and detailed estimate.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-red-600 px-8 py-4 text-lg font-bold hover:bg-gray-100 transition-colors"
          >
            GET FREE ESTIMATE
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;