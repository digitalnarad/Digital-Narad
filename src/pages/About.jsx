import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaTrophy,
  FaHeart,
  FaLightbulb,
  FaCode,
  FaPalette,
  FaChartLine,
  FaGlobe,
  FaQuoteLeft,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaArrowRight,
  FaStar,
  FaPlay,
} from "react-icons/fa";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Creative Director & Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "10+ years of experience in digital marketing and brand strategy.",
    skills: ["Strategy", "Branding", "Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Full-stack developer passionate about creating amazing web experiences.",
    skills: ["React", "Node.js", "UI/UX"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    role: "Marketing Strategist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Data-driven marketer with expertise in PPC and social media campaigns.",
    skills: ["PPC", "Analytics", "Social Media"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

// Stats data
const stats = [
  { number: "150+", label: "Happy Clients", icon: <FaUsers /> },
  { number: "500+", label: "Projects Completed", icon: <FaTrophy /> },
  { number: "5+", label: "Years Experience", icon: <FaRocket /> },
  { number: "98%", label: "Client Satisfaction", icon: <FaHeart /> },
];

// Values data
const values = [
  {
    icon: <FaLightbulb className="text-yellow-400 text-4xl" />,
    title: "Innovation",
    description:
      "We stay ahead of trends and constantly explore new technologies to deliver cutting-edge solutions.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: <FaHeart className="text-red-400 text-4xl" />,
    title: "Passion",
    description:
      "We love what we do and it shows in every project. Our enthusiasm drives exceptional results.",
    gradient: "from-red-500/20 to-pink-500/20",
  },
  {
    icon: <FaUsers className="text-blue-400 text-4xl" />,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, ensuring transparent communication throughout.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: <FaTrophy className="text-purple-400 text-4xl" />,
    title: "Excellence",
    description:
      "Quality is never an accident. We strive for perfection in every detail of our work.",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Jennifer Walsh",
    role: "CEO, TechStart",
    content:
      "Working with this team transformed our digital presence completely. The results exceeded our expectations!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    name: "David Kim",
    role: "Marketing Director, GrowthCo",
    content:
      "Their strategic approach and attention to detail helped us achieve a 300% increase in online conversions.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    name: "Lisa Thompson",
    role: "Founder, CreativeSpace",
    content:
      "Exceptional creativity and professionalism. They truly understand how to bring visions to life.",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Counter animation hook
const useCountUp = (end, duration = 2) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startCount = 0;
    const endCount = parseInt(end.replace(/[^0-9]/g, ""));

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(
        progress * (endCount - startCount) + startCount
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return { count, setIsVisible };
};

const CountUpNumber = ({ end, label, icon }) => {
  const { count, setIsVisible } = useCountUp(end);
  const suffix = end.replace(/[0-9]/g, "");

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-indigo-400 text-4xl mb-4 flex justify-center"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <motion.div
        className="text-4xl font-bold text-white mb-2"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {count}
        {suffix}
      </motion.div>
      <div className="text-gray-400 font-medium">{label}</div>
    </motion.div>
  );
};

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-lg font-medium text-indigo-400 mb-4 tracking-wider uppercase"
              animate={floatingAnimation}
            >
              About Us
            </motion.span>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We Create Digital
              <br />
              <span className="text-indigo-400">Experiences</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're a passionate team of digital marketers, developers, and
              designers committed to helping businesses thrive in the digital
              landscape. Our mission is to transform your vision into powerful
              digital solutions that drive real results.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay className="inline mr-2" />
                Watch Our Story
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-indigo-400 text-indigo-400 font-semibold rounded-full hover:bg-indigo-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <CountUpNumber
                key={index}
                end={stat.number}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative w-full h-96 rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Our team working together"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2019, we started as a small team with big dreams.
                  Our passion for digital innovation and commitment to client
                  success has driven our growth into a trusted digital marketing
                  partner.
                </p>
                <p>
                  Today, we've helped over 150 businesses transform their
                  digital presence, from startups to established enterprises.
                  Our approach combines creativity with data-driven strategies
                  to deliver measurable results.
                </p>
                <p>
                  We believe in the power of collaboration, continuous learning,
                  and pushing boundaries to create exceptional digital
                  experiences that make a lasting impact.
                </p>
              </div>

              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  { icon: <FaCode />, text: "Development" },
                  { icon: <FaPalette />, text: "Design" },
                  { icon: <FaChartLine />, text: "Marketing" },
                  { icon: <FaGlobe />, text: "Strategy" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full text-sm"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(55, 65, 81, 0.7)",
                    }}
                  >
                    <span className="text-indigo-400">{item.icon}</span>
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={`group relative bg-gradient-to-br ${value.gradient} backdrop-blur-sm rounded-3xl p-8 text-center border border-gray-700/50`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The talented individuals behind our success stories.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 text-center border border-gray-700/50 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <h3 className="text-xl font-bold mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-indigo-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm mb-6">{member.bio}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  {Object.entries(member.social).map(([platform, link]) => {
                    const icons = {
                      linkedin: <FaLinkedin />,
                      twitter: <FaTwitter />,
                      instagram: <FaInstagram />,
                      github: <FaGithub />,
                    };
                    return (
                      <motion.a
                        key={platform}
                        href={link}
                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {icons[platform]}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </motion.div>

          <motion.div
            className="relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50"
            key={activeTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaQuoteLeft className="text-indigo-400 text-4xl mb-6" />

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "{testimonials[activeTestimonial].content}"
            </p>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonials[activeTestimonial].avatar}
                alt={testimonials[activeTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-white font-semibold">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-gray-400">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              {[...Array(testimonials[activeTestimonial].rating)].map(
                (_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                )
              )}
            </div>
          </motion.div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? "bg-indigo-400" : "bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together. Your
            success story starts here.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg rounded-full shadow-2xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <FaArrowRight className="inline ml-2" />
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold text-lg rounded-full hover:bg-gray-800/30 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
