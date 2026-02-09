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
  Search,
  FileText,
  TrendingUp,
  BarChart,
  Zap,
  Globe,
  Users,
  Settings,
  PenTool,
  Monitor,
  Hash,
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

export default function SEOContentPage() {
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
    { title: "SEO Audit & Analysis", description: "Conducting comprehensive SEO audits to analyze current performance, identify opportunities, and establish baseline metrics." },
    { title: "Keyword Research & Strategy", description: "Performing in-depth keyword research to identify high-value search terms and develop a strategic content roadmap." },
    { title: "Content Strategy Development", description: "Creating comprehensive content strategies that align with SEO goals and address user intent at every stage of the funnel." },
    { title: "On-Page SEO Optimization", description: "Optimizing website elements including meta tags, headers, content structure, and internal linking for maximum search visibility." },
    { title: "Content Creation & Optimization", description: "Producing high-quality, SEO-optimized content that ranks well and provides value to your target audience." },
    { title: "Technical SEO Implementation", description: "Addressing technical SEO factors including site speed, mobile optimization, schema markup, and crawlability issues." },
    { title: "Performance Monitoring & Reporting", description: "Continuously monitoring SEO performance, tracking key metrics, and providing detailed reports with actionable insights." },
  ];

  const industries = [
    { title: "E-commerce", icon: Monitor, description: "Driving organic traffic and sales for online stores through product optimization and category page SEO." },
    { title: "SaaS", icon: Zap, description: "Helping software companies rank for competitive keywords and generate qualified leads through content marketing." },
    { title: "Healthcare", icon: Users, description: "Improving online visibility for healthcare providers while ensuring compliance with industry regulations and best practices." },
    { title: "Local Business", icon: Globe, description: "Boosting local search presence for brick-and-mortar businesses through local SEO and location-based content strategies." },
  ];

  const caseStudies = [
    {
      title: "E-commerce SEO Success",
      description: "Complete SEO optimization for e-commerce site, resulting in 350% increase in organic traffic and 280% growth in online sales.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "SaaS Content Marketing",
      description: "Strategic content and SEO campaign for SaaS company, achieving 200% increase in organic leads and 150% growth in demo requests.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Local Business Dominance",
      description: "Local SEO strategy for multi-location business, achieving top 3 rankings for 80% of target keywords and 120% increase in foot traffic.",
      image: "/api/placeholder/400/300"
    },
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. Typically, you can see initial improvements in 3-4 months, with significant results appearing after 6-12 months of consistent effort."
    },
    {
      question: "What's the difference between on-page and off-page SEO?",
      answer: "On-page SEO involves optimizing elements on your website (content, meta tags, technical factors), while off-page SEO focuses on building authority through backlinks and external signals."
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer: "No reputable SEO agency can guarantee specific rankings. We focus on sustainable strategies that improve visibility, traffic, and conversions over time."
    },
  ];

  const relatedServices = [
    { title: "Social Media", icon: Hash },
    { title: "Marketing", icon: BarChart },
    { title: "Web Development", icon: Monitor },
    { title: "Content Marketing", icon: PenTool },
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
            SEO & Content
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Driving organic growth through strategic SEO optimization and compelling content that ranks and converts.
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
            <span className="text-white">SEO & Content</span>
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
              We optimize your digital presence for search engines and create content that drives results
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
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
              <p className="text-gray-300">
                Comprehensive SEO strategies that improve your search rankings and drive qualified organic traffic to your website.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Strategy</h3>
              <p className="text-gray-300">
                Developing data-driven content strategies that align with user intent and support your business objectives.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-gray-300">
                Tracking and analyzing SEO performance to continuously optimize strategies and maximize ROI.
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
              A strategic approach to SEO and content excellence
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
              We serve diverse industries with specialized SEO expertise
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
              Success stories from our SEO and content projects
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
              Common questions about our SEO and content services
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
              Trends and tips in SEO and content marketing
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
              <h3 className="text-xl font-bold mb-4">Google Algorithm Updates</h3>
              <p className="text-gray-300 mb-4">Latest Google algorithm changes and how to adapt your SEO strategy for better rankings and visibility.</p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">Read more →</Link>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Content Marketing Trends</h3>
              <p className="text-gray-300 mb-4">Emerging content marketing trends and strategies that drive engagement and improve search rankings.</p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">Read more →</Link>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Technical SEO Best Practices</h3>
              <p className="text-gray-300 mb-4">Essential technical SEO practices to improve site performance, user experience, and search engine visibility.</p>
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
              <div className="text-5xl md:text-6xl font-bold mb-4">500%</div>
              <p className="text-xl text-gray-300">Average Organic Traffic Growth</p>
            </motion.div>

            <motion.div
              variants={item}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">200+</div>
              <p className="text-xl text-gray-300">First Page Rankings Achieved</p>
            </motion.div>

            <motion.div
              variants={item}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">10M+</div>
              <p className="text-xl text-gray-300">Organic Impressions Generated</p>
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
