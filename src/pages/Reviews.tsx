import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const Reviews = () => {
  return (
<<<<<<< HEAD
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">LEAVE A REVIEW</h1>
          <p className="text-gray-600 mb-8">
=======
    <div>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-red-600 mb-6">LEAVE A REVIEW</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
>>>>>>> 811c0488a468914de39b9fc74dc273433f306446
            We would love to hear your experience with HMD Pro LLC! It is thanks to you and all our valuable
            customers that we are able to continue to grow. We truly appreciate your business.
          </p>
          <p className="text-lg text-gray-400 italic">
            - Your friends at HMD Pro
          </p>
        </div>
      </div>

      {/* Review Buttons Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a
              href="https://g.page/r/CXxxxxxxxx/review"
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="inline-block px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded hover:bg-gray-50 transition-colors"
=======
              className="group bg-white border-3 border-red-600 text-red-600 py-6 px-8 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
>>>>>>> 811c0488a468914de39b9fc74dc273433f306446
            >
              <div className="flex items-center">
                <Star className="h-6 w-6 mr-3" />
                <span className="text-lg font-bold">GOOGLE REVIEW</span>
                <ExternalLink className="h-5 w-5 ml-3 opacity-70" />
              </div>
            </a>
            
            <a
              href="https://www.facebook.com/YourPage/reviews"
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="inline-block px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded hover:bg-gray-50 transition-colors"
=======
              className="group bg-red-600 border-3 border-red-600 text-white py-6 px-8 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
>>>>>>> 811c0488a468914de39b9fc74dc273433f306446
            >
              <div className="flex items-center">
                <Star className="h-6 w-6 mr-3" />
                <span className="text-lg font-bold">FACEBOOK REVIEW</span>
                <ExternalLink className="h-5 w-5 ml-3 opacity-70" />
              </div>
            </a>
          </div>

          {/* Additional Content */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">WHY YOUR REVIEW MATTERS</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">HELPS OTHERS</h3>
                <p className="text-gray-600">Your review helps other homeowners make informed decisions about their construction projects.</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">IMPROVES SERVICE</h3>
                <p className="text-gray-600">Your feedback helps us continue to improve our services and maintain our high standards.</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">BUILDS TRUST</h3>
                <p className="text-gray-600">Honest reviews build trust in our community and help us grow our business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;