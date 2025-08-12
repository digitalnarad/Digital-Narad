"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaEye, FaHeart } from "react-icons/fa";

const About = () => {
  const sections = [
    {
      title: "Our Mission",
      description:
        "To empower businesses with innovative digital marketing strategies that drive growth, engagement, and lasting success in the digital landscape.",
      icon: <FaRocket className="text-indigo-400 text-6xl" />,
      bg: "bg-indigo-900/30 border-indigo-600",
      bgImage: "/images/mission-bg.jpg",
    },
    {
      title: "Our Vision",
      description:
        "To be the leading digital marketing agency that transforms businesses through creative solutions and data-driven strategies.",
      icon: <FaEye className="text-green-400 text-6xl" />,
      bg: "bg-green-900/30 border-green-600",
      bgImage: "/images/vision-bg.jpg",
    },
    {
      title: "Our Values",
      description:
        "Integrity, innovation, and client success are at the core of everything we do. We believe in building long-term partnerships.",
      icon: <FaHeart className="text-pink-400 text-6xl" />,
      bg: "bg-pink-900/30 border-pink-600",
      bgImage: "/images/values-bg.jpg",
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-6 relative overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-400">
          About Us
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We are Digital Narad, crafting bold strategies and delivering
          exceptional results that help brands stand out in the digital
          universe.
        </p>
      </motion.div>

      {/* Split Sections with Parallax */}
      {sections.map((sec, idx) => (
        <motion.div
          key={idx}
          className={`relative grid md:grid-cols-2 gap-8 items-center mb-24 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Parallax Background */}
          <motion.div
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              backgroundImage: `url(${sec.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ y: -30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2 }}
          />

          {/* Icon */}
          <div className="flex justify-center">
            <motion.div
              className={`p-10 rounded-3xl border shadow-lg ${sec.bg}`}
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(99,102,241,0.7)",
                  "0 0 40px rgba(99,102,241,0.4)",
                  "0 0 20px rgba(99,102,241,0.7)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {sec.icon}
            </motion.div>
          </div>

          {/* Text */}
          <div className="max-w-lg relative z-10">
            <h2 className="text-3xl font-bold text-indigo-300 mb-4">
              {sec.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">{sec.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default About;
