import React, { useState } from "react";
import logo from "../../../assets/images/Logo.png";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleMenuClick = (index, sectionId) => {
    setActiveIndex(index);
    setIsOpen(false);

    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#224A4D] py-4 px-6 md:px-12 lg:px-20 w-full">
      <div className="flex justify-between items-center w-full">
        <a href="#home-section">
          <img src={logo} alt="Logo" className="h-18 min-w-[132px]" />
        </a>

        <div className="hidden custom:flex  space-x-12">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className={`text-white hover:text-gray-300 text-base ${
                activeIndex === index ? "border-b-2 border-white pb-1" : ""
              }`}
              onClick={() => handleMenuClick(index, item.id)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden custom:flex space-x-4">
          <button className="bg-opacity-0 text-white px-4 py-2 rounded-lg border border-[#F3FAF9]">
            Sign In
          </button>
          <button className="bg-[#389294] text-white px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </div>

        <button
          className="custom:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-teal-600">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className={`text-white hover:text-gray-300 ${
                activeIndex === index ? "border-b-2 border-white" : ""
              }`}
              onClick={() => handleMenuClick(index, item.id)}
            >
              {item.name}
            </a>
          ))}
          <button className="bg-white text-teal-600 px-4 py-2 rounded">
            Login
          </button>
          <button className="bg-teal-500 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
