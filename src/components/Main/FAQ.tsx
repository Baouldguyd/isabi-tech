"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to complete a typical project?",
      answer: "Project timelines vary based on complexity and scope. A typical website project takes 4-8 weeks, while mobile apps may take 3-6 months. We provide a detailed timeline during our initial consultation."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work across various industries including healthcare, finance, e-commerce, education, and technology. Our adaptable approach allows us to understand and serve the unique needs of each sector."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, updates, and maintenance. We also provide training sessions to help your team manage the platform independently."
    },
    {
      question: "How do you ensure the security of our data?",
      answer: "Security is our top priority. We implement industry-standard encryption, regular security audits, secure coding practices, and comply with data protection regulations like GDPR."
    },
    {
      question: "Can you work with our existing design or do you create from scratch?",
      answer: "We're flexible! We can work with your existing design assets or create a completely new design tailored to your brand. Our designers will ensure consistency and optimal user experience regardless of the approach."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on scope, complexity, and timeline. We provide detailed quotes after understanding your requirements. We offer competitive rates without compromising on quality."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our services and processes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-xl shadow-light dark:shadow-none border border-gray-100 dark:border-gray-600 overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gray-500 dark:text-gray-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;