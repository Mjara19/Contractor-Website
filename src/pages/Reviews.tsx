import React from 'react';

const Reviews = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#8B0000] mb-4">LEAVE A REVIEW</h1>
          <p className="text-gray-600 mb-8">
            We would love to hear your experience with HMD Pro LLC! It is thanks to you and all our valuable
            customers that we are able to continue to grow. We truly appreciate your business.
          </p>
          <p className="text-gray-600 mb-12">
            - Your friends at HMD Pro
          </p>
          
          <div className="flex justify-center space-x-4">
            <a
              href="https://g.page/r/CXxxxxxxxx/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white border-2 border-[#8B0000] text-[#8B0000] rounded hover:bg-gray-50 transition-colors"
            >
              Google Review
            </a>
            <a
              href="https://www.facebook.com/YourPage/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white border-2 border-[#8B0000] text-[#8B0000] rounded hover:bg-gray-50 transition-colors"
            >
              Facebook Review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;