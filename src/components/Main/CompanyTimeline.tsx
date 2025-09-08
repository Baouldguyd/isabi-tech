"use client";

import { motion } from 'framer-motion';

const CompanyTimeline = () => {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "iSabi Technologies was established with a vision to empower businesses through innovative digital solutions."
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Secured our first enterprise client, marking the beginning of our journey with large-scale projects."
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our team to 15 talented professionals across design, development, and project management."
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Awarded 'Best Tech Startup' at the National Digital Innovation Awards."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Opened our first international office and began serving clients across three continents."
    },
    {
      year: "2024",
      title: "100+ Projects Completed",
      description: "Celebrated the successful completion of over 100 projects for clients worldwide."
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A timeline of key milestones in our company's growth and success
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex items-center justify-center w-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-600 z-10"></div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full md:px-8">
                <div className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-light dark:shadow-none border border-gray-100 dark:border-gray-700 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-bold mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                </div>
              </div>

              {/* Mobile dot */}
              <div className="flex md:hidden items-center justify-center w-full my-4">
                <div className="w-4 h-4 rounded-full bg-blue-600 z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;