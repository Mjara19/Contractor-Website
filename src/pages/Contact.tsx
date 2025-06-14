import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://7sqnme6o32.execute-api.us-east-2.amazonaws.com/contactFormHandler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: '',
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-6"
          >CONTACT US</motion.h1>
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
            className="text-xl text-gray-300"
          >
            Ready to start your project? Get in touch with us today for a free consultation.
          </motion.p>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GET FREE ESTIMATE</h2>
              <div className="w-24 h-1 bg-red-600 mb-8"></div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-gray-700 font-semibold mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="kitchen">Kitchen Remodel</option>
                    <option value="bathroom">Bathroom Remodel</option>
                    <option value="addition">Home Addition</option>
                    <option value="basement">Basement Finishing</option>
                    <option value="outdoor">Outdoor Living Space</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Please describe your project in detail..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg hover:bg-red-700 transition-colors font-bold text-lg flex items-center justify-center"
                >
                  SEND MESSAGE
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">CONTACT INFORMATION</h2>
                <div className="w-24 h-1 bg-red-600 mb-8"></div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">PHONE</h3>
                      <a href="tel:(732) 325-5895" className="text-lg text-gray-600 hover:text-red-600 transition-colors">
                        (732) 325-5895
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">EMAIL</h3>
                      <a href="mailto:hermeljara0@gmail.com" className="text-lg text-gray-600 hover:text-red-600 transition-colors">
                        hermeljara0@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">ADDRESS</h3>
                      <p className="text-lg text-gray-600">
                        6 Gaszi Avenue<br />
                        South River, NJ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">BUSINESS HOURS</h3>
                      <p className="text-lg text-gray-600">
                        Monday - Friday: 7:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Service Area */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">SERVICE AREA</h2>
                <div className="w-24 h-1 bg-red-600 mb-8"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We proudly serve the following areas and their surrounding communities:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                      Middlesex County
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                      Essex County
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                      Monmouth County
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                      Somerset County
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                      Mercer County
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                      Union County
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;