import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaSearch,
  FaPenNib,
  FaChartLine,
  FaVideo,
  FaEnvelope,
  FaCode,
  FaShopify,
  FaCube,
  FaGoogle,
  FaPalette,
  FaRobot,
  FaArrowRight,
  FaArrowLeft,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

// Complete services data with detailed information
const servicesData = [
  {
    id: "web-development",
    title: "Custom Web Development",
    icon: <FaCode className="text-indigo-400 text-5xl" />,
    description:
      "HTML, CSS, JavaScript, responsive websites, custom coding solutions for modern web applications.",
    gradient: "from-indigo-500/20 to-purple-500/20",
    hoverGradient: "from-indigo-500/30 to-purple-500/30",
    category: "Development",
    features: [
      "Responsive Web Design",
      "Custom JavaScript Development",
      "Performance Optimization",
      "Cross-Browser Compatibility",
      "Modern Framework Integration",
      "API Development & Integration",
    ],
    benefits: [
      "Fast loading websites",
      "Mobile-first approach",
      "SEO-friendly structure",
      "Scalable architecture",
      "24/7 support",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    id: "shopify-development",
    title: "Shopify Development",
    icon: <FaShopify className="text-green-400 text-5xl" />,
    description:
      "Store setup, theme customization, app integration, e-commerce optimization for Shopify platforms.",
    gradient: "from-green-500/20 to-emerald-500/20",
    hoverGradient: "from-green-500/30 to-emerald-500/30",
    category: "Development",
    features: [
      "Custom Shopify Themes",
      "Payment Gateway Integration",
      "Inventory Management",
      "Mobile Commerce Optimization",
      "Third-party App Integration",
      "Store Migration Services",
    ],
    benefits: [
      "Increased conversion rates",
      "Better user experience",
      "Mobile-optimized stores",
      "Secure payment processing",
      "Ongoing maintenance",
    ],
    technologies: [
      "Shopify Liquid",
      "HTML/CSS",
      "JavaScript",
      "Shopify API",
      "Payment Gateways",
    ],
  },
  {
    id: "3d-product-design",
    title: "3D Product Design",
    icon: <FaCube className="text-pink-400 text-5xl" />,
    description:
      "Product visualization, 3D modeling, rendering for marketing with professional Blender expertise.",
    gradient: "from-pink-500/20 to-rose-500/20",
    hoverGradient: "from-pink-500/30 to-rose-500/30",
    category: "Design",
    features: [
      "3D Product Modeling",
      "Photorealistic Rendering",
      "Animation & Motion Graphics",
      "AR/VR Compatibility",
      "Multiple File Formats",
      "Interactive 3D Experiences",
    ],
    benefits: [
      "Stunning product visuals",
      "Reduced photography costs",
      "Enhanced marketing materials",
      "Virtual product showcase",
      "Interactive presentations",
    ],
    technologies: [
      "Blender",
      "3ds Max",
      "Cinema 4D",
      "Unity",
      "WebGL",
      "Three.js",
    ],
  },
  {
    id: "seo-performance",
    title: "SEO & Performance",
    icon: <FaSearch className="text-yellow-400 text-5xl" />,
    description:
      "Technical SEO, keyword research, site speed optimization to boost your search rankings.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    hoverGradient: "from-yellow-500/30 to-orange-500/30",
    category: "Marketing",
    features: [
      "Keyword Research & Analysis",
      "On-page SEO Optimization",
      "Technical SEO Audit",
      "Site Speed Optimization",
      "Content Strategy",
      "Local SEO Services",
    ],
    benefits: [
      "Higher search rankings",
      "Increased organic traffic",
      "Better user experience",
      "Improved conversion rates",
      "Monthly reporting",
    ],
    technologies: [
      "Google Analytics",
      "Search Console",
      "SEMrush",
      "Ahrefs",
      "GTMetrix",
      "PageSpeed Insights",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    icon: <FaBullhorn className="text-blue-400 text-5xl" />,
    description:
      "Content creation, community management, organic growth strategies across all platforms.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    hoverGradient: "from-blue-500/30 to-cyan-500/30",
    category: "Marketing",
    features: [
      "Content Creation & Curation",
      "Community Management",
      "Social Media Strategy",
      "Influencer Collaborations",
      "Analytics & Reporting",
      "Paid Social Campaigns",
    ],
    benefits: [
      "Increased brand awareness",
      "Higher engagement rates",
      "Growing follower base",
      "Better customer relationships",
      "Consistent brand voice",
    ],
    technologies: [
      "Facebook",
      "Instagram",
      "Twitter",
      "LinkedIn",
      "TikTok",
      "Pinterest",
    ],
  },
  {
    id: "meta-ads",
    title: "Meta Ads Campaign",
    icon: <FaVideo className="text-red-400 text-5xl" />,
    description:
      "Facebook & Instagram advertising, audience targeting, campaign optimization for maximum ROI.",
    gradient: "from-red-500/20 to-pink-500/20",
    hoverGradient: "from-red-500/30 to-pink-500/30",
    category: "Advertising",
    features: [
      "Campaign Strategy & Setup",
      "Advanced Audience Targeting",
      "Creative Development",
      "A/B Testing",
      "Performance Optimization",
      "Detailed Reporting",
    ],
    benefits: [
      "Higher ROI on ad spend",
      "Precise audience targeting",
      "Increased conversions",
      "Brand visibility boost",
      "Cost-effective advertising",
    ],
    technologies: [
      "Meta Ads Manager",
      "Facebook Pixel",
      "Audience Insights",
      "Creative Hub",
      "Analytics",
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads Management",
    icon: <FaGoogle className="text-purple-400 text-5xl" />,
    description:
      "Search, display, shopping campaigns, PPC optimization for Google advertising platforms.",
    gradient: "from-purple-500/20 to-violet-500/20",
    hoverGradient: "from-purple-500/30 to-violet-500/30",
    category: "Advertising",
    features: [
      "Search Campaign Management",
      "Display Network Advertising",
      "Shopping Campaigns",
      "YouTube Advertising",
      "Conversion Tracking",
      "Bid Strategy Optimization",
    ],
    benefits: [
      "Immediate visibility",
      "Targeted traffic",
      "Measurable results",
      "Cost control",
      "Quick ROI",
    ],
    technologies: [
      "Google Ads",
      "Google Analytics",
      "Google Merchant Center",
      "Keyword Planner",
      "Tag Manager",
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    icon: <FaPenNib className="text-emerald-400 text-5xl" />,
    description:
      "Blog writing, copywriting, video content, social media posts that engage and convert.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    hoverGradient: "from-emerald-500/30 to-teal-500/30",
    category: "Content",
    features: [
      "Blog Writing & SEO Content",
      "Copywriting & Sales Pages",
      "Video Content Creation",
      "Social Media Content",
      "Email Content",
      "Brand Storytelling",
    ],
    benefits: [
      "Engaging content strategy",
      "Improved search rankings",
      "Higher conversion rates",
      "Consistent brand messaging",
      "Quality content calendar",
    ],
    technologies: [
      "WordPress",
      "Canva",
      "Adobe Creative Suite",
      "Grammarly",
      "BuzzSumo",
      "CoSchedule",
    ],
  },
  {
    id: "logo-design",
    title: "Logo & Brand Design",
    icon: <FaPalette className="text-orange-400 text-5xl" />,
    description:
      "Logo creation, brand identity, visual branding packages for memorable brand presence.",
    gradient: "from-orange-500/20 to-red-500/20",
    hoverGradient: "from-orange-500/30 to-red-500/30",
    category: "Design",
    features: [
      "Custom Logo Design",
      "Brand Identity Development",
      "Color Palette Creation",
      "Typography Selection",
      "Brand Guidelines",
      "Marketing Materials",
    ],
    benefits: [
      "Professional brand image",
      "Memorable visual identity",
      "Consistent branding",
      "Market differentiation",
      "Brand recognition",
    ],
    technologies: [
      "Adobe Illustrator",
      "Photoshop",
      "Figma",
      "Sketch",
      "InDesign",
      "Brand Guidelines",
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    icon: <FaEnvelope className="text-cyan-400 text-5xl" />,
    description:
      "Campaign setup, drip sequences, newsletter management for automated customer engagement.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    hoverGradient: "from-cyan-500/30 to-blue-500/30",
    category: "Marketing",
    features: [
      "Email Campaign Design",
      "Automation Workflows",
      "List Management",
      "A/B Testing",
      "Performance Analytics",
      "Newsletter Creation",
    ],
    benefits: [
      "Direct customer communication",
      "High ROI marketing channel",
      "Automated nurturing",
      "Increased customer retention",
      "Personalized messaging",
    ],
    technologies: [
      "Mailchimp",
      "ConvertKit",
      "ActiveCampaign",
      "Klaviyo",
      "AWeber",
      "GetResponse",
    ],
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    icon: <FaChartLine className="text-lime-400 text-5xl" />,
    description:
      "Performance tracking, ROI analysis, custom dashboards for data-driven decision making.",
    gradient: "from-lime-500/20 to-green-500/20",
    hoverGradient: "from-lime-500/30 to-green-500/30",
    category: "Analytics",
    features: [
      "Custom Dashboard Creation",
      "Performance Tracking",
      "ROI Analysis",
      "Conversion Tracking",
      "Automated Reporting",
      "Data Visualization",
    ],
    benefits: [
      "Data-driven decisions",
      "Clear performance insights",
      "ROI optimization",
      "Automated reporting",
      "Strategic recommendations",
    ],
    technologies: [
      "Google Analytics",
      "Data Studio",
      "Power BI",
      "Tableau",
      "Hotjar",
      "Mixpanel",
    ],
  },
  {
    id: "digital-strategy",
    title: "Digital Marketing Strategy",
    icon: <FaRobot className="text-violet-400 text-5xl" />,
    description:
      "Comprehensive marketing plans, competitor analysis, consulting for business growth.",
    gradient: "from-violet-500/20 to-purple-500/20",
    hoverGradient: "from-violet-500/30 to-purple-500/30",
    category: "Strategy",
    features: [
      "Digital Strategy Development",
      "Competitor Analysis",
      "Market Research",
      "Campaign Planning",
      "Budget Optimization",
      "Growth Consulting",
    ],
    benefits: [
      "Clear strategic direction",
      "Competitive advantage",
      "Optimized marketing spend",
      "Accelerated growth",
      "Expert guidance",
    ],
    technologies: [
      "SEMrush",
      "Ahrefs",
      "SimilarWeb",
      "BuzzSumo",
      "Google Trends",
      "Analytics Platforms",
    ],
  },
];

const categories = [
  "All",
  "Development",
  "Marketing",
  "Advertising",
  "Design",
  "Content",
  "Analytics",
  "Strategy",
];

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Individual Service Detail Component (within same file)
const ServiceDetail = ({ service, onBack }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen py-20 px-6 relative overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background elements */}
      <motion.div
        className={`absolute top-20 left-10 w-96 h-96 bg-gradient-to-r ${service.gradient} rounded-full blur-3xl`}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft />
          Back to Services
        </motion.button>

        {/* Service Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {service.icon}
          </motion.div>

          <span className="inline-block text-sm font-medium text-gray-400 mb-4 tracking-wider uppercase">
            {service.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {service.title}
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300 border border-gray-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Service Features & Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
              What We Include
            </h2>
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    x: 5,
                    backgroundColor: "rgba(55, 65, 81, 0.5)",
                  }}
                >
                  <FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
              Benefits You Get
            </h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-800/30 to-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-700/50"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    x: -5,
                    backgroundColor: "rgba(55, 65, 81, 0.5)",
                  }}
                >
                  <FaStar className="text-yellow-400 text-xl flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "We analyze your needs and create a strategic plan",
              },
              {
                step: "02",
                title: "Implementation",
                desc: "Execute the plan with precision and attention to detail",
              },
              {
                step: "03",
                title: "Optimization",
                desc: "Monitor, test, and continuously improve performance",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient.replace(
                    "/20",
                    ""
                  )} rounded-full text-2xl font-bold mb-4`}
                >
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {process.title}
                </h3>
                <p className="text-gray-300">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} can help grow
            your business.
          </p>
          <motion.button
            className={`px-12 py-4 bg-gradient-to-r ${service.gradient.replace(
              "/20",
              ""
            )} text-white font-semibold text-lg rounded-full shadow-2xl transition-all duration-300 mr-4`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <FaArrowRight className="inline ml-2" />
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold text-lg rounded-full hover:bg-gray-800/30 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Services Component
export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((service) => service.category === selectedCategory);

  // If a service is selected, show the detail view
  if (selectedService) {
    return (
      <ServiceDetail
        service={selectedService}
        onBack={() => setSelectedService(null)}
      />
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

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block text-lg font-medium text-indigo-400 mb-4 tracking-wider uppercase"
            animate={floatingAnimation}
          >
            What We Offer
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Digital Marketing
            <br />
            <span className="text-indigo-400">Services</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your business with our comprehensive digital marketing
            solutions designed to drive growth and engagement.
          </motion.p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-indigo-500 text-white shadow-lg"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            className={`group relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 cursor-pointer overflow-hidden`}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.215, 0.61, 0.355, 1.0],
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            onClick={() => setSelectedService(service)}
          >
            {/* Hover gradient overlay */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}
            />

            <div className="relative z-10">
              {/* Category Badge */}
              <div className="flex justify-between items-center mb-6">
                <span className="px-3 py-1 bg-gray-800/50 rounded-full text-xs font-medium text-gray-300">
                  {service.category}
                </span>
                <FaArrowRight className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Icon */}
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {service.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-4"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {service.description}
              </motion.p>

              {/* Learn More Text */}
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  Learn More <FaArrowRight className="text-xs" />
                </span>
              </div>

              {/* Animated accent line */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${service.gradient.replace(
                  "/20",
                  ""
                )} mt-6 rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.button
          className="px-12 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Today
        </motion.button>
      </motion.div>
    </div>
  );
}
