import Image from "next/image";
import Logo from "@/assets/Logo/Logo.png";
import HamburgerIcon from "@/assets/Icon/Hamburger";
import { useState, useEffect } from "react";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const mobileMenu = document.getElementById("mobile-menu");
      const hamburgerButton = document.getElementById("hamburger-button");

      if (
        isOpen &&
        mobileMenu &&
        !mobileMenu.contains(target) &&
        hamburgerButton &&
        !hamburgerButton.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="h-auto min-h-[4rem] flex items-center w-full px-4 md:px-8 py-4 shadow-light bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="flex justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link href={"/"}>
          <div className="w-[60px] h-[60px] bg-[#EBEDEE] rounded-lg flex justify-center items-center shadow-light">
            <Image src={Logo} alt="Isabi Tech Logo" width={40} height={40} />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center"
          aria-label="Main navigation"
        >
          <div className="flex items-center space-x-10">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="/#"
                  className="hover:text-[#0A4FBB] transition-colors font-medium dark:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-[#0A4FBB] transition-colors font-medium dark:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:text-[#0A4FBB] transition-colors font-medium dark:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#portfolio"
                  className="hover:text-[#0A4FBB] transition-colors font-medium dark:text-white"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:text-[#0A4FBB] transition-colors font-medium dark:text-white"
                >
                  Join us
                </a>
              </li>
            </ul>
            {/* Dark Mode Toggle */}
            <div className="ml-4">
              <DarkModeToggle />
            </div>
            {/* Contact Button */}
            <div>
              <a href="/#contact" className="btn btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Nav */}
        <div className="flex justify-end relative md:hidden">
          <button
            id="hamburger-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="focus:outline-none focus:ring-2 focus:ring-[#0A4FBB] rounded-md p-2 mr-2"
          >
            <HamburgerIcon />
          </button>

          <nav
            id="mobile-menu"
            className={`absolute top-20 right-0 rounded-lg bg-white dark:bg-gray-800 w-[12rem] h-auto p-4 z-10 shadow-medium transition-all duration-300 ease-in-out transform ${
              isOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-y-4">
              <li>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-[#0A4FBB] transition-colors font-medium dark:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-[#0A4FBB] transition-colors font-medium dark:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-[#0A4FBB] transition-colors font-medium dark:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-[#0A4FBB] transition-colors font-medium dark:text-white"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-[#0A4FBB] transition-colors font-medium dark:text-white"
                >
                  Join us
                </a>
              </li>
              <li className="pt-4 flex justify-center">
                <DarkModeToggle />
              </li>
              <li className="pt-4">
                <a
                  href="#contact"
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
