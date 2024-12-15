import Image from "next/image";
import Logo from "@/assets/Logo/Logo.png";
import HamburgerIcon from "@/assets/Icon/Hamburger";
import { useState } from "react";
import { div } from "framer-motion/client";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className=" h-[100%]  flex  items-center w-[90%] m-auto font-[manrope-regular]">
      <div className=" flex justify-between w-full px-6 ">
        {/* Logo */}
        <div className=" w-[70px] h-[70px] bg-[#EBEDEE] rounded-md flex justify-center items-center">
          <Image src={Logo} alt="Isabi Tech Logo" />
        </div>
        {/* Nav Link */}
        <div className=" hidden md:block">
          <div className=" flex gap-x-40 items-center">
            <ul className=" flex space-x-10 ">
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Join us</li>
            </ul>
            {/* Contact Button */}
            <div>
              <button className="  border w-[115px] h-[45px]  p-2 rounded-lg  text-white  bg-[#0A4FBB]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className=" flex justify-end">
          <button className="" onClick={() => setIsOpen(!isOpen)}>
            <HamburgerIcon />
          </button>
          {isOpen && (
            <div>
              <ul className="flex flex-col gap-y-5">
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Join us</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
