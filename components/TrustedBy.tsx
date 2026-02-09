"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// Company logos data - replace with actual company logos
const companies = [
  { name: "aws", logo: "/api/placeholder/120/60" },
  { name: "google", logo: "/api/placeholder/120/60" },
  { name: "microsoft", logo: "/api/placeholder/120/60" },
  { name: "airbnb", logo: "/api/placeholder/120/60" },
  { name: "uber", logo: "/api/placeholder/120/60" },
  { name: "spotify", logo: "/api/placeholder/120/60" },
  { name: "netflix", logo: "/api/placeholder/120/60" },
  { name: "slack", logo: "/api/placeholder/120/60" },
  { name: "dropbox", logo: "/api/placeholder/120/60" },
  { name: "paypal", logo: "/api/placeholder/120/60" },
];

const TrustedBy = () => {
  const [duplicatedCompanies, setDuplicatedCompanies] = useState<
    typeof companies
  >([]);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Duplicate companies for seamless infinite scroll
    setDuplicatedCompanies([...companies, ...companies]);
  }, []);

  useEffect(() => {
    // Start animation
    if (duplicatedCompanies.length > 0 && !isPaused) {
      controls.start({
        x: [0, -duplicatedCompanies.length * 160], // Adjust based on logo width + gap
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // 20 seconds for full rotation
            ease: "linear",
          },
        },
      });
    }
  }, [duplicatedCompanies, controls, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    controls.start({
      x: [0, -duplicatedCompanies.length * 160],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  };

  return (
    <section className="relative bg-black text-white py-20 md:py-24 overflow-hidden">
      {/* Top gradient line exactly like Metoro - blue to purple gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 via-purple-400 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-white font-extrabold tracking-tight">
              Trusted by the best
            </span>
          </h2>
        </motion.div>

        {/* Auto-scrolling logos with hover pause - Exact Metoro style */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Scrolling container */}
          <div className="relative overflow-hidden">
            <motion.div className="flex gap-16 items-center" animate={controls}>
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="relative">
                    {/* Logo container - Exact Metoro style */}
                    <div className="flex items-center justify-center w-32 h-16">
                      {/* Logo placeholder - replace with actual logo */}
                      <div className="w-full h-full bg-gray-800/50 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                          {company.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line exactly like Metoro - blue to purple gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 via-purple-400 to-transparent" />
    </section>
  );
};

export default TrustedBy;
