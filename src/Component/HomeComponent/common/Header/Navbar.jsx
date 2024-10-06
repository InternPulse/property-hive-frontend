import React, { useState } from "react";
import logo from "../../../../assets/images/Logo.png";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

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
    setIsOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <nav className="bg-[#224A4D] py-[1.6rem] px-6 lg:px-[120px] w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between">
          <img src={logo} alt="Logo" className="h-[74.01px] min-w-[132px]" />
        </div>
        {/* Desktop Menu */}
        <div className="navbar-menu hidden md:flex space-x-12">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-white hover:text-white text-base ${
                activeIndex === index ? "border-b-2 border-white pb-[8px]" : ""
              }`}
              onClick={() => handleMenuClick(index)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="navbar-menu hidden md:flex space-x-4 text-base">
          <button className="bg-opacity-0 text-white px-6 py-2 rounded-lg border-[1px] border-[#F3FAF9]">
            Sign In
          </button>
          <button className="bg-[#389294] text-white px-6 py-2 rounded-lg border border-transparent">
            Sign Up
          </button>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden flex flex-col space-y-2 p-4 bg-[#389294]`}
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
        <button className="bg-white text-teal-600 px-4 py-2 rounded">
          Login
        </button>
        <button className="bg-[#389294] text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
