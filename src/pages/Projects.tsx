import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'EXTERIOR FACELIFT',
    description: 'Updated the home’s exterior with a new stone façade and improved elevated deck.',
    image: '/images/Project 11(2).jpg',
    category: 'MASONRY SERVICES',
    imageFit: 'cover',
    imagePosition: 'center',
    imageHeight: 280
  },
  {
    id: 2,
    title: 'BATHROOM REMODEL',
    description: 'A full bathroom remodel with new tile, fixtures, and flooring.',
    image: 'images/Project 12.jpg',
    category: 'BATHROOM REMODELING',
    imageFit: 'cover',
    imagePosition: 'center',
    imageHeight: 280
  },
  {
    id: 3,
    title: 'PAVER WALKWAY',
    description: 'A custom paver walkway installed at the front entrance.',
    image: '/images/Project 1.jpg',
    category: 'HARDSCAPE, WALLS & PAVERS',
    imageFit: 'cover',
    imagePosition: 'center',
    imageHeight: 280
  },
  {
    id: 4,
    title: 'SHOWER REMODEL',
    description: 'A full shower upgrade featuring new wall tile, niche accents, and frameless glass.',
    image: '/images/Project 10.jpg',
    category: 'BATHROOM REMODELING',
    imageFit: 'cover',
    imagePosition: '50% 30%',
    imageHeight: 280
  },
  {
    id: 5,
    title: 'CUSTOM TILE SHOWER',
    description: 'A custom walk-in shower with new wall tile, mosaic accent strip, and penny-tile flooring.',
    image: '/images/Project 4.jpg',
    category: 'BATHROOM REMODELING',
    imageFit: 'cover',
    imagePosition: 'top center',
    imageHeight: 280
  },
  {
    id: 6,
    title: 'WAINSCOTING & PAINTING',
    description: 'Fresh interior paint and detailed wainscoting trim installation.',
    image: '/images/Project 6.jpg',
    category: 'INTERIOR FINISHING',
    imageFit: 'cover',
    imagePosition: 'center',
    imageHeight: 280
  },
  {
    id: 7,
    title: 'KITCHEN PORCELAIN TILE FLOOR',
    description: 'Large-format porcelain tiles laid with a leveling system for a perfectly even finish.',
    image: '/images/Project 7.jpg',
    category: 'Kitchen Remodeling',
    imageFit: 'cover',
    imagePosition: 'bottomn center',
    imageHeight: 280
  },
  {
    id: 8,
    title: 'BACKYARD PAVER WALKWAY',
    description: 'A custom-designed paver walkway installed along the side of the home.',
    image: '/images/Project 2.jpg',
    category: 'HARDSCAPE, WALLS & PAVERS',
    imageFit: 'cover',
    imagePosition: 'top center', 
    imageHeight: 280
  },
  {
    id: 9,
    title: 'PAVER BORDER & STONE PATH',
    description: 'A clean decorative stone walkway and border were installed to access around this pool.',
    image: '/images/Project 3.jpg',
    category: 'HARDSCAPE, WALLS & PAVERS',
    imageFit: 'cover',
    imagePosition: '50% 80%',
    imageHeight: 280
  },
  {
    id: 10,
    title: 'CONCRETE SIDEWALK',
    description: 'A freshly poured concrete sidewalk installed along the home.',
    image: '/images/Project 8.jpg',
    category: 'CONCRETE SERVICES',
    imageFit: 'cover',
    imagePosition: '50% 40%',
    imageHeight: 280
  },
  {
    id: 11,
    title: 'CUSTOM WALL PANELING',
    description: 'Decorative wall trim paneling was installed along the staircase.',
    image: '/images/Project 5.jpg',
    category: 'Interior Finishing',
    imageFit: 'cover',
    imagePosition: '50% 20%',
    imageHeight: 280
  },
  {
    id: 12,
    title: 'POOL DECK',
    description: 'A durable composite deck built around the pool.',
    image: '/images/Project 9.jpg',
    category: 'HARDSCAPE, WALLS & PAVERS',
    imageFit: 'cover',
    imagePosition: 'center',
    imageHeight: 280
  }
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Projects | HMD Pro Construction</title>
        <meta name="description" content="View completed construction projects showcasing our expertise in kitchen remodels, bathroom renovations, hardscaping, and home improvements across New Jersey." />
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
              Experience the difference that 20+ years of proven craftsmanship makes.
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
                  <div style={{ height: (project.imageHeight ? `${project.imageHeight}px` : '280px') }} className="w-full overflow-hidden">
                    <button
                      onClick={() => setSelectedImage(project.image)}
                      className="w-full h-full p-0 border-none bg-none cursor-pointer hover:scale-105 transition-transform duration-300"
                      aria-label={`View full image of ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ objectFit: (project.imageFit as React.CSSProperties['objectFit']) || 'cover', objectPosition: (project.imagePosition || 'center') }}
                        className="w-full h-full"
                      />
                    </button>
                  </div>
                  <div className="p-8">
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

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
          >
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;