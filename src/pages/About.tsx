import React from 'react';
import { Award, Users, Clock, PenTool as Tool, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | HMD Pro Construction</title>
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
            >ABOUT HMD PRO CONSTRUCTION </motion.h1>
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
              Rooted in 20+ years of real construction experience. Modern quality with decades of proven craftsmanship.
            </motion.p>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/IMG_5882.jpg"
                  alt="Hermel Jara - Owner of HMD Pro Construction"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-900">MEET HERMEL JARA</h2>
                <div className="w-24 h-1 bg-red-600 mb-6"></div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As the founder and owner of HMD Pro Construction, Hermel Jara brings over 20 years of hands-on construction experience to every project. His commitment to quality workmanship and honest service has been the foundation of our success.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  While HMD Pro Construction is a modern company, the expertise behind it spans decades. We believe in building not just structures, but lasting relationships based on trust, reliability, and professional results.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every project benefits from years of refined skills and proven methods. We take pride in doing the job right, delivering quality that stands the test of time.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div className="py-20 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                viewport={{ once: true }}
              >
                <Award className="h-16 w-16 mx-auto mb-4" />
                <AnimatedCounter end={20} suffix="+" />
                <div className="text-xl font-light">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Users className="h-16 w-16 mx-auto mb-4" />
                <AnimatedCounter end={50} suffix="+" />
                <div className="text-xl font-light">Happy Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Clock className="h-16 w-16 mx-auto mb-4" />
                <AnimatedCounter end={100} suffix="+" />
                <div className="text-xl font-light">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Tool className="h-16 w-16 mx-auto mb-4" />
                <AnimatedCounter end={5} suffix="+" />
                <div className="text-xl font-light">Expert Team Members</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR VALUES</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[0,1,2].map(i => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center mx-auto"
                >
                  {/* The icon and content for each value card */}
                  {i === 0 && <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="h-8 w-8 text-red-600" /></div>}
                  {i === 1 && <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"><Users className="h-8 w-8 text-red-600" /></div>}
                  {i === 2 && <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"><Award className="h-8 w-8 text-red-600" /></div>}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{['QUALITY FIRST','CUSTOMER FOCUS','INTEGRITY'][i]}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {[
                      'We never compromise on quality. Every project is completed to the highest standards using premium materials and craftsmanship honed over decades.',
                      'Your satisfaction is our priority. We work closely with you throughout the project, providing reliable communication and professional service.',
                      'We believe in honest communication, transparent pricing, and delivering on our promises.'
                    ][i]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">WHY CHOOSE HMD PRO CONSTRUCTION LLC?</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[0,1].map(i => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6 text-center md:text-left"
                >
                  {/* The content for each column */}
                  {i === 0 && (
                    <>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
                          <p className="text-gray-600">Fully licensed and insured for your peace of mind and protection.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Free Estimates</h4>
                          <p className="text-gray-600">Detailed, transparent estimates with no hidden costs or surprises.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Materials</h4>
                          <p className="text-gray-600">We use only quality materials and work with trusted suppliers, backed by decades of industry relationships.</p>
                        </div>
                      </div>
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Reliable Service</h4>
                          <p className="text-gray-600">We respect your time and complete projects professionally, drawing on 20+ years of field experience.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Clean Work Environment</h4>
                          <p className="text-gray-600">We maintain a clean and organized work site throughout the project.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Warranty Protection</h4>
                          <p className="text-gray-600">All our work comes with comprehensive warranty coverage.</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;