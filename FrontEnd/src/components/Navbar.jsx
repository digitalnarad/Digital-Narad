import React from "react";
import { HiHome, HiChip } from "react-icons/hi";
import { GiArrowsShield } from "react-icons/gi";
import { FaChartLine, FaEnvelopeOpenText, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="flex align-middle justify-between bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg px-6 py-3 sticky top-0 z-50"
      style={{ height: "80px" }}
    >
      <div
        className="max-w-7xl mx-auto flex justify-between items-center"
        style={{ width: "100%" }}
      >
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-11 h-11 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg">
            <FaLaptopCode size={22} />
          </div>
          <span className="text-indigo-300 text-2xl font-extrabold tracking-wider">
            Digital Narad
          </span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center space-x-2 hover:text-indigo-400 transition-colors"
            >
              <HiHome size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="flex items-center space-x-2 hover:text-indigo-400 transition-colors"
            >
              <GiArrowsShield size={20} />
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center space-x-2 hover:text-indigo-400 transition-colors"
            >
              <HiChip size={20} />
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="flex items-center space-x-2 hover:text-indigo-400 transition-colors"
            >
              <FaChartLine size={20} />
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-2 hover:text-indigo-400 transition-colors"
            >
              <FaEnvelopeOpenText size={20} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
