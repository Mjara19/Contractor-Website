import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, Hammer, Paintbrush, Ruler, Warehouse } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: 'Home Renovation',
      description: 'Complete home renovation services including structural changes, layout modifications, and aesthetic updates.',
      features: ['Interior remodeling', 'Structural modifications', 'Floor plan optimization', 'Energy efficiency upgrades']
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen with our expert remodeling services, from simple updates to complete renovations.',
      features: ['Custom cabinetry', 'Countertop installation', 'Appliance upgrades', 'Lighting design']
    },
    {
      icon: <Hammer className="h-12 w-12 text-blue-600" />,
      title: 'Bathroom Remodeling',
      description: 'Create your dream bathroom with our comprehensive remodeling services.',
      features: ['Tile installation', 'Fixture upgrades', 'Vanity installation', 'Lighting improvements']
    },
    {
      icon: <Paintbrush className="h-12 w-12 text-blue-600" />,
      title: 'Interior Finishing',
      description: 'Expert interior finishing services to perfect every detail of your space.',
      features: ['Custom trim work', 'Wall texturing', 'Paint services', 'Door installation']
    },
    {
      icon: <Ruler className="h-12 w-12 text-blue-600" />,
      title: 'Custom Projects',
      description: 'Specialized construction services tailored to your unique needs and vision.',
      features: ['Custom built-ins', 'Specialty rooms', 'Custom storage solutions', 'Architectural details']
    },
    {
      icon: <Warehouse className="h-12 w-12 text-blue-600" />,
      title: 'Additions & Extensions',
      description: 'Expand your living space with professionally designed and built home additions.',
      features: ['Room additions', 'Second story additions', 'Garage conversions', 'Sunrooms']
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of construction and remodeling services
            to bring your vision to life with quality craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-8">
            Ready to start your project? Contact us for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;