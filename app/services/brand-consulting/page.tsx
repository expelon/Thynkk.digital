"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Home,
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  BarChart,
  Zap,
  Settings,
  Globe,
  Award,
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

export default function BrandConsultingPage() {
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
    { title: "Brand Discovery & Research", description: "Conducting comprehensive market research, competitor analysis, and stakeholder interviews to understand your brand's current position and opportunities." },
    { title: "Brand Strategy Development", description: "Creating a robust brand strategy that defines your positioning, value proposition, and unique differentiators in the marketplace." },
    { title: "Brand Architecture & Naming", description: "Developing brand architecture, naming conventions, and taxonomy that support your business growth and market expansion." },
    { title: "Visual Identity Design", description: "Creating compelling visual identities including logos, color systems, typography, and design guidelines that reflect your brand essence." },
    { title: "Brand Guidelines & Systems", description: "Establishing comprehensive brand guidelines and systems to ensure consistency across all touchpoints and channels." },
    { title: "Implementation & Rollout", description: "Managing the implementation of your new brand across all channels, including internal training and external communication." },
    { title: "Brand Monitoring & Evolution", description: "Continuously monitoring brand performance and evolving the brand strategy to stay relevant in changing markets." },
  ];

  const industries = [
    { title: "Technology", icon: Zap, description: "Helping tech companies establish strong brand identities that resonate with users and differentiate in crowded markets." },
    { title: "Healthcare", icon: Users, description: "Building trustworthy healthcare brands that communicate expertise, compassion, and innovation to patients and professionals." },
    { title: "Finance", icon: BarChart, description: "Creating financial brands that convey stability, trust, and modernity to attract and retain customers." },
    { title: "Consumer Goods", icon: Globe, description: "Developing consumer brands that connect emotionally with customers and drive preference and loyalty." },
  ];

  const caseStudies = [
    {
      title: "Tech Startup Brand Transformation",
      description: "Complete brand transformation for tech startup, resulting in 400% increase in brand recognition and 250% growth in customer acquisition.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Financial Services Rebrand",
      description: "Strategic rebrand for financial services company, improving customer trust scores by 60% and market share by 25%.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Healthcare Brand Launch",
      description: "New brand launch for healthcare provider, achieving 85% brand awareness in target market within 6 months.",
      image: "/api/placeholder/400/300"
    },
  ];

  const faqs = [
    {
      question: "How long does a typical branding project take?",
      answer: "Brand consulting projects typically take 8-12 weeks, depending on the scope and complexity. This includes research, strategy development, design, and implementation phases."
    },
    {
      question: "What's included in a brand strategy?",
      answer: "A comprehensive brand strategy includes market positioning, target audience analysis, competitive landscape, brand personality, voice and tone, messaging framework, and implementation roadmap."
    },
    {
      question: "Do you work with existing brands or only new ones?",
      answer: "We work with both established brands looking to evolve and new brands starting from scratch. Our approach is tailored to your specific needs and market context."
    },
  ];

  const relatedServices = [
    { title: "Logo Design", icon: Award },
    { title: "Graphic Design", icon: Lightbulb },
    { title: "Brand Strategy", icon: Target },
    { title: "Visual Identity", icon: Globe },
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
            Brand Consulting
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building powerful brands that resonate with audiences, drive business growth, and create lasting market impact.
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
            <Link href="/" className="hover:text-white transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <Link href="/services/branding" className="hover:text-white transition-colors">Branding</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Brand Consulting</span>
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
              We build brands that inspire, connect, and drive business success
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
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Brand Strategy</h3>
              <p className="text-gray-300">
                Developing comprehensive brand strategies that define your market position, target audience, and competitive advantage.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Market Positioning</h3>
              <p className="text-gray-300">
                Creating distinctive market positions that differentiate your brand and resonate with your ideal customers.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Brand Growth</h3>
              <p className="text-gray-300">
                Driving brand growth through strategic initiatives that increase awareness, loyalty, and market share.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
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
              A strategic approach to brand excellence
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Related Industries</h2>
            <p className="text-xl text-gray-300">
              We serve diverse industries with specialized brand expertise
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
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h2>
            <p className="text-xl text-gray-300">
              Success stories from our brand consulting projects
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Common questions about our brand consulting services
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
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Related Services</h2>
            <p className="text-xl text-gray-300">
              Explore our other branding services
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
      <section id="insights" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-300">
              Trends and tips in brand strategy and design
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
              <h3 className="text-xl font-bold mb-4">Brand Architecture Trends</h3>
              <p className="text-gray-300 mb-4">How modern brands are structuring their portfolios for growth and flexibility in changing markets.</p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">Read more →</Link>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Purpose-Driven Branding</h3>
              <p className="text-gray-300 mb-4">The importance of authentic purpose and values in building brands that resonate with modern consumers.</p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">Read more →</Link>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Digital Brand Transformation</h3>
              <p className="text-gray-300 mb-4">How traditional brands are successfully adapting their strategies for the digital-first world.</p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">Read more →</Link>
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
            <motion.div
              variants={item}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">150+</div>
              <p className="text-xl text-gray-300">Brands Transformed</p>
            </motion.div>

            <motion.div
              variants={item}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">85%</div>
              <p className="text-xl text-gray-300">Average Brand Recognition Increase</p>
            </motion.div>

            <motion.div
              variants={item}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">50+</div>
              <p className="text-xl text-gray-300">Industry Awards Won</p>
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
