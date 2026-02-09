"use client";

import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  text: string;
  delay: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "", text, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let current = 0;
      const increment = end / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, delay]);

  return (
    <div
      ref={counterRef}
      className="opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-sm">
        {text}
      </div>
    </div>
  );
};

// Simple Moon/Sphere component for collision effect
const Moon: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const drawMoon = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.35;

      ctx.clearRect(0, 0, width, height);

      // Create moon gradient
      const moonGradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius,
      );
      moonGradient.addColorStop(0, "rgba(255, 255, 255, 0.9)");
      moonGradient.addColorStop(0.5, "rgba(239, 68, 68, 0.7)");
      moonGradient.addColorStop(1, "rgba(239, 68, 68, 0.4)");

      // Moon shadow/glow
      ctx.shadowColor = "rgba(239, 68, 68, 0.6)";
      ctx.shadowBlur = 40;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // Draw moon
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = moonGradient;
      ctx.fill();

      // Add some surface details
      ctx.shadowColor = "transparent";

      // Crater 1
      ctx.beginPath();
      ctx.arc(
        centerX - radius * 0.3,
        centerY - radius * 0.2,
        radius * 0.08,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fill();

      // Crater 2
      ctx.beginPath();
      ctx.arc(
        centerX + radius * 0.2,
        centerY + radius * 0.3,
        radius * 0.06,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.fill();

      // Crater 3
      ctx.beginPath();
      ctx.arc(
        centerX + radius * 0.1,
        centerY - radius * 0.4,
        radius * 0.05,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
      ctx.fill();

      animationRef.current = requestAnimationFrame(drawMoon);
    };

    drawMoon();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-md max-h-md"
        style={{ filter: "blur(0.2px)" }}
      />
    </div>
  );
};

const ImpactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculate collision effect based on scroll position
  const getCollisionTransform = () => {
    if (!sectionRef.current || !isVisible)
      return {
        moon: { transform: "translateY(-100vh) scale(0.8)", opacity: 0 },
        text: { transform: "translateY(0)", opacity: 0 },
      };

    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.max(
      0,
      Math.min(1, (window.scrollY - sectionTop + windowHeight) / windowHeight),
    );

    // Moon drops from top to bottom
    const moonY = scrollProgress > 0.5 ? 0 : -100 + scrollProgress * 200; // From -100% to 0%
    const moonScale = scrollProgress > 0.3 ? 1 : 0.8 + scrollProgress * 0.66; // Scale from 0.8 to 1
    const textOpacity = scrollProgress > 0.4 ? 1 : 0; // Text appears after moon collision

    return {
      moon: {
        transform: `translateY(${moonY}%) scale(${moonScale})`,
        opacity: scrollProgress > 0.1 ? 1 : scrollProgress * 10,
      },
      text: {
        transform: "translateY(0)",
        opacity: textOpacity,
      },
    };
  };

  const collisionStyles = getCollisionTransform();

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-white/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[600px]">
          {/* Left Side - Impact Numbers with collision effect */}
          <div
            className="space-y-12 lg:space-y-16 transition-all duration-1000 ease-out"
            style={collisionStyles.text}
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Our Impact
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                Every innovation that happens here is out of a quest to get
                better at what we are already doing. We deliver ideas that make
                a difference and create experiences that transform lives.
              </p>
            </div>

            <div className="space-y-10 md:space-y-12">
              <Counter
                end={10}
                suffix="+"
                text="Completed Projects"
                delay={200}
              />
              <Counter end={5} suffix="+" text="Clients" delay={400} />
              <Counter end={1} suffix="+" text="Country" delay={600} />
              <Counter
                end={2}
                suffix="+"
                text="Experience in Design & Technology"
                delay={800}
              />
            </div>

            {/* Call to action button */}
            <div className="pt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25"
              >
                Let's talk
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Moon with top-to-bottom collision effect */}
          <div
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center transition-all duration-1000 ease-out"
            style={collisionStyles.moon}
          >
            <Moon />

            {/* Floating particles for extra visual effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-60" />
              <div
                className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse opacity-50"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced custom animation styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default ImpactSection;
