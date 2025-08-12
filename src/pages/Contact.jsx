import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaRocket,
  FaHeadset,
  FaChartLine,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";

const contactMethods = [
  {
    icon: <FaEnvelope className="text-indigo-400 text-3xl" />,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    contact: "hello@digitalnarad.com",
    action: "mailto:hello@digitalnarad.com",
    gradient: "from-indigo-500/20 to-purple-500/20",
    hoverGradient: "from-indigo-500/30 to-purple-500/30",
  },
  {
    icon: <FaPhoneAlt className="text-green-400 text-3xl" />,
    title: "Call Us",
    description: "Speak directly with our team for immediate assistance",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567",
    gradient: "from-green-500/20 to-emerald-500/20",
    hoverGradient: "from-green-500/30 to-emerald-500/30",
  },
  {
    icon: <FaWhatsapp className="text-green-400 text-3xl" />,
    title: "WhatsApp",
    description: "Quick questions? Message us on WhatsApp",
    contact: "+1 (555) 123-4567",
    action: "https://wa.me/15551234567",
    gradient: "from-green-500/20 to-lime-500/20",
    hoverGradient: "from-green-500/30 to-lime-500/30",
  },
  {
    icon: <FaCalendarAlt className="text-blue-400 text-3xl" />,
    title: "Schedule a Meeting",
    description: "Book a free consultation to discuss your project",
    contact: "Book 30-min call",
    action: "#schedule",
    gradient: "from-blue-500/20 to-cyan-500/20",
    hoverGradient: "from-blue-500/30 to-cyan-500/30",
  },
];

const socialLinks = [
  { icon: <FaLinkedin />, url: "https://linkedin.com", color: "text-blue-600" },
  { icon: <FaTwitter />, url: "https://twitter.com", color: "text-sky-400" },
  {
    icon: <FaInstagram />,
    url: "https://instagram.com",
    color: "text-pink-500",
  },
  {
    icon: <FaFacebookF />,
    url: "https://facebook.com",
    color: "text-blue-500",
  },
];

const services = [
  "Web Development",
  "Shopify Development",
  "3D Product Design",
  "SEO & Performance",
  "Social Media Marketing",
  "Meta Ads Campaign",
  "Google Ads Management",
  "Content Creation",
  "Logo & Brand Design",
  "Email Marketing",
  "Analytics & Reporting",
  "Digital Marketing Strategy",
];

const budgetRanges = [
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
];

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    services: [],
    budget: "",
    message: "",
    projectType: "new",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "services") {
      if (checked) {
        setFormData((prev) => ({
          ...prev,
          services: [...prev.services, value],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          services: prev.services.filter((service) => service !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 1 }}
          >
            <FaCheckCircle className="text-4xl text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Message Sent Successfully!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for reaching out. We'll get back to you within 24 hours
            with a detailed proposal.
          </p>
          <motion.button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                website: "",
                services: [],
                budget: "",
                message: "",
                projectType: "new",
              });
            }}
            className="px-8 py-3 bg-indigo-500 text-white rounded-full font-medium hover:bg-indigo-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Another Message
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-lg font-medium text-indigo-400 mb-4 tracking-wider uppercase"
            animate={floatingAnimation}
          >
            Let's Talk
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In
            <br />
            <span className="text-indigo-400">Touch</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your digital presence? Let's discuss your project
            and create something amazing together.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              className={`group relative bg-gradient-to-br ${method.gradient} backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 cursor-pointer overflow-hidden text-center hover:no-underline`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${method.hoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}
              />

              <div className="relative z-10">
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {method.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {method.description}
                </p>
                <div className="text-indigo-400 font-medium">
                  {method.contact}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Address */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Office Info */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-indigo-400" />
                Our Office
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaBuilding className="text-indigo-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Digital Narad HQ</p>
                    <p className="text-gray-300">
                      123 Digital Street, Marketing City
                    </p>
                    <p className="text-gray-300">Tech Hub, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaClock className="text-indigo-400" />
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-gray-300">
                      Mon - Fri: 9:00 AM - 6:00 PM EST
                    </p>
                    <p className="text-gray-300">
                      Weekend: Emergency support only
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaHeadset className="text-indigo-400" />
                  <div>
                    <p className="text-white font-medium">Support</p>
                    <p className="text-gray-300">
                      24/7 Emergency support available
                    </p>
                    <p className="text-gray-300">
                      Average response time: 2 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center ${social.color} hover:scale-110 transition-all duration-300 hover:bg-gray-700`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-300 mt-4 text-sm">
                Stay updated with our latest projects, tips, and industry
                insights.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-indigo-500/20">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <FaRocket />,
                    stat: "50+",
                    label: "Projects Delivered",
                  },
                  {
                    icon: <FaChartLine />,
                    stat: "300%",
                    label: "Avg ROI Increase",
                  },
                  {
                    icon: <FaCheckCircle />,
                    stat: "98%",
                    label: "Client Satisfaction",
                  },
                  {
                    icon: <FaClock />,
                    stat: "24/7",
                    label: "Support Available",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-indigo-400 text-2xl mb-2 flex justify-center">
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {item.stat}
                    </div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FaPaperPlane className="text-indigo-400" />
              Start Your Project
            </h2>

            {/* Project Type */}
            <div>
              <label className="block text-gray-300 mb-3 font-medium">
                Project Type
              </label>
              <div className="flex gap-4">
                {["new", "redesign", "consultation"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value={type}
                      checked={formData.projectType === type}
                      onChange={handleInputChange}
                      className="text-indigo-500 focus:ring-indigo-400"
                    />
                    <span className="text-gray-300 capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <FaUser className="inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <FaEnvelope className="inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <FaBuilding className="inline mr-2" />
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <FaPhoneAlt className="inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                <FaGlobe className="inline mr-2" />
                Website URL
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://yourwebsite.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
              />
            </div>

            {/* Services Interested */}
            <div>
              <label className="block text-gray-300 mb-3 font-medium">
                Services Interested In
              </label>
              <div className="grid grid-cols-2 gap-3 max-h-40 overflow-y-auto">
                {services.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleInputChange}
                      className="text-indigo-500 focus:ring-indigo-400 rounded"
                    />
                    <span className="text-gray-300 text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Project Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 outline-none transition-all duration-300 text-white"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Project Details *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Project Details
                </>
              )}
            </motion.button>

            <p className="text-sm text-gray-400 text-center">
              We'll respond within 24 hours with a detailed project proposal and
              next steps.
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
