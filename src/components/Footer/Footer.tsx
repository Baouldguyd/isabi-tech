import React from "react";
import Image from "next/image";
import Logo from "@/assets/Logo/Logo.png";
import linkedin from "@/assets/Logo/linkedin.svg";
import facebook from "@/assets/Logo/facebook.svg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className=" w-[90%] flex flex-col  m-auto md:h-[10rem] h-auto gap-10 md:gap-0">
      <div className=" h-[100%]  flex md:flex-row flex-col  md:items-center font-[manrope-regular]">
      <div className=" flex md:justify-between md:w-full  px-6 md:flex-row gap-10 md:gap-0 flex-col">
        {/* Logo */}
        <div className=" w-[70px] h-[70px] bg-[#EBEDEE] my-auto rounded-md flex justify-center items-center mx-auto md:mx-0">
          <Image src={Logo} alt="Isabi Tech Logo"  />
        </div>
        {/* Nav Link */}
        <div className="  flex gap-x-40md:items-center  md:flex-row flex-col gap-10 md:gap-0">
          <ul className=" flex space-x-10 flex-wrap ">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Join us</li>
          </ul>
          {/* Contact Button */}
          <div className=" flex mx-auto gap-4 ">
            <p>Stay connected with us</p>
            <Image src={facebook} alt="Facebook Logo" />
            <Image src={linkedin} alt="Linkedin logo" />
          </div>
        </div>
      </div>
      
    </div>
    <div className=" flex md:justify-between text-[#868686] font-light md:flex-row flex-col gap-10 md:gap-0">
    <p className="text-center">© {year} Isabi Technologies. All rights reserved.</p>
    <p className=" text-center">Privacy Policy</p>
  </div>
    </div>
  );
};

export default Footer;
