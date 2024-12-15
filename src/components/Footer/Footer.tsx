import React from "react";
import Image from "next/image";
import Logo from "@/assets/Logo/Logo.png";
import linkedin from "@/assets/Logo/linkedin.svg";
import facebook from "@/assets/Logo/facebook.svg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className=" w-[90%]  m-auto h-[10rem]">
      <div className=" h-[100%]  flex  items-centerfont-[manrope-regular]">
      <div className=" flex justify-between w-full px-6 ">
        {/* Logo */}
        <div className=" w-[70px] h-[70px] bg-[#EBEDEE] my-auto rounded-md flex justify-center items-center">
          <Image src={Logo} alt="Isabi Tech Logo" />
        </div>
        {/* Nav Link */}
        <div className="  flex gap-x-40 items-center">
          <ul className=" flex space-x-10 ">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Join us</li>
          </ul>
          {/* Contact Button */}
          <div className=" flex gap-2 ">
            <p>Stay connected with us</p>
            <Image src={facebook} alt="Facebook Logo" />
            <Image src={linkedin} alt="Linkedin logo" />
          </div>
        </div>
      </div>
      
    </div>
    <div className=" flex justify-between text-[#868686] font-light">
    <p>© {year} Isabi Technologies. All rights reserved.</p>
    <p>Privacy Policy</p>
  </div>
    </div>
  );
};

export default Footer;
