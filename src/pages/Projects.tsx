import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const projects = [
  {
    id: 1,
    title: 'PAVER WALKWAY',
    description: 'A custom paver walkway installed at the front entrance to enhance curb appeal and provide a durable, low-maintenance entry path.',
    afterImage: '/images/Project 1.jpg',
    category: 'HARDSCAPE, WALLS & PAVERS'
  },
  {
    id: 2,
    title: 'KITCHEN PORCELAIN TILE FLOOR INSTALLATION',
    description: 'Professional bathroom transformation built with quality materials and expert installation.',
    afterImage: '/images/Project 7.jpg',
    category: 'Kitchen Remodoling'
  },
  {
    id: 3,
    title: 'BACKYARD PAVER WALKWAY INSTALLATION',
    description: 'A custom-designed paver walkway installed along the side of the home.',
    afterImage: '/images/Project 2.jpg',
    category: 'HARDSCAPE, WALLS & PAVERS'
  },
  {
    id: 4,
    title: 'BASEMENT FINISHING',
    description: 'Professional basement finishing transforming unused space into functional living area.',
    afterImage: '/images/projects/basement-after.jpg',
    category: 'Basement'
  },
  {
    id: 5,
    title: 'OUTDOOR DECK CONSTRUCTION',
    description: 'Quality outdoor deck construction built to last, backed by decades of building experience.',
    afterImage: '/images/projects/deck-after.jpg',
    category: 'Outdoor'
  },
  {
    id: 6,
    title: 'WHOLE HOUSE RENOVATION',
    description: 'Comprehensive home renovation demonstrating skilled craftsmanship and reliable project management.',
    afterImage: '/images/projects/house-after.jpg',
    category: 'Renovation'
  }
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | HMD Pro Construction</title>
      </Helmet>
      <div>
        {/* Hero Section */}
        <div className="bg-gr ay-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold mb-6"
            >OUR PROJECTS</motion.h1>
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
              Experience the difference that 20+ years of proven craftsmanship makes. Use the slider to see the dramatic before and after transformations.
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={project.afterImage}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold mb-3">
                      {project.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
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
              Let us transform your space with professional results backed by 20+ years of construction experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/contact"
                className="inline-block bg-white text-red-600 px-8 py-4 text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                GET FREE ESTIMATE
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;