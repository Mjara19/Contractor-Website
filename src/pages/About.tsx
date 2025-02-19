import React from 'react';
import { Award, Users, Clock, PenTool as Tool } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About HMD Pro</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 25 years of experience in the construction industry, we've built our reputation on quality craftsmanship and exceptional customer service.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div className="self-start">
            <img
              src="/images/IMG_5882.jpg"
              alt="Hermel Jara - Owner of HMD Pro LLC"
              className="rounded-lg shadow-lg w-full h-auto max-h-[750px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Meet Hermel Jara</h2>
            <p className="text-gray-600 mb-4">
              As the founder and owner of HMD Pro LLC, Hermel Jara has established a reputation for excellence in the construction industry. His commitment to quality craftsmanship and customer satisfaction has been the cornerstone of our success.
            </p>
            <p className="text-gray-600 mb-4">
              We believe in building not just structures, but relationships. Many of our clients have been with us for multiple projects over the years, trusting us with their homes and recommending us to their friends and family.
            </p>
            <p className="text-gray-600">
              Our team of skilled craftsmen brings decades of combined experience to every project, ensuring that each detail is executed with precision and care.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Tool className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-gray-600">Expert Team Members</div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every project is completed to the highest standards using premium materials and expert craftsmanship.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We work closely with you throughout the project to ensure your vision becomes reality.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We believe in honest communication, transparent pricing, and delivering on our promises every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;