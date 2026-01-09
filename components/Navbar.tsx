'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Search, Bookmark, Menu, X } from 'lucide-react';
import gsap from 'gsap';

const menuItems = ['Services', 'Solutions', 'Industries', 'Works', 'About', 'Careers'];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkSectionInView, setIsDarkSectionInView] = useState(true);
  const navRef = useRef<HTMLElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from('.nav-logo', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.4')
      .from('.nav-item', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.4')
      .from('.nav-icon', {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      }, '-=0.3');
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    const getNavHeight = () => navRef.current?.offsetHeight ?? 80;

    const updateState = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-nav-theme="dark"]')
      );

      if (sections.length === 0) {
        setIsDarkSectionInView(false);
        return;
      }

      const navHeight = getNavHeight();
      const threshold = navHeight * 0.5;
      const visible = sections.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= threshold && rect.bottom >= threshold;
      });
      setIsDarkSectionInView(visible);
    };

    const handleScroll = () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateState);
    };

    const handleResize = () => {
      updateState();
    };
    updateState();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power3.out',
      });

      gsap.from('.mobile-menu-item', {
        opacity: 0,
        x: 50,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2,
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isDarkSectionInView
            ? 'bg-transparent border-transparent'
            : 'bg-white shadow-lg border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div
              className="nav-logo flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-6 w-auto lg:h-8"
              />
            </div>

            <div
              ref={menuItemsRef}
              className="hidden lg:flex items-center space-x-8"
            >
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-item text-sm font-medium transition-colors duration-200 ${
                    isDarkSectionInView
                      ? 'text-white/80 hover:text-white'
                      : 'text-gray-900/80 hover:text-gray-900'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div
              ref={iconsRef}
              className="flex items-center space-x-4 lg:space-x-6"
            >
              <button
                className={`nav-icon hidden sm:block transition-colors duration-200 ${
                  isDarkSectionInView
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-900/80 hover:text-gray-900'
                }`}
              >
                <Phone className="w-5 h-5" />
              </button>
              <button
                className={`nav-icon hidden sm:block transition-colors duration-200 ${
                  isDarkSectionInView
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-900/80 hover:text-gray-900'
                }`}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`nav-icon hidden sm:block transition-colors duration-200 ${
                  isDarkSectionInView
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-900/80 hover:text-gray-900'
                }`}
              >
                <Bookmark className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`nav-icon lg:hidden transition-colors duration-200 ${
                  isDarkSectionInView
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-900/80 hover:text-gray-900'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        ref={mobileMenuRef}
        className="fixed top-16 right-0 bottom-0 w-full sm:w-80 bg-black/95 backdrop-blur-lg z-40 lg:hidden translate-x-full"
      >
        <div className="flex flex-col p-8 space-y-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-menu-item text-2xl font-semibold text-white/80 hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <div className="flex items-center space-x-6 pt-6 border-t border-white/10">
            <button className="mobile-menu-item text-white/80 hover:text-white transition-colors duration-200">
              <Phone className="w-6 h-6" />
            </button>
            <button className="mobile-menu-item text-white/80 hover:text-white transition-colors duration-200">
              <Search className="w-6 h-6" />
            </button>
            <button className="mobile-menu-item text-white/80 hover:text-white transition-colors duration-200">
              <Bookmark className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
