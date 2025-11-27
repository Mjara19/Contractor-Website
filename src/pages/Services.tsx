import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, Hammer, Paintbrush, Ruler, Warehouse, ArrowRight, BrickWall, Braces, Building, LampCeiling, LampDesk, FenceIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const services = [
    {
      icon: <Home className="text-red-600"/>,
      title: 'HOME RENOVATION',
      description: 'Complete home renovation services including structural changes, layout modifications, and aesthetic updates.',
      features: ['Interior remodeling', 'Structural modifications', 'Floor plan optimization'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Wrench className="text-red-600" />,
      title: 'KITCHEN REMODELING',
      description: 'Transform your kitchen with our expert remodeling services, from simple updates to complete renovations.',
      features: ['Custom cabinetry', 'Countertop installation', 'Lighting design'],
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <LampCeiling className="text-red-600" />,
      title: 'BATHROOM REMODELING',
      description: 'Create your dream bathroom with our comprehensive remodeling services.',
      features: ['Tile installation', 'Fixture upgrades', 'Vanity installation'],
      image: 'https://images.unsplash.com/photo-1631048499052-e6d9f305d2c0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: <Paintbrush className="text-red-600" />,
      title: 'INTERIOR FINISHING',
      description: 'Expert interior finishing services to perfect every detail of your space.',
      features: ['Custom trim work', 'Paint services', 'Door installation'],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Hammer className="text-red-600" />,
      title: 'FLOORING',
      description: 'High-quality flooring installation designed to upgrade your home’s look, durability, and value.',
      features: ['Laminate & vinyl plank installation','Hardwood floor installation','Subfloor repair & leveling'],
      image: 'https://images.unsplash.com/photo-1722603931789-aea8bd4f5d01?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: <Warehouse className="text-red-600" />,
      title: 'MASONRY SERVICES',
      description: 'Expert masonry craftsmanship for durable, beautiful structures that stand the test of time.',
      features: ['Brick & block installation', 'Stonework installation', 'Custom stonework'],
      image: 'https://images.unsplash.com/photo-1761637823941-0ffae96ec487?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: <Building className="text-red-600" />,
      title: 'CONCRETE SERVICES',
      description: 'Reliable concrete installation and repair for long-lasting strength and durability.',
      features: [
        'Driveways & walkways',
        'Concrete slabs & pads',
        'Patios & steps'
      ],
      image: 'https://images.unsplash.com/photo-1623625434531-d130448273c1?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: <BrickWall className="text-red-600" />,
      title: 'HARDSCAPE, WALLS & PAVERS',
      description: 'Expert hardscape services that enhance outdoor living spaces with beautiful designs.',
      features: [
        'Retaining wall installation',
        'Paver patios & walkways',
        'Stone & block landscaping'
      ],
      image: 'https://images.unsplash.com/photo-1761637822987-282e320d7ee9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: <FenceIcon className="text-red-600" />,
      title: 'FENCING',
      description: 'Professional fencing installation that boosts privacy, security, and curb appeal with long-lasting materials.',
      features: [
        'Wood & vinyl fence installation',
        'Fence repair & replacement',
        'Gate installation'
      ],
      image: 'https://images.unsplash.com/photo-1583805978118-ba9a81ac1399?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Services | HMD Pro Construction</title>
      </Helmet>
      <div>
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold mb-6"
            >OUR SERVICES</motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-24 h-1 bg-red-600 mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              We offer a comprehensive range of construction and remodeling services
              to bring your vision to life with quality craftsmanship and attention to detail.
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center justify-center">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-full h-48">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 ml-2">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-600 text-sm">
                            <span className="h-2 w-2 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR PROCESS</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                From initial consultation to project completion
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[0,1,2,3].map(i => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center items-center"
                >
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {i+1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{['CONSULTATION','DESIGN & PLANNING','CONSTRUCTION','COMPLETION'][i]}</h3>
                  <p className="text-gray-600">{[
                    'We meet to discuss your vision, needs, and budget for the project.',
                    'Our team creates detailed plans and provides a comprehensive estimate.',
                    'We execute the project with precision, keeping you informed every step.',
                    'Final walkthrough and handover of your beautifully completed project.'
                  ][i]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >READY TO START YOUR PROJECT?</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 text-red-100"
            >
              Contact us for a free consultation and detailed estimate.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                GET FREE ESTIMATE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;