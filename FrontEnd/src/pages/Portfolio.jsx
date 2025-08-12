import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaShopify,
  FaCube,
  FaSearch,
  FaBullhorn,
  FaVideo,
  FaPalette,
  FaEnvelope,
  FaChartLine,
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaArrowRight,
  FaPlay,
  FaStar,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

// Enhanced project data with detailed information
const projects = [
  {
    id: 1,
    title: "E-commerce Shopify Store",
    category: "Shopify Development",
    description:
      "Complete Shopify store development with custom theme and advanced functionality.",
    shortDesc: "Custom Shopify store with 180% conversion rate increase",
    image: "/images/shopify-store.jpg",
    technologies: ["Shopify Liquid", "JavaScript", "CSS3", "Shopify API"],
    client: "Fashion Retailer",
    duration: "6 weeks",
    year: "2024",
    metrics: {
      conversion: "+180%",
      revenue: "+250%",
      pageSpeed: "95/100",
      mobileScore: "98/100",
    },
    features: [
      "Custom responsive theme design",
      "Advanced product filtering",
      "One-click checkout optimization",
      "Multi-currency support",
      "Inventory management integration",
      "SEO optimization",
    ],
    testimonial: {
      text: "The team delivered an exceptional Shopify store that exceeded our expectations. Our sales increased by 250% in the first month!",
      author: "Sarah Johnson",
      position: "CEO, Fashion Forward",
    },
    liveUrl: "https://example-store.com",
    caseStudyUrl: "#",
    videoUrl: "#",
  },
  {
    id: 2,
    title: "3D Product Visualization",
    category: "3D Design",
    description:
      "Interactive 3D product models for enhanced customer experience and marketing.",
    shortDesc: "Photorealistic 3D models reducing return rates by 40%",
    image: "/images/3d-product.jpg",
    technologies: ["Blender", "Three.js", "WebGL", "React"],
    client: "Electronics Brand",
    duration: "4 weeks",
    year: "2024",
    metrics: {
      engagement: "+300%",
      returns: "-40%",
      timeOnPage: "+150%",
      conversions: "+85%",
    },
    features: [
      "360° product rotation",
      "Zoom and inspect functionality",
      "Multiple color variations",
      "AR preview capability",
      "Mobile-optimized rendering",
      "Fast loading optimization",
    ],
    testimonial: {
      text: "The 3D visualizations transformed how customers interact with our products. Return rates dropped significantly!",
      author: "Mike Chen",
      position: "Product Manager, TechGear",
    },
    liveUrl: "https://example-3d.com",
    caseStudyUrl: "#",
    videoUrl: "#",
  },
  {
    id: 3,
    title: "Social Media Growth Campaign",
    category: "Social Media Marketing",
    description:
      "Comprehensive social media strategy resulting in massive engagement growth.",
    shortDesc: "250% engagement increase through targeted social campaigns",
    image: "/images/social-media.jpg",
    technologies: ["Meta Ads", "Instagram", "Facebook", "Analytics"],
    client: "Lifestyle Brand",
    duration: "3 months",
    year: "2024",
    metrics: {
      engagement: "+250%",
      followers: "+400%",
      reach: "+180%",
      roi: "320%",
    },
    features: [
      "Content strategy development",
      "Influencer partnerships",
      "Paid advertising campaigns",
      "Community management",
      "Performance analytics",
      "Brand voice development",
    ],
    testimonial: {
      text: "Our social media presence transformed completely. We went from 5K to 25K followers in just 3 months!",
      author: "Emma Wilson",
      position: "Marketing Director, LifeStyle Co",
    },
    liveUrl: "https://instagram.com/example",
    caseStudyUrl: "#",
    videoUrl: "#",
  },
  {
    id: 4,
    title: "SEO Optimization Success",
    category: "SEO & Performance",
    description:
      "Complete SEO overhaul achieving first-page rankings for competitive keywords.",
    shortDesc: "First-page Google rankings for 15+ competitive keywords",
    image: "/images/seo.jpg",
    technologies: [
      "Google Analytics",
      "Search Console",
      "SEMrush",
      "Technical SEO",
    ],
    client: "Local Business",
    duration: "4 months",
    year: "2024",
    metrics: {
      rankings: "Page 1",
      traffic: "+320%",
      leads: "+180%",
      pageSpeed: "+65%",
    },
    features: [
      "Complete technical SEO audit",
      "Keyword research & optimization",
      "Content strategy implementation",
      "Local SEO optimization",
      "Site speed improvements",
      "Monthly performance reports",
    ],
    testimonial: {
      text: "We went from page 5 to page 1 for our main keywords. Our organic traffic tripled in 4 months!",
      author: "David Rodriguez",
      position: "Owner, Local Services Pro",
    },
    liveUrl: "https://example-seo.com",
    caseStudyUrl: "#",
    videoUrl: "#",
  },
  {
    id: 5,
    title: "Custom Web Application",
    category: "Web Development",
    description:
      "Modern responsive web application with advanced functionality and user experience.",
    shortDesc:
      "Full-stack web app with 99.9% uptime and lightning-fast performance",
    image: "/images/web-app.jpg",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    client: "Tech Startup",
    duration: "8 weeks",
    year: "2024",
    metrics: {
      uptime: "99.9%",
      pageSpeed: "98/100",
      users: "10K+",
      satisfaction: "4.9/5",
    },
    features: [
      "Responsive design system",
      "Real-time data updates",
      "User authentication",
      "Advanced search functionality",
      "API integrations",
      "Performance optimization",
    ],
    testimonial: {
      text: "The web application exceeded all our requirements. It's fast, reliable, and our users love it!",
      author: "Lisa Park",
      position: "CTO, InnovateNow",
    },
    liveUrl: "https://example-app.com",
    caseStudyUrl: "#",
    videoUrl: "#",
  },
  {
    id: 6,
    title: "Brand Identity Design",
    category: "Brand Design",
    description:
      "Complete brand identity package including logo, guidelines, and marketing materials.",
    shortDesc:
      "Complete rebrand resulting in 60% increase in brand recognition",
    image: "/images/branding.jpg",
    technologies: [
      "Adobe Illustrator",
      "Photoshop",
      "Figma",
      "Brand Guidelines",
    ],
    client: "Restaurant Chain",
    duration: "5 weeks",
    year: "2024",
    metrics: {
      recognition: "+60%",
      engagement: "+45%",
      sales: "+35%",
      satisfaction: "4.8/5",
    },
    features: [
      "Logo design & variations",
      "Brand color palette",
      "Typography system",
      "Marketing materials",
      "Brand guidelines document",
      "Digital asset library",
    ],
    testimonial: {
      text: "The new brand identity perfectly captures our essence. Customer recognition has increased dramatically!",
      author: "Carlos Martinez",
      position: "Owner, Taste Buds Restaurant",
    },
    liveUrl: "https://example-brand.com",
    caseStudyUrl: "#",
    videoUrl: "#",
  },
  {
    id: 7,
    title: "Email Marketing Automation",
    category: "Email Marketing",
    description:
      "Advanced email marketing campaigns with automation and personalization.",
    shortDesc:
      "Email automation boosting open rates by 40% and conversions by 25%",
    image: "/images/email-marketing.jpg",
    technologies: ["Mailchimp", "Klaviyo", "Automation", "Analytics"],
    client: "E-commerce Store",
    duration: "6 weeks",
    year: "2024",
    metrics: {
      openRate: "+40%",
      conversions: "+25%",
      revenue: "$50K+",
      unsubscribe: "-15%",
    },
    features: [
      "Welcome email series",
      "Abandoned cart recovery",
      "Personalized recommendations",
      "Segmentation strategy",
      "A/B testing campaigns",
      "Performance analytics",
    ],
    testimonial: {
      text: "Our email marketing ROI improved by 300%. The automation saves us hours while generating more revenue!",
      author: "Jennifer Lee",
      position: "Marketing Manager, Style Hub",
    },
    liveUrl: "https://example-email.com",
    caseStudyUrl: "#",
    videoUrl: "#",
  },
  {
    id: 8,
    title: "Google Ads Campaign",
    category: "Google Ads",
    description:
      "High-converting Google Ads campaigns with optimized targeting and messaging.",
    shortDesc: "Google Ads generating 400% ROI with precision targeting",
    image: "/images/google-ads.jpg",
    technologies: [
      "Google Ads",
      "Analytics",
      "Conversion Tracking",
      "Optimization",
    ],
    client: "Service Business",
    duration: "3 months",
    year: "2024",
    metrics: {
      roi: "400%",
      ctr: "+65%",
      conversions: "+180%",
      cpc: "-30%",
    },
    features: [
      "Keyword research & selection",
      "Ad copy optimization",
      "Landing page alignment",
      "Conversion tracking setup",
      "Bid strategy optimization",
      "Regular performance reports",
    ],
    testimonial: {
      text: "The Google Ads campaign generated more qualified leads than we ever imagined. ROI is incredible!",
      author: "Robert Kim",
      position: "Director, Professional Services Inc",
    },
    liveUrl: "https://example-ads.com",
    caseStudyUrl: "#",
    videoUrl: "#",
  },
];

