import { useState, useEffect } from "react";
import logo from "../../../assets/images/Logo.png";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu visibility
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleMenuClick = (index, name) => {
    setActiveIndex(index);
    setIsOpen(false); // Close the mobile menu when a menu item is clicked

    if (name === "Home") {
      // Scroll to the top when Home is clicked
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll effect
      });
    }
  };

  // Add scroll event listener to toggle navbar fixed state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-[#224A4D] px-6 py-[1.3rem] transition-all duration-300 lg:px-[120px] ${
        isScrolled ? " left-0 top-0 z-50 shadow-lg" : ""
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex justify-between">
          <img src={logo} alt="Logo" className="h-[74.01px] min-w-[132px]" />
        </div>

        {/* Desktop Menu (Hidden on small screens) */}
        <div className="navbar-menu hidden space-x-12 md:flex">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-base text-white hover:text-white ${
                activeIndex === index ? "border-b-2 border-white pb-[8px]" : ""
              }`}
              onClick={() => handleMenuClick(index, item.name)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Sign In / Sign Up Buttons (Hidden on small screens) */}
        <div className="navbar-menu hidden space-x-4 text-base md:flex">
          <Link
            to={"/signin"}
            className="rounded-lg border-[1px] border-[#F3FAF9] bg-opacity-0 px-6 py-2 text-white"
          >
            Sign In
          </Link>
          <Link
            to={"/signin"}
            className="rounded-lg border border-transparent bg-[#389294] px-6 py-2 text-white"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Icon (Visible only on small screens) */}
        <div
          className=" text-white focus:outline-none md:hidden" // Show on small screens, hide on larger screens
          onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu visibility
        >
          <FaBars className="h-8 w-8" />
        </div>
      </div>

      {/* Mobile Menu (Visible only on small screens) */}
      
      <div
        className={`${
          isOpen ? "block" : "hidden" // Show or hide the mobile menu based on isOpen state
        } flex flex-col space-y-2 bg-teal-600 p-4 md:hidden`} // Hide on larger screens
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`text-white hover:text-gray-300 ${
              activeIndex === index ? "border-b-2 border-white" : ""
            }`}
            onClick={() => handleMenuClick(index, item.name)}
          >
            {item.name}
          </a>
        ))}

        {/* Mobile version of Sign In / Sign Up buttons */}
        <button
          onClick={() => navigate("/signin")}
          className="rounded bg-white px-4 py-2 text-teal-600"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signin")}
          className="rounded bg-teal-500 px-4 py-2 text-white"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
