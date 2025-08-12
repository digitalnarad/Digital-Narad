// src/pages/Home.jsx
import React from "react";
import SolarSystem from "../components/SolarSystem";
import { Link } from "react-router-dom";
import { FaRocket, FaGlobe, FaLightbulb, FaChartLine } from "react-icons/fa";

function Home() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Solar system full-screen background */}
      <div className="fixed inset-0  z-0">
        <SolarSystem />
      </div>

      {/* Page content wrapper to match other pages */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <section
          className="text-center mb-20 "
          style={{ height: "300px" }}
        ></section>

        {/* Services */}
        <section className="mb-20 z-10">
          <h2 className="text-center text-3xl font-bold mb-12">Our Universe</h2>
          <div className="grid gap-10 md:grid-cols-4">
            {[
              {
                icon: <FaRocket size={40} />,
                title: "Marketing Campaigns",
                desc: "Launch powerful campaigns that reach the stars.",
              },
              {
                icon: <FaGlobe size={40} />,
                title: "Brand Strategy",
                desc: "Build an identity that orbits in customers' minds.",
              },
              {
                icon: <FaLightbulb size={40} />,
                title: "Creative Design",
                desc: "From nebula-inspired logos to galaxy-grade UI.",
              },
              {
                icon: <FaChartLine size={40} />,
                title: "Web Development",
                desc: "Crafting sites that move at lightspeed.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-gray-900/60 p-6 rounded-2xl shadow-lg text-center transition transform hover:-translate-y-2 hover:bg-gray-800/80"
              >
                <div className="text-indigo-400 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center z-10">
          <h2 className="text-4xl font-extrabold mb-4">
            Your brand deserves to shine among the stars.
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let’s launch it together.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition"
          >
            Book a Call
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Home;
