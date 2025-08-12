import React from "react";
import SolarSystem from "../components/SolarSystem";

function Home() {
  return (
    <div className=" text-white">
      {/* SolarSystem fullscreen section */}
      <section
        className="w-full"
        style={{
          height: "calc(100vh - 80px)",
          background: "transparent",
        }}
      ></section>

      {/* Normal content below */}
      <section className="py-20 px-6 md:px-16 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold mb-4 text-indigo-400">
            Digital Narad - Your Cosmic Marketing Partner
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We blend creativity, technology, and strategy to craft unforgettable
            digital experiences. From futuristic designs to marketing campaigns
            that convert, we guide your brand through the universe of digital
            growth.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="p-8 bg-gray-900 rounded-lg shadow-lg hover:shadow-indigo-600 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
              Creative Design
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Eye-catching, modern, and user-friendly designs that perfectly
              represent your brand identity.
            </p>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-lg hover:shadow-indigo-600 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
              Digital Marketing
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Data-driven campaigns tailored to boost your reach, engagement,
              and conversions.
            </p>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-lg hover:shadow-indigo-600 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
              Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Robust web and app solutions built with the latest technology
              stacks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 text-center rounded-t-xl">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Ready to Launch Your Brand Into the Digital Universe?
        </h2>
        <button className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
}

export default Home;
