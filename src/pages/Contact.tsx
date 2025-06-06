import React, { useState } from 'react';
<<<<<<< HEAD
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
=======
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
>>>>>>> 811c0488a468914de39b9fc74dc273433f306446

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
<<<<<<< HEAD
    message: '',
    recipientEmail: 'hermeljara0@gmail.com'
=======
    message: ''
>>>>>>> 811c0488a468914de39b9fc74dc273433f306446
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
<<<<<<< HEAD
        alert("Message sent successfully! We'll get back to you soon.");
=======
        alert("Message sent successfully!");
>>>>>>> 811c0488a468914de39b9fc74dc273433f306446
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: '',
<<<<<<< HEAD
          recipientEmail: 'hermeljara0@gmail.com'
=======
>>>>>>> 811c0488a468914de39b9fc74dc273433f306446
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
<<<<<<< HEAD
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Ready to start your project? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="projectType" className="block text-gray-700 font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">(732) 325-5895</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">jarahermel0@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Construction Ave</p>
                    <p className="text-gray-600">Builder City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Service Area</h2>
              <p className="text-gray-600 mb-4">
                We proudly serve the following areas and their surrounding communities:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Middlesex County</li>
                <li>Essex County</li>
                <li>Monmouth County</li>
                <li>Somerset County</li>
                <li>Mercer County</li>
                <li>Union County</li>
              </ul>
=======
    <div>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">CONTACT US</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Ready to start your project? Get in touch with us today for a free consultation.
          </p>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-8">
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
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
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
>>>>>>> 811c0488a468914de39b9fc74dc273433f306446
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;