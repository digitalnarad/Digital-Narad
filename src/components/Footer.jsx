// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative z-50 text-gray-300 mt-20">
      {/* Footer background - semi transparent */}
      <div className="bg-gray-900/30 border-t border-gray-700 shadow-lg">
        {/* Footer content */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 py-10">
          {/* About */}
          <div>
            <h2 className="text-indigo-400 text-xl font-semibold mb-4">
              Digital Narad
            </h2>
            <p className="text-sm leading-relaxed text-gray-300">
              We are a futuristic digital marketing agency combining creativity,
              technology, and strategy to help brands shine in the digital
              galaxy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-indigo-400 text-xl font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-indigo-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-indigo-400 text-xl font-semibold mb-4">
              Contact
            </h2>
            <p className="text-sm">📍 Surat, Gujarat</p>
            <p className="text-sm">📞 +91 9106796346</p>
            <p className="text-sm">✉ digitalnarad.tech@gmail.com</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 rounded-full bg-gray-800/70 hover:bg-indigo-600 transition-colors shadow-md"
                  >
                    <Icon className="text-white" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-700/40">
          © {new Date().getFullYear()} Digital Narad. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
