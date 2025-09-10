"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated!</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest industry insights and updates.
          </p>
        </motion.div>

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="form"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Subscribe'}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key="success"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-blue-100">
                  You&apos;ve been subscribed to our newsletter. Check your email for confirmation.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;