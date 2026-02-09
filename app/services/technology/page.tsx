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
  Code,
  Globe,
  Zap,
  Database,
  Cloud,
  Shield,
  Cpu,
  Settings,
  BarChart,
  Server,
  Brain,
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

export default function TechnologyPage() {
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
      title: "Technology Assessment",
      description:
        "Evaluating your current technology stack and identifying opportunities for improvement and innovation.",
    },
    {
      title: "Solution Architecture",
      description:
        "Designing scalable, secure, and efficient technology solutions tailored to your specific business requirements.",
    },
    {
      title: "Development & Implementation",
      description:
        "Building and deploying custom solutions using cutting-edge technologies and industry best practices.",
    },
    {
      title: "Integration & Migration",
      description:
        "Seamlessly integrating new technologies with existing systems and managing data migration processes.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Comprehensive testing to ensure reliability, performance, and security of all technology solutions.",
    },
    {
      title: "Deployment & Launch",
      description:
        "Carefully planned deployment with minimal disruption and comprehensive post-launch support.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing monitoring, maintenance, and support to ensure optimal performance and continuous improvement.",
    },
  ];

  const industries = [
    {
      title: "Finance",
      icon: BarChart,
      description:
        "Secure, compliant technology solutions for banking, fintech, and financial services.",
    },
    {
      title: "Healthcare",
      icon: Shield,
      description:
        "HIPAA-compliant systems and innovative healthcare technology solutions.",
    },
    {
      title: "E-commerce",
      icon: Globe,
      description:
        "Scalable e-commerce platforms and payment processing solutions.",
    },
    {
      title: "Manufacturing",
      icon: Cpu,
      description:
        "IoT integration and automation solutions for modern manufacturing.",
    },
  ];

  const caseStudies = [
    {
      title: "Enterprise Cloud Migration",
      description:
        "Complete cloud transformation for enterprise client, reducing infrastructure costs by 60% and improving scalability.",
      image: "/api/placeholder/400/300",
    },
    {
      title: "AI-Powered Analytics Platform",
      description:
        "Custom AI solution for data analytics, providing real-time insights and improving decision-making by 300%.",
      image: "/api/placeholder/400/300",
    },
    {
      title: "FinTech Security Overhaul",
      description:
        "Comprehensive security upgrade for financial platform, achieving 99.9% uptime and zero security breaches.",
      image: "/api/placeholder/400/300",
    },
  ];

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies, cloud platforms, AI/ML frameworks, and enterprise solutions including React, Node.js, Python, AWS, Azure, and Google Cloud.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "We implement industry-leading security practices including encryption, regular security audits, compliance with standards like GDPR and HIPAA, and continuous monitoring.",
    },
    {
      question: "Can you help with legacy system modernization?",
      answer:
        "Yes, we specialize in modernizing legacy systems, migrating to modern architectures, and ensuring minimal disruption during the transition process.",
    },
  ];

  const relatedServices = [
    { title: "Web Development", icon: Code },
    { title: "AI & Machine Learning", icon: Brain },
    { title: "DevOps Consulting", icon: Settings },
    { title: "Data & Analytics", icon: BarChart },
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
            Technology
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming businesses through innovative technology solutions,
            from AI and cloud computing to enterprise architecture.
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
              href="/services/technology"
              className="hover:text-white transition-colors"
            >
              Technology
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Technology</span>
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
              We deliver cutting-edge technology solutions that drive digital
              transformation
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
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Development</h3>
              <p className="text-gray-300">
                Building tailored software solutions using modern technologies
                and agile development methodologies.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Solutions</h3>
              <p className="text-gray-300">
                Designing and implementing scalable cloud architectures that
                optimize performance and reduce costs.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
              <p className="text-gray-300">
                Implementing intelligent solutions that leverage AI and ML to
                automate processes and generate insights.
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
              A systematic approach to technology excellence
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
              We serve diverse industries with specialized technology expertise
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
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{industry.title}</h3>
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
              Success stories from our technology projects
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
              Common questions about our technology services
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
              Explore our other technology services
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300">
              Trends and tips in technology and innovation
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
              <h3 className="text-xl font-bold mb-4">Cloud Computing Trends</h3>
              <p className="text-gray-300 mb-4">
                The latest developments in cloud technology and how businesses
                are leveraging them for growth.
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
              <h3 className="text-xl font-bold mb-4">AI in Business</h3>
              <p className="text-gray-300 mb-4">
                How artificial intelligence is transforming business operations
                and creating new opportunities.
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
              <h3 className="text-xl font-bold mb-4">
                Cybersecurity Best Practices
              </h3>
              <p className="text-gray-300 mb-4">
                Essential security measures every business should implement to
                protect their digital assets.
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
              <div className="text-5xl md:text-6xl font-bold mb-4">200+</div>
              <p className="text-xl text-gray-300">
                Technology Solutions Delivered
              </p>
            </motion.div>

            <motion.div variants={item} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4">99.9%</div>
              <p className="text-xl text-gray-300">System Uptime Achieved</p>
            </motion.div>

            <motion.div variants={item} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4">50+</div>
              <p className="text-xl text-gray-300">
                Enterprise Transformations
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
