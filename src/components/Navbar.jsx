import React, { useState } from "react";
import { HiHome, HiChip } from "react-icons/hi";
import { GiArrowsShield } from "react-icons/gi";
import {
  FaChartLine,
  FaEnvelopeOpenText,
  FaLaptopCode,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const menuItems = [
    { to: "/", icon: <HiHome size={20} />, label: "Home" },
    { to: "/services", icon: <GiArrowsShield size={20} />, label: "Services" },
    { to: "/about", icon: <HiChip size={20} />, label: "About Us" },
    { to: "/portfolio", icon: <FaChartLine size={20} />, label: "Portfolio" },
    {
      to: "/contact",
      icon: <FaEnvelopeOpenText size={20} />,
      label: "Contact",
    },
  ];

  return (
    <nav
      className="flex align-middle justify-between bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg px-6 py-3 sticky top-0 z-50"
      style={{ height: "80px" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-11 h-11 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg">
            <FaLaptopCode size={22} />
          </div>
          <span className="text-indigo-300 text-2xl font-extrabold tracking-wider">
            Digital Narad
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="flex items-center space-x-2 hover:text-indigo-400 transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-indigo-400 transition-colors focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-lg md:hidden z-50">
          <ul className="flex flex-col space-y-4 p-6 text-gray-300 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="flex items-center space-x-2 hover:text-indigo-400 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
