"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    title: "Branding",
    items: [
      { label: "Brand Consulting", href: "/services/brand-consulting" },
      { label: "Logo Design", href: "/services/logo-design" },
      { label: "Graphic Design", href: "/services/graphic-design" },
    ],
  },
  {
    title: "Experience Design",
    items: [
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Web & Mobile Design", href: "/services/web-and-mobile-design" },
    ],
  },
  {
    title: "Technology",
    items: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Technology", href: "/services/technology" },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      {
        label: "SEO & Content",
        href: "/services/seo-content",
      },
      { label: "Social Media", href: "/services/social-media" },
      { label: "Marketing", href: "/services/marketing" },
    ],
  },
];

import { useRef } from "react";

export function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 400);
  };

  const handleClick = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen((prev) => !prev);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/services"
        className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
        tabIndex={0}
      >
        <span>Services</span>
      </Link>

      {open && (
        <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
      )}

      <div
        className={`fixed left-1/2 top-16 lg:top-20 z-40 w-screen max-w-none -translate-x-1/2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          open
            ? "pointer-events-auto opacity-100 translate-y-0 scale-100"
            : "pointer-events-none opacity-0 translate-y-4 scale-95"
        }`}
      >
        <div className="absolute left-0 right-0 top-0 bg-black border-t border-white/100 shadow-2xl backdrop-blur-sm w-[120vw] z-50">
          <div className="max-w-[1200px] w-full mx-auto flex flex-row justify-start items-start gap-30 pl-20 pr-24 py-16 text-[16px] leading-relaxed text-left">
            {/* Intro column */}
            <div className="ml-12 pr-10 flex flex-col gap-6 min-w-[260px] max-w-[320px]">
              <h3 className="text-2xl font-bold leading-tight text-white mb-4">
                Building Strong Capabilities to Empower Your Brand
              </h3>
              <Link
                href="/services"
                className="inline-flex items-center text-base font-semibold text-accent hover:text-white hover:underline transition-all duration-150"
              >
                Go to overview <span className="ml-2">→</span>
              </Link>
            </div>
            {/* Branding + Experience Design */}
            <div className="flex flex-col gap-8 pl-0 pr-8 border-r border-white/10 min-w-[200px]">
              <div>
                <div className="text-lg font-bold uppercase tracking-wide text-white border-b border-white/10 pb-2 mb-2">
                  {categories[0].title}
                </div>
                <ul className="flex flex-col gap-2 text-base font-medium text-neutral-300">
                  {categories[0].items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-accent hover:underline transition-all duration-150"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-lg font-bold uppercase tracking-wide text-white border-b border-white/10 pb-2 mb-2 mt-6">
                  {categories[1].title}
                </div>
                <ul className="flex flex-col gap-2 text-base font-medium text-neutral-300">
                  {categories[1].items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-accent hover:underline transition-all duration-150"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Technology */}
            <div className="flex flex-col gap-8 pl-0 pr-8 border-r border-white/10 min-w-[200px]">
              <div>
                <div className="text-lg font-bold uppercase tracking-wide text-white border-b border-white/10 pb-2 mb-2">
                  {categories[2].title}
                </div>
                <ul className="flex flex-col gap-2 text-base font-medium text-neutral-300">
                  {categories[2].items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-accent hover:underline transition-all duration-150"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Digital Marketing */}
            <div className="flex flex-col gap-8 pl-0 min-w-[200px]">
              <div>
                <div className="text-lg font-bold uppercase tracking-wide text-white border-b border-white/10 pb-2 mb-2">
                  {categories[3].title}
                </div>
                <ul className="flex flex-col gap-2 text-base font-medium text-neutral-300">
                  {categories[3].items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-accent hover:underline transition-all duration-150"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesMegaMenu;
