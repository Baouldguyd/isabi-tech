import Image from "next/image";
import Logo from "@/assets/Logo/Logo.png";
import HamburgerIcon from "@/assets/Icon/Hamburger";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="h-[100%] flex items-center w-[90%] m-auto font-[manrope-regular]">
      <div className="flex justify-between w-full px-6">
        {/* Logo */}
        <div className="w-[70px] h-[70px] bg-[#EBEDEE] rounded-md flex justify-center items-center">
          <Image src={Logo} alt="Isabi Tech Logo" />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:block">
          <div className="flex gap-x-40 items-center">
            <ul className="flex space-x-10 cursor-pointer">
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Join us</li>
            </ul>
            {/* Contact Button */}
            <div>
              <button className="border w-[115px] h-[45px] p-2 rounded-lg text-white bg-[#0A4FBB]">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex justify-end relative md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <HamburgerIcon />
          </button>

          <div
            className={`absolute top-20 right-0 rounded-md bg-white w-[10rem] h-auto p-4 z-10 shadow-md transition-all duration-300 ease-in-out transform ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col gap-y-5">
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Join us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
