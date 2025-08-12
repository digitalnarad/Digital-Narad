// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-400 pt-10 pb-6 mt-10">
      {/* Glow line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent mb-8"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-indigo-400 text-xl font-semibold mb-4">
            Digital Narad
          </h2>
          <p className="text-sm leading-relaxed">
            We are a futuristic digital marketing agency combining creativity,
            technology, and strategy to help brands shine in the digital galaxy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-indigo-400 text-xl font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-300 transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-indigo-300 transition-colors cursor-pointer">
              Services
            </li>
            <li className="hover:text-indigo-300 transition-colors cursor-pointer">
              About Us
            </li>
            <li className="hover:text-indigo-300 transition-colors cursor-pointer">
              Portfolio
            </li>
            <li className="hover:text-indigo-300 transition-colors cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-indigo-400 text-xl font-semibold mb-4">
            Contact
          </h2>
          <p className="text-sm">📍 Surat, Gujrat</p>
          <p className="text-sm">📞 +91 9106796346</p>
          <p className="text-sm">✉ digitalnarad.tech@gmail.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-indigo-300 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-indigo-300 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-indigo-300 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-indigo-300 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Digital Narad. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
