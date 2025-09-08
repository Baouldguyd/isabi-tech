import React, { useState } from 'react';
import ArrowRightIcon from "@/assets/ArrowRightIcon";

interface HeroCTAProps {
  primaryText: string;
  secondaryText: string;
  href: string;
}

const HeroCTA: React.FC<HeroCTAProps> = ({ primaryText, secondaryText, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a 
        href={href}
        className="btn btn-primary w-full sm:w-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {primaryText}
      </a>
      <div className="flex items-center gap-2">
        <div className="h-14 w-14 rounded-full flex items-center justify-center bg-blue-50 transition-all duration-300 ease-in-out">
          <button 
            className="w-12 h-12 bg-[#0A4FBB] rounded-full flex items-center justify-center hover:bg-[#0945a0] transition-colors"
            aria-label="See our work"
          >
            <ArrowRightIcon />
          </button>
        </div>
        <span className="text-gray-600 font-medium">{secondaryText}</span>
      </div>
    </div>
  );
};

export default HeroCTA;