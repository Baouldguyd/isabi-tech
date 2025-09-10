"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Star from "@/assets/Icon/Star";

const testimonials = [
  {
    image: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    name: "John Doe",
    type: "CEO, XYZ Company",
    statement:
      "Isabi Technologies exceeded our expectations! Their dedication and expertise helped us reach new heights in our online presence.",
  },
  {
    image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    name: "Jane Smith",
    type: "Founder, ABC Inc.",
    statement:
      "Working with Isabi was a game-changer! Their creativity and professionalism set them apart from the rest.",
  },
  {
    image: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
    name: "Patrick Brown",
    type: "CEO, XYZ Company",
    statement:
      "The team at Isabi Technologies transformed our digital presence. Their strategic approach and technical expertise delivered outstanding results.",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Sarah Johnson",
    type: "Marketing Director, TechStart",
    statement:
      "Exceptional service and attention to detail. Isabi Technologies understood our vision and brought it to life better than we imagined.",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Michael Chen",
    type: "CTO, InnovateCorp",
    statement:
      "The technical expertise and innovative solutions provided by Isabi Technologies have been instrumental in our digital transformation.",
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="mt-16 font-[manrope-regular] w-full max-w-7xl mx-auto px-4">
      {/* Testimonials Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Testimonials From Clients</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Take a look at what our satisfied clients have to say by collaborating
          with us to empower their business potential.
        </p>
      </div>

      <div className="relative h-[400px] md:h-[350px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                nextTestimonial();
              } else if (swipe > swipeConfidenceThreshold) {
                prevTestimonial();
              }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
                    <Image 
                      src={testimonials[currentIndex].image} 
                      alt={`Profile picture of ${testimonials[currentIndex].name}`} 
                      width={128} 
                      height={128} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="flex-grow text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-6 italic">
                    &apos;{testimonials[currentIndex].statement}&apos;
                  </p>
                  <div>
                    <p className="text-xl font-bold text-gray-800">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-600">{testimonials[currentIndex].type}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a 
          href="#" 
          className="btn btn-primary"
        >
          View All Testimonials
        </a>
      </div>
    </div>
  );
};

export default TestimonialCarousel;