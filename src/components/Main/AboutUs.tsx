import React from "react";
import Image from "next/image";
import CompanyTimeline from "./CompanyTimeline";
import TeamShowcase from "./TeamShowcase";

const AboutUs = () => {
  return (
    <div className="mt-16 font-[manrope-regular] w-full max-w-7xl mx-auto px-4">
      {/* header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          About iSabi Technologies
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          We offer a 12 months Free Technical Support program after the project is
          completed to train your staff on how to continuously manage your
          website.
        </p>
      </div>
      
      {/* content */}
      <div className="flex gap-8 justify-between md:flex-row flex-col items-center mb-16">
        {/* text content */}
        <div className="flex flex-col gap-6 h-auto w-full md:w-1/2">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Isabi Technologies began with a vision to empower businesses through
            innovation and dedication. Our mission is to embody the &lsquo;I
            Can&lsquo; spirit, delivering exceptional services that elevate your
            brand.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            At Isabi, we pride ourselves on our commitment to excellence,
            creativity, and client satisfaction. Our team of experts thrives on
            transforming challenges into opportunities.
          </p>
          <div className="mt-6">
            <a 
              href="#contact" 
              className="btn btn-primary inline-block"
            >
              Get In Touch
            </a>
          </div>
        </div>
        {/* image content */}
        <div className="md:w-[443px] h-[380px] rounded-xl overflow-hidden shadow-medium flex items-center justify-center">
          <Image 
            alt="Office team at iSabi Technologies" 
            width={400} 
            height={380} 
            className="w-full h-full object-cover" 
            src="https://res.cloudinary.com/dxjjjt3zt/image/upload/v1734255427/og06z5b25kthhwpsypla.jpg" 
          />
        </div>
      </div>
      
      {/* Company Timeline */}
      <CompanyTimeline />
      
      {/* Team Showcase */}
      <TeamShowcase />
    </div>
  );
};

export default AboutUs;