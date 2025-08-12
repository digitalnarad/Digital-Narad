import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SolarSystem from "./components/SolarSystem";

function App() {
  return (
    <Router>
      <div
        className="bg-gray-950 text-white min-h-screen flex flex-col"
        style={{ position: "relative" }}
      >
        <Navbar />
        <section
          className="w-full"
          style={{
            height: "calc(100vh - 80px)",
            position: "sticky",
            top: "80px",
            zIndex: "0",
          }}
        >
          <SolarSystem />
        </section>
        <div className="flex-1 z-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
