import React from 'react';
import { ArrowRight, Award, Clock, PenTool as Tool, Phone, Mail, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import AnimatedCard from '../components/AnimatedCard';
import ParallaxSection from '../components/ParallaxSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | HMD Pro Construction</title>
      </Helmet>
      <div>
        {/* Hero Section with Parallax */}
        <ParallaxSection
          backgroundImage="https://images.pexels.com/photos/5505119/pexels-photo-5505119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="h-[70vh]"
        >
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-start md:justify-start">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-white max-w-2xl mt-16 md:mt-32 px-2 md:pl-8 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                BUILT ON 20+ YEARS OF CRAFTSMANSHIP
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-lg md:text-2xl mb-8 font-light"
              >
                Modern quality with decades of proven construction experience. Professional results you can trust.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full items-center md:items-start justify-center md:justify-start"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    GET FREE ESTIMATE
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:(732) 325-5895"
                    className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (732) 325-5895
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </ParallaxSection>

        {/* Services Overview with Animations */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">OUR SERVICES</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                Comprehensive construction and remodeling services backed by 20+ years of hands-on experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedCard delay={0} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow rounded-lg">
                <div className="text-center">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Tool className="h-8 w-8 text-red-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">KITCHEN REMODELING</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transform your kitchen with expert craftsmanship honed over two decades of professional remodeling experience.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow rounded-lg">
                <div className="text-center">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Award className="h-8 w-8 text-red-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">BATHROOM REMODELING</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create your dream bathroom with quality craftsmanship and reliable service you can count on.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.4} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow rounded-lg">
                <div className="text-center">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Clock className="h-8 w-8 text-red-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">HOME ADDITIONS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expand your living space with professionally designed additions built on decades of construction expertise.
                  </p>
                </div>
              </AnimatedCard>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg"
                >
                  VIEW ALL SERVICES
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* About Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">ABOUT HMD PRO CONSTRUCTION </h2>
                <div className="w-24 h-1 bg-red-600 mb-6"></div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  HMD Pro Construction brings you over 20 years of real-world construction experience. While our company is modern, our craftsmanship is rooted in decades of hands-on expertise passed down through dedication and skill.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Founded by Hermel Jara, we believe in honest work, transparent communication, and building lasting relationships with every client. Experience you can trust. Quality you can rely on.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/about"
                    className="inline-flex items-center bg-red-600 text-white px-8 py-3 font-semibold hover:bg-red-700 transition-colors"
                  >
                    LEARN MORE
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/HMD Pro Construction logo v1-01.png"
                  alt="HMD Pro Construction LLC"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div className="py-20 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
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

        {/* Recent Projects */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">RECENT PROJECTS</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Take a look at some of our latest completed projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCard delay={0} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Kitchen Remodel"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">MODERN KITCHEN REMODEL</h3>
                  <p className="text-gray-600">Complete kitchen renovation with custom cabinets and high-end finishes.</p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Bathroom Renovation"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">LUXURY BATHROOM</h3>
                  <p className="text-gray-600">Spa-like bathroom transformation with modern fixtures and tile work.</p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.4} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Home Addition"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">CUSTOM HOME ADDITION</h3>
                  <p className="text-gray-600">Two-story addition with seamless integration to existing structure.</p>
                </div>
              </AnimatedCard>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg"
                >
                  VIEW ALL PROJECTS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">READY TO START YOUR PROJECT?</h2>
              <p className="text-xl mb-8 text-gray-300">
                Get professional results backed by 20+ years of construction experience. Contact us for a free estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    GET FREE ESTIMATE
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:(732) 325-5895"
                    className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    CALL NOW
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;