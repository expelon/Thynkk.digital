'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
    { label: 'Press', href: '#press' },
  ],
  Services: [
    { label: 'Strategy', href: '#strategy' },
    { label: 'Digital Marketing', href: '#digital-marketing' },
    { label: 'Data & Analytics', href: '#data-analytics' },
    { label: 'Innovation', href: '#innovation' },
  ],
  Industries: [
    { label: 'Healthcare', href: '#healthcare' },
    { label: 'Financial Services', href: '#financial' },
    { label: 'Retail', href: '#retail' },
    { label: 'Technology', href: '#technology' },
  ],
};

const CONTACT_INFO = [
  { icon: Mail, text: 'hello@thynkk.digital', href: 'mailto:hello@thynkk.digital' },
  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, text: 'San Francisco, CA', href: '#' },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  { icon: Twitter, href: '#twitter', label: 'Twitter' },
  { icon: Facebook, href: '#facebook', label: 'Facebook' },
  { icon: Instagram, href: '#instagram', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* Logo & Description */}
          <div className="xl:col-span-1">
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
              We champion the bold to achieve the extraordinary. Transforming
              businesses through innovation and strategic excellence.
            </p>
          </div>

          {/* Footer Links Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              {CONTACT_INFO.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-sm text-white/60 transition hover:text-white"
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Thynkk Digital. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-xs text-white/40 transition hover:text-white/60"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-xs text-white/40 transition hover:text-white/60"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
