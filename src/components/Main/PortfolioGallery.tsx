"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ArrowRightIcon from "@/assets/ArrowRightIcon";

const portfolioItems = [
  {
    id: 1,
    title: "CEO Gym",
    category: "Website",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description: "Modern fitness website with booking system"
  },
  {
    id: 2,
    title: "Frienzy Kitchen",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description: "Food delivery mobile application"
  },
  {
    id: 3,
    title: "Zendove",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    description: "Real estate mobile platform"
  },
  {
    id: 4,
    title: "TechFlow",
    category: "Website",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description: "Technology company showcase website"
  },
  {
    id: 5,
    title: "EcoShop",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description: "Sustainable products e-commerce platform"
  },
  {
    id: 6,
    title: "HealthTrack",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description: "Health and fitness tracking application"
  }
];

const PortfolioGallery = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Website', 'Mobile App', 'E-commerce'];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="mt-16 font-[manrope-regular] w-full max-w-7xl mx-auto px-4">
      {/* Portfolio Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories: Our Work in Action</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover a portfolio of visually stunning and strategically crafted
          digital projects that showcase our creativity and expertise.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-light border border-gray-100 hover:shadow-medium transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  <p className="text-blue-600 font-medium">{item.category}</p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                  <ArrowRightIcon />
                </div>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <a 
          href="#" 
          className="btn btn-primary"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default PortfolioGallery;