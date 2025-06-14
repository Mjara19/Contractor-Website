import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const projects = [
  {
    id: 1,
    title: 'KITCHEN RENOVATION PROJECT',
    description: 'Complete renovation of a family kitchen, including custom cabinetry and granite countertops.',
    beforeImage: '/images/projects/kitchen-before.jpg',
    afterImage: '/images/projects/kitchen-after.jpg',
    category: 'Kitchen'
  },
  {
    id: 2,
    title: 'MASTER BATHROOM RENOVATION',
    description: 'Luxury bathroom remodel featuring a walk-in shower, freestanding tub, and custom vanity.',
    beforeImage: '/images/projects/bathroom-before.jpg',
    afterImage: '/images/projects/bathroom-after.jpg',
    category: 'Bathroom'
  },
  {
    id: 3,
    title: 'HOME ADDITION',
    description: 'Custom home addition including a family room and master suite.',
    beforeImage: '/images/projects/addition-before.jpg',
    afterImage: '/images/projects/addition-after.jpg',
    category: 'Addition'
  },
  {
    id: 4,
    title: 'BASEMENT FINISHING',
    description: 'Complete basement transformation into a modern living space with entertainment area.',
    beforeImage: '/images/projects/basement-before.jpg',
    afterImage: '/images/projects/basement-after.jpg',
    category: 'Basement'
  },
  {
    id: 5,
    title: 'OUTDOOR DECK CONSTRUCTION',
    description: 'Custom deck construction with premium materials and modern design.',
    beforeImage: '/images/projects/deck-before.jpg',
    afterImage: '/images/projects/deck-after.jpg',
    category: 'Outdoor'
  },
  {
    id: 6,
    title: 'WHOLE HOUSE RENOVATION',
    description: 'Complete home renovation including structural changes and modern updates.',
    beforeImage: '/images/projects/house-before.jpg',
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
        <div className="bg-gray-900 text-white py-20">
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
              Explore our portfolio of completed projects and see the quality craftsmanship that sets us apart.
              Use the slider to see the dramatic before and after transformations.
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 relative">
                    <ReactCompareSlider
                      itemOne={<ReactCompareSliderImage src={project.beforeImage} alt="Before" />}
                      itemTwo={<ReactCompareSliderImage src={project.afterImage} alt="After" />}
                      className="h-full"
                      style={{ height: '100%' }}
                    />
                    {/* Before/After Labels */}
                    <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-semibold">
                      BEFORE
                    </div>
                    <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-semibold">
                      AFTER
                    </div>
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
              Let us transform your space with the same quality and attention to detail.
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