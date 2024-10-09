import React, { useState } from "react";
import logo from "../../../../assets/images/Logo.png";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
 import { LucideBookmarkMinus } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleMenuClick = (index) => {
    setActiveIndex(index);
    setIsOpen(false); 
  };


  return (
    <nav className="w-full bg-[#224A4D] px-6 py-[1.6rem] lg:px-[120px]">
      <div className="w-full items-center justify-between">
        <div className="flex justify-between">
          <img src={logo} alt="Logo" className="h-[74.01px] min-w-[132px]" />
         
        </div>
        {/* Desktop Menu */}
        <div className="navbar-menu hidden space-x-12 md:flex">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-base text-white hover:text-white ${
                activeIndex === index ? "border-b-2 border-white pb-[8px]" : ""
              }`}
              onClick={() => handleMenuClick(index)}
            >
              {item.name} 
            </a>
          ))}
        </div>
        <div className="navbar-menu hidden space-x-4 text-base md:flex">
          <button className="rounded-lg border-[1px] border-[#F3FAF9] bg-opacity-0 px-6 py-2 text-white">
            Sign In
          </button>
          <button className="rounded-lg border border-transparent bg-[#389294] px-6 py-2 text-white">
            Sign Up
          </button>
        </div>
        {/* Hamburger Icon */}
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } flex flex-col space-y-2 bg-[#389294] p-4 md:hidden`}
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`text-white hover:text-gray-300 ${
              activeIndex === index ? "border-b-2 border-white" : ""
            }`}
            onClick={() => handleMenuClick(index)}
          >
            {item.name} 
          </a>
        ))}
        <button className="rounded bg-white px-4 py-2 text-teal-600">
          Login
        </button>
        <button className="rounded bg-[#389294] px-4 py-2 text-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