const categories = [
  "All Projects",
  "Web Development",
  "Shopify Development",
  "3D Design",
  "SEO & Performance",
  "Social Media Marketing",
  "Brand Design",
  "Email Marketing",
  "Google Ads",
];

const categoryIcons = {
  "Web Development": <FaCode />,
  "Shopify Development": <FaShopify />,
  "3D Design": <FaCube />,
  "SEO & Performance": <FaSearch />,
  "Social Media Marketing": <FaBullhorn />,
  "Brand Design": <FaPalette />,
  "Email Marketing": <FaEnvelope />,
  "Google Ads": <FaChartLine />,
};

// Project Detail Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project || !isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-all duration-300"
            >
              <FaTimes size={20} />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-indigo-500 text-white text-sm rounded-full mb-2">
                {project.category}
              </span>
              <h2 className="text-3xl font-bold text-white mb-2">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="p-8">
            {/* Project Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <FaUser className="text-indigo-400" />
                <div>
                  <p className="text-gray-400 text-sm">Client</p>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-indigo-400" />
                <div>
                  <p className="text-gray-400 text-sm">Duration</p>
                  <p className="text-white font-medium">{project.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaStar className="text-indigo-400" />
                <div>
                  <p className="text-gray-400 text-sm">Year</p>
                  <p className="text-white font-medium">{project.year}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Project Overview
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Key Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-800/50 rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-indigo-400 mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-8 bg-gray-800/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Client Testimonial
              </h3>
              <blockquote className="text-gray-300 italic mb-4">
                "{project.testimonial.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">
                    {project.testimonial.author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {project.testimonial.position}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-full font-medium hover:bg-indigo-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt />
                View Live Project
              </motion.a>
              <motion.a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-full font-medium hover:bg-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowRight />
                Full Case Study
              </motion.a>
              {project.videoUrl && (
                <motion.a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay />
                  Watch Demo
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main Portfolio Component
function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Our Work
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Project
            <br />
            <span className="text-indigo-400">Portfolio</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our recent digital marketing projects and success stories.
            Each project showcases our expertise and the results we deliver.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white backdrop-blur-sm"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category !== "All Projects" && categoryIcons[category]}
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.215, 0.61, 0.355, 1.0],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                onClick={() => openProjectModal(project)}
                layout
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                      {categoryIcons[project.category]}
                      {project.category}
                    </span>
                  </div>

                  {/* View Project Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-indigo-500 text-white p-3 rounded-full">
                      <FaExternalLinkAlt size={16} />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-400 border border-gray-700/50">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Key Metric */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <FaCalendarAlt className="text-indigo-400" />
                      <span className="text-gray-400">{project.year}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-indigo-400">
                        {Object.values(project.metrics)[0]}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {Object.keys(project.metrics)[0]}
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="flex items-center gap-2 mt-4 text-sm text-gray-400 group-hover:text-indigo-400 transition-colors duration-300">
                    <span>View Details</span>
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "300%", label: "Average ROI" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss
            your next project.
          </p>
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <FaArrowRight className="inline ml-2" />
          </motion.button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  );
}

export default Portfolio;
