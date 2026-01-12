'use client';

import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const FOOTER_LINKS = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Works', href: '#works' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Branding', href: '#branding' },
    { label: 'Experience Design', href: '#experience-design' },
    { label: 'Technology', href: '#technology' },
    { label: 'Digital Marketing', href: '#digital-marketing' },
  ],
  Other: [
    { label: 'Partnership', href: '#partnership' },
    { label: 'Awards and Recognitions', href: '#awards-and-recognitions' },
    { label: 'Insights', href: '#insights' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Resource Augmentation', href: '#resource-augmentation' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Our Clients', href: '#clients' },
    { label: 'Submit Feedback to Our CEO', href: '#submit-feedback' },
    { label: 'Download Brochure', href: '#download-brochure' },
    { label: 'Sitemap', href: '#sitemap' },
  ],
};

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.498 6.186a3.003 3.003 0 0 0-2.115-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.383.566A3.003 3.003 0 0 0 .502 6.186C0 8.072 0 12 0 12s0 3.928.502 5.814a3.003 3.003 0 0 0 2.115 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.383-.566a3.003 3.003 0 0 0 2.115-2.12C24 15.928 24 12 24 12s0-3.928-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

function BehanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 7h-6V5h6v2Zm-9.6 5.4c.8-.6 1.2-1.5 1.2-2.7 0-1.2-.4-2.2-1.2-2.9C11.5 6.1 10.2 5.8 8.5 5.8H2v12.4h6.7c1.9 0 3.3-.3 4.3-1 1-.7 1.5-1.8 1.5-3.3 0-1.4-.7-2.4-2.1-3.5ZM5 8.3h3.3c.8 0 1.4.1 1.8.4.4.3.6.7.6 1.3 0 .7-.2 1.1-.7 1.4-.5.3-1.2.4-2.1.4H5V8.3Zm3.7 7.5H5v-3.7h3.7c.9 0 1.6.1 2.1.4.5.3.7.8.7 1.6 0 .8-.2 1.3-.7 1.6-.5.3-1.2.5-2.1.5Zm12.5-4.9c-.1-1.6-.6-2.9-1.6-3.8-1-.9-2.2-1.4-3.7-1.4-1.7 0-3.1.6-4.1 1.7-1 1.1-1.5 2.6-1.5 4.3 0 1.9.5 3.4 1.6 4.5 1 1 2.5 1.6 4.4 1.6 2.5 0 4.2-1.1 5-3.2h-2.8c-.2.4-.4.7-.7.9-.3.2-.8.3-1.4.3-.8 0-1.4-.2-1.8-.6-.4-.4-.6-1-.6-1.7H22c0-.6 0-1.1-.1-1.6ZM13.7 10c.4-.5 1-.8 1.9-.8.7 0 1.3.2 1.7.6.4.4.7 1 .7 1.7h-4.9c.1-.7.3-1.2.6-1.5Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21l-6.52 7.455L22.5 22h-6.86l-5.37-6.974L4.37 22H1.6l6.98-7.98L1 2h7.03l4.86 6.31L18.244 2Zm-1.2 18h1.53L7.2 3.93H5.57L17.04 20Z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  { icon: YoutubeIcon, href: '#youtube', label: 'YouTube' },
  { icon: Instagram, href: '#instagram', label: 'Instagram' },
  { icon: Facebook, href: '#facebook', label: 'Facebook' },
  { icon: Twitter, href: '#dribbble', label: 'Dribbble' },
  { icon: BehanceIcon, href: '#behance', label: 'Behance' },
  { icon: XIcon, href: '#x', label: 'X' },
];

export default function Footer() {
  return (
    <footer className="bg-black px-6 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl pb-14 pt-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">Get started now!</h2>
            <p className="mt-3 text-base text-white/60">It takes less than a minute of your time.</p>
          </div>
          <a
            href="#request-quote"
            className="inline-flex items-center justify-center gap-2 border border-white/60 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
          >
            Request a quote
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="hidden">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={32}
                className="h-6 w-auto"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              thynkk.digital crafts digital experiences at the intersection of strategy, design, and technology.
              We turn bold ideas into reality with precision and creativity.
            </p>
          </div>

          {/* Footer Links Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-sm font-semibold text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/60 transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-semibold text-white">Connect</h3>
            <div className="grid grid-cols-2 gap-x-10">
              <div className="space-y-4">
                <div className="text-sm text-white/60">General Enquiry</div>
                <div className="text-sm text-white/60">Sales Enquiry</div>
                <div className="text-sm text-white/60">Email</div>
                <div className="text-sm text-white/60">HR Enquiry</div>
                <div className="text-sm text-white/60">WhatsApp (Sales)</div>
              </div>
              <div className="space-y-4">
                <a href="tel:+914802733111" className="block text-sm text-white/60 transition hover:text-white">
                  : +91 480 2733 111
                </a>
                <a href="tel:+914802733555" className="block text-sm text-white/60 transition hover:text-white">
                  : +91 480 2733 555
                </a>
                <a
                  href="mailto:info@thynkk.digital"
                  className="block text-sm text-white/60 transition hover:text-white"
                >
                  : info@thynkk.digital
                </a>
                <a href="tel:+914802733999" className="block text-sm text-white/60 transition hover:text-white">
                  : +91 480 2733 999
                </a>
                <a href="tel:+918606483399" className="block text-sm text-white/60 transition hover:text-white">
                  : +91 8606 483 399
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-xs text-white/40">thynkk.digital © {new Date().getFullYear()} All rights reserved</p>

            <div className="flex items-center gap-2 text-xs text-white/40">
              <a href="#privacy" className="transition hover:text-white/60">
                Privacy Policy
              </a>
              <span className="text-white/30">|</span>
              <a href="#terms" className="transition hover:text-white/60">
                Terms &amp; Conditions
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/60 transition hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
