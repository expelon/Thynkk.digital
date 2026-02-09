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
  Share2,
  Users,
  TrendingUp,
  MessageCircle,
  Heart,
  Video,
  Image,
  Zap,
  BarChart,
  Settings,
  Megaphone,
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

export default function SocialMediaPage() {
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
    { title: "Strategy Development", description: "Creating comprehensive social media strategies aligned with your business goals, target audience, and brand voice." },
    { title: "Content Planning", description: "Developing content calendars and creative concepts that engage your audience and drive meaningful interactions." },
    { title: "Creative Production", description: "Producing high-quality visuals, videos, and copy that capture attention and communicate your brand message effectively." },
    { title: "Community Management", description: "Managing daily interactions, responding to comments, and building a loyal community around your brand." },
    { title: "Paid Social Campaigns", description: "Launching and optimizing targeted paid campaigns to expand reach and achieve specific marketing objectives." },
    { title: "Analytics & Reporting", description: "Monitoring performance metrics, analyzing results, and providing detailed reports with actionable insights." },
    { title: "Optimization & Growth", description: "Continuously optimizing strategies based on data insights to maximize engagement and ROI." },
  ];

  const industries = [
    { title: "Fashion & Beauty", icon: Heart, description: "Building engaged communities for fashion and beauty brands through stunning visuals and authentic storytelling." },
    { title: "Food & Beverage", icon: Image, description: "Creating mouth-watering content and engaging campaigns for restaurants, cafes, and food brands." },
    { title: "Technology", icon: Zap, description: "Developing thought leadership content and community engagement strategies for tech companies and startups." },
    { title: "Entertainment", icon: Video, description: "Creating viral content and managing fan communities for entertainment brands and media companies." },
  ];

  const caseStudies = [
    {
      title: "Fashion Brand Social Media Success",
      description: "Complete social media management for fashion brand, achieving 500% increase in engagement and 300% growth in followers within 6 months.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Restaurant Chain Viral Campaign",
      description: "Social media campaign for restaurant chain that went viral, generating 2M+ impressions and 40% increase in foot traffic.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Tech Startup Community Building",
      description: "Community management strategy for tech startup, building a 50K+ engaged community and increasing product signups by 200%.",
      image: "/api/placeholder/400/300"
    },
  ];

  const faqs = [
    {
      question: "Which social media platforms should my business be on?",
      answer: "The best platforms depend on your target audience and business goals. We analyze your audience demographics and recommend the most effective platforms for your specific needs."
    },
    {
      question: "How often should I post on social media?",
      answer: "Posting frequency varies by platform and audience. We typically recommend 3-5 posts per week for most platforms, with daily stories for platforms like Instagram and Facebook."
    },
    {
      question: "Can you help with social media advertising?",
      answer: "Yes, we specialize in paid social media campaigns across all major platforms, including Facebook, Instagram, LinkedIn, Twitter, and TikTok, with detailed targeting and optimization."
    },
  ];

  const relatedServices = [
    { title: "Content Marketing", icon: MessageCircle },
    { title: "Marketing", icon: BarChart },
    { title: "SEO & Content", icon: Target },
    { title: "Brand Strategy", icon: Megaphone },
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
            Social Media
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building vibrant social communities and creating compelling content that drives engagement, growth, and brand love.
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
            <Link href="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Social Media</span>
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
              We create social media experiences that connect, engage, and convert
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
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategy & Planning</h3>
              <p className="text-gray-300">
                Developing comprehensive social media strategies that align with your business goals and resonate with your target audience.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Creation</h3>
              <p className="text-gray-300">
                Producing compelling visuals, videos, and copy that capture attention and drive meaningful engagement.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Management</h3>
              <p className="text-gray-300">
                Building and nurturing engaged communities around your brand through authentic interactions and relationship building.
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
              A strategic approach to social media excellence
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
              We serve diverse industries with specialized social media expertise
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
              Success stories from our social media campaigns
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
              Common questions about our social media services
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
              Explore our other digital marketing services
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
              Trends and tips in social media marketing
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
              <h3 className="text-xl font-bold mb-4">Social Media Trends 2024</h3>
              <p className="text-gray-300 mb-4">Discover the latest social media trends and platform updates that are shaping digital marketing strategies.</p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">Read more →</Link>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Content Creation Tips</h3>
              <p className="text-gray-300 mb-4">Essential tips and best practices for creating engaging social media content that drives results.</p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">Read more →</Link>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Community Building Strategies</h3>
              <p className="text-gray-300 mb-4">How to build and nurture engaged online communities that support your brand and drive loyalty.</p>
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
              <div className="text-5xl md:text-6xl font-bold mb-4">10M+</div>
              <p className="text-xl text-gray-300">Social Media Impressions</p>
            </motion.div>

            <motion.div
              variants={item}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">500%</div>
              <p className="text-xl text-gray-300">Average Engagement Growth</p>
            </motion.div>

            <motion.div
              variants={item}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">100K+</div>
              <p className="text-xl text-gray-300">Community Members Built</p>
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
