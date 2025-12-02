import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Reviews = () => {
  return (
    <>
      <Helmet>
        <title>Reviews | HMD Pro Construction</title>
        <meta name="description" content="Read reviews from satisfied customers about our construction services. See why homeowners trust HMD Pro Construction." />
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
            >LEAVE A REVIEW</motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-24 h-1 bg-red-600 mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              We would love to hear your experience with HMD Pro Construction! It is thanks to you and all our valuable
              customers that we are able to continue to grow. We truly appreciate your business.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg text-gray-400 italic"
            >
              - Your friends at HMD Pro
            </motion.p>
          </div>
        </div>

        {/* Review Buttons Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center items-center max-w-2xl mx-auto"
            >
              <a
                href="https://www.google.com/search?q=hmd+pro+construction&sca_esv=a52577f178443ecc&sxsrf=AE3TifPFBxGEsnJfPT-TFWoDT5cOSFHWug%3A1764098013444&source=hp&ei=3f8laZ_DGJKA0PEPntyZ6Ak&iflsig=AOw8s4IAAAAAaSYN7UiTZy1pnMzz5CnOZfRmIaPnLX-l&oq=hmd&gs_lp=Egdnd3Mtd2l6IgNobWQqAggAMgQQIxgnMgoQIxiABBgnGIoFMgQQIxgnMhMQLhiABBixAxjRAxhDGMcBGIoFMgoQABiABBhDGIoFMhAQABiABBixAxhDGIMBGIoFMg0QLhiABBhDGOUEGIoFMgoQABiABBhDGIoFMg0QLhiABBhDGOUEGIoFMg0QABiABBixAxhDGIoFSKsVULwGWLsIcAF4AJABAJgBrwGgAYEDqgEDMS4yuAEByAEA-AEBmAIEoAKOA6gCCsICBxAjGCcY6gLCAg0QIxjwBRgnGOoCGJ4GwgILEAAYgAQYkQIYigXCAhEQLhiABBixAxjRAxiDARjHAcICCxAuGIAEGNEDGMcBwgILEAAYgAQYsQMYgwHCAhYQLhiABBixAxjRAxhDGIMBGMcBGIoFwgIOEC4YgAQYxwEYjgUYrwGYAwXxBTPltAZimMRjkgcDMi4yoAfvLrIHAzEuMrgHiAPCBwUwLjMuMcgHCQ&sclient=gws-wiz"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border-3 border-red-600 text-red-600 py-6 px-8 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <div className="flex items-center">
                  <Star className="h-6 w-6 mr-3" />
                  <span className="text-lg font-bold">GOOGLE REVIEW</span>
                  <ExternalLink className="h-5 w-5 ml-3 opacity-70" />
                </div>
              </a>
            </motion.div>

            {/* Additional Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto items-center justify-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">WHY YOUR REVIEW MATTERS</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[0,1,2].map(i => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{['HELPS OTHERS','IMPROVES SERVICE','BUILDS TRUST'][i]}</h3>
                    <p className="text-gray-600">{[
                      'Your review helps other homeowners make informed decisions about their construction projects.',
                      'Your feedback helps us continue to improve our services and maintain our high standards.',
                      'Honest reviews build trust in our community and help us grow our business.'
                    ][i]}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;