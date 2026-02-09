"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const serviceCategories = [
  {
    title: "Branding",
    services: [
      { label: "Brand Consulting", href: "/services/brand-consulting" },
      { label: "Logo Design", href: "/services/logo-design" },
      { label: "Graphic Design", href: "/services/graphic-design" },
    ],
    exploreLink: "Explore branding services →",
    video: "/videos/branding.mp4",
  },
  {
    title: "Experience Design",
    services: [
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Web & Mobile Design", href: "/services/web-and-mobile-design" },
    ],
    exploreLink: "Explore experience design →",
    video: "/videos/experience-design.mp4",
  },
  {
    title: "Technology",
    services: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Technology", href: "/services/technology" },
    ],
    exploreLink: "Explore technology services →",
    video: "/videos/technology.mp4",
  },
  {
    title: "Digital Marketing",
    services: [
      { label: "SEO & Content", href: "/services/seo-content" },
      { label: "Social Media", href: "/services/social-media" },
      { label: "Marketing", href: "/services/marketing" },
    ],
    exploreLink: "Explore digital marketing →",
    video: "/videos/digital-marketing.mp4",
  },
];

// Video component with controls
const VideoPlayer: React.FC<{ src: string; title: string }> = ({
  src,
  title,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 group">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Play/Pause button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-4 right-4 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white ml-0.5" />
        )}
      </button>

      {/* Title overlay */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg">
        <p className="text-white text-sm font-medium">{title}</p>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default function ServicesGrid() {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-blue-900/10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {serviceCategories.map((category, index) => (
        <motion.section
          key={index}
          className="relative py-24 md:py-32 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
        >
          {/* Section gradient decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left side - Category title and services list */}
              <div
                className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                {/* Category label */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/20 border border-red-800/30 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  <span className="text-red-400 text-sm font-medium tracking-wide uppercase">
                    Service Category
                  </span>
                </motion.div>

                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </motion.h2>

                <motion.ul
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  {category.services.map((service, serviceIndex) => (
                    <motion.li
                      key={serviceIndex}
                      className="border-b border-gray-800 pb-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.15 + 0.5 + serviceIndex * 0.1,
                      }}
                      whileHover={{ x: 10 }}
                    >
                      <Link
                        href={service.href}
                        className="text-lg text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group"
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {service.label}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.8 }}
                >
                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 text-lg font-medium text-white group relative"
                  >
                    <span className="relative z-10">
                      {category.exploreLink}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>

              {/* Right side - Enhanced Video */}
              <motion.div
                className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.6 }}
              >
                <VideoPlayer src={category.video} title={category.title} />
              </motion.div>
            </div>
          </div>

          {/* Enhanced divider line */}
          {index < serviceCategories.length - 1 && (
            <motion.div
              className="mt-24 md:mt-32"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.9, duration: 0.8 }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                  <div className="border-b border-gray-800"></div>
                  <div className="absolute inset-0 border-b border-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.section>
      ))}
    </div>
  );
}
