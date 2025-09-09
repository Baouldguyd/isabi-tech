"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });

  const targetStats = {
    projects: 150,
    clients: 85,
    years: 5,
    satisfaction: 98
  };

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    
    const increment = {
      projects: targetStats.projects / steps,
      clients: targetStats.clients / steps,
      years: targetStats.years / steps,
      satisfaction: targetStats.satisfaction / steps
    };

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let updated = false;

        (Object.keys(newCounters) as Array<keyof typeof newCounters>).forEach(key => {
          if (newCounters[key] < targetStats[key]) {
            newCounters[key] = Math.min(
              targetStats[key],
              Math.floor(newCounters[key] + increment[key])
            );
            updated = true;
          }
        });

        if (!updated) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [targetStats]);

  const stats = [
    { value: counters.projects, label: "Projects Completed", suffix: "+" },
    { value: counters.clients, label: "Happy Clients", suffix: "+" },
    { value: counters.years, label: "Years Experience", suffix: "+" },
    { value: counters.satisfaction, label: "Client Satisfaction", suffix: "%" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose iSabi Technologies?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We deliver exceptional results that drive business growth and exceed expectations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;