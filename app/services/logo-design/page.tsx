"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Home,
  Briefcase,
  Target,
  Palette,
  Lightbulb,
  TrendingUp,
  Users,
  Award,
  MessageCircle,
  ShoppingBag,
  Utensils,
  Laptop,
  Heart,
} from "lucide-react";

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function LogoDesignPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [controls, isInView]);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "process", label: "Process" },
    { id: "industries", label: "Industries" },
    { id: "case-studies", label: "Case Studies" },
    { id: "faq", label: "FAQ" },
    { id: "services", label: "Services" },
    { id: "insights", label: "Insights" },
  ];

  const processSteps = [
    {
      title: "Discover",
      description:
        "We begin by understanding your brand, values, target audience, and competitive landscape to establish a strong foundation.",
    },
    {
      title: "Research",
      description:
        "Our team conducts comprehensive market research and competitor analysis to identify opportunities and trends.",
    },
    {
      title: "Brainstorm",
      description:
        "Creative brainstorming sessions generate multiple concepts and directions for your logo design.",
    },
    {
      title: "Sketch",
      description:
        "Initial sketches and wireframes are created to visualize the concepts and explore different design directions.",
    },
    {
      title: "Design",
      description:
        "Selected concepts are developed into polished digital designs with color variations and typography exploration.",
    },
    {
      title: "Present",
      description:
        "We present the refined logo designs with detailed explanations of the creative rationale behind each option.",
    },
    {
      title: "Deliver",
      description:
        "Final logo files are delivered in all necessary formats along with comprehensive brand guidelines.",
    },
  ];

  const industries = [
    {
      title: "Retail",
      icon: ShoppingBag,
      description:
        "Creating memorable retail brand identities that drive customer loyalty and recognition.",
    },
    {
      title: "Food",
      icon: Utensils,
      description:
        "Designing appetizing logos for food businesses that capture taste and quality.",
    },
    {
      title: "Information Technology",
      icon: Laptop,
      description:
        "Developing tech-forward logos that communicate innovation and reliability.",
    },
    {
      title: "Healthcare",
      icon: Heart,
      description:
        "Creating trustworthy healthcare logos that convey care and professionalism.",
    },
  ];

  const caseStudies = [
    {
      title: "Global Tech Brand",
      description:
        "Complete brand identity redesign for a leading technology company, resulting in 40% increase in brand recognition.",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Food Chain Revolution",
      description:
        "Logo and brand identity for a fast-growing restaurant chain, helping them expand to 50+ locations.",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Healthcare Innovation",
      description:
        "Modern logo design for a healthcare startup that secured $10M in funding after rebranding.",
      image: "/api/placeholder/400/300",
    },
  ];

  const faqs = [
    {
      question: "How much time is needed to develop a logo?",
      answer:
        "Typically, the logo design process takes 2-4 weeks from initial discovery to final delivery. This timeline can vary based on project complexity and client feedback cycles.",
    },
    {
      question: "What's included in the package for logo design?",
      answer:
        "Our logo design package includes initial concepts, revisions, final logo files in multiple formats (AI, EPS, PNG, JPG, SVG), brand guidelines, color palette, typography recommendations, and usage guidelines.",
    },
    {
      question: "What kinds of logos are powerful?",
      answer:
        "Powerful logos are simple, memorable, timeless, versatile, and appropriate for the brand. They work well in all sizes and applications, from business cards to billboards, and effectively communicate the brand's essence.",
    },
  ];

  const relatedServices = [
    { title: "Brand Consulting", icon: Target },
    { title: "Brand Collateral", icon: Briefcase },
    { title: "Graphic Design", icon: Palette },
    { title: "Social Media Management", icon: MessageCircle },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar variant="black" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Logo Design
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creating distinctive, memorable logos that capture your brand
            essence and make a lasting impression on your audience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors group"
            >
              Let's talk
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Breadcrumb */}
          <motion.div
            className="flex items-center justify-center text-gray-300 mt-16 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/"
              className="hover:text-white transition-colors flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/services/branding"
              className="hover:text-white transition-colors"
            >
              Branding
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Logo Design</span>
          </motion.div>
        </div>
      </section>

      {/* Sub Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-white text-white"
                    : "border-transparent text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We design logos that tell your story and connect with your
              audience
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Brand Strategy</h3>
              <p className="text-gray-300">
                We develop comprehensive brand strategies that define your
                unique position in the market and guide all design decisions.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visual Identity</h3>
              <p className="text-gray-300">
                Creating cohesive visual identities that communicate your brand
                values and resonate with your target audience.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Creative Concepts</h3>
              <p className="text-gray-300">
                Developing innovative creative concepts that bring your brand to
                life and set you apart from the competition.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-300">
              A systematic approach to creating exceptional logos
            </p>
          </motion.div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  {openAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300">{step.description}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries Section */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Related Industries
            </h2>
            <p className="text-xl text-gray-300">
              We serve diverse industries with specialized logo design solutions
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{industry.title}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h2>
            <p className="text-xl text-gray-300">
              Success stories from our logo design projects
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-300">{study.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              View all works
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our logo design services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Related Services
            </h2>
            <p className="text-xl text-gray-300">
              Explore our other branding and design services
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insights Section */}
      <section
        id="insights"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300">
              Trends and tips in logo design and branding
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">
                Logo Design Trends 2024
              </h3>
              <p className="text-gray-300 mb-4">
                Discover the latest trends shaping the world of logo design this
                year.
              </p>
              <Link
                href="#"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Read more →
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">
                Color Psychology in Branding
              </h3>
              <p className="text-gray-300 mb-4">
                How colors influence brand perception and customer behavior.
              </p>
              <Link
                href="#"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Read more →
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Minimalist Logo Design</h3>
              <p className="text-gray-300 mb-4">
                Why less is more in modern logo design and brand identity.
              </p>
              <Link
                href="#"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Read more →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-gray-300">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          >
            <motion.div variants={item} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4">700+</div>
              <p className="text-xl text-gray-300">Projects</p>
            </motion.div>

            <motion.div variants={item} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4">10M</div>
              <p className="text-xl text-gray-300">Daily Engagement</p>
            </motion.div>

            <motion.div variants={item} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4">100+</div>
              <p className="text-xl text-gray-300">
                Digital transformation stories
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Link
              href="/impact"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Our Impact
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
