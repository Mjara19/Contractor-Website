import React, { useState, useEffect } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Main CTA Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowOptions(!showOptions)}
              className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors relative"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full animate-pulse-slow" />
            </motion.button>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 bg-gray-600 text-white rounded-full p-1 hover:bg-gray-700 transition-colors"
            >
              <X className="h-3 w-3" />
            </button>

            {/* Options Menu */}
            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 min-w-[200px]"
                >
                  <div className="space-y-3">
                    <a
                      href="tel:(732) 325-5895"
                      className="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-red-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">Call Now</div>
                        <div className="text-sm text-gray-600">(732) 325-5895</div>
                      </div>
                    </a>
                    <a
                      href="/contact"
                      className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <MessageCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">Get Quote</div>
                        <div className="text-sm text-gray-600">Free estimate</div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;