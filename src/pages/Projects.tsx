import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const projects = [
  {
    id: 1,
    title: 'Kitchen Renovation Project',
    description: 'Complete renovation of a family kitchen, including custom cabinetry and granite countertops.',
    beforeImage: '/images/projects/kitchen-before.jpg',
    afterImage: '/images/projects/kitchen-after.jpg',
    category: 'Kitchen'
  },
  {
    id: 2,
    title: 'Master Bathroom Renovation',
    description: 'Luxury bathroom remodel featuring a walk-in shower, freestanding tub, and custom vanity.',
    beforeImage: '/images/projects/bathroom-before.jpg',
    afterImage: '/images/projects/bathroom-after.jpg',
    category: 'Bathroom'
  },
  {
    id: 3,
    title: 'Home Addition',
    description: 'Custom home addition including a family room and master suite.',
    beforeImage: '/images/projects/addition-before.jpg',
    afterImage: '/images/projects/addition-after.jpg',
    category: 'Addition'
  }
];

const Projects = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 relative">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={project.beforeImage} alt="Before" />}
                  itemTwo={<ReactCompareSliderImage src={project.afterImage} alt="After" />}
                  className="h-full"
                  style={{ height: '100%' }}
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;