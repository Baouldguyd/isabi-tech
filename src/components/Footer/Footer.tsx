import React from "react";
import Image from "next/image";
import Logo from "@/assets/Logo/Logo.png";
import linkedin from "@/assets/Logo/linkedin.svg";
import facebook from "@/assets/Logo/facebook.svg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          {/* Logo */}
          <div className="w-[70px] h-[70px] bg-[#EBEDEE] rounded-lg flex justify-center items-center">
            <Image src={Logo} alt="Isabi Tech Logo" width={50} height={50} />
          </div>
          
          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8" aria-label="Footer navigation">
            <a href="#" className="hover:text-[#0A4FBB] transition-colors font-medium">Home</a>
            <a href="#services" className="hover:text-[#0A4FBB] transition-colors font-medium">Services</a>
            <a href="#about" className="hover:text-[#0A4FBB] transition-colors font-medium">About Us</a>
            <a href="#portfolio" className="hover:text-[#0A4FBB] transition-colors font-medium">Portfolio</a>
            <a href="#contact" className="hover:text-[#0A4FBB] transition-colors font-medium">Join us</a>
          </nav>
          
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Stay connected:</p>
            <div className="flex gap-3">
              <a href="https://facebook.com" aria-label="Visit our Facebook page" className="hover:opacity-80 transition-opacity">
                <Image src={facebook} alt="" width={24} height={24} />
              </a>
              <a href="https://linkedin.com" aria-label="Visit our LinkedIn page" className="hover:opacity-80 transition-opacity">
                <Image src={linkedin} alt="" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-center md:text-left">© {year} Isabi Technologies. All rights reserved.</p>
          <p className="text-gray-500 text-center md:text-right">
            <a href="#" className="hover:text-[#0A4FBB] transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;