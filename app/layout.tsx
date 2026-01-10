import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'thynkk.digital - Strategy, Design & Technology',
  description: 'Discover the intersections of strategy, design, and technology. We craft visual stories that resonate and turn hidden opportunities into experiences that move your business forward.',
  keywords: ['strategy', 'design', 'technology', 'digital experiences', 'branding', 'web development', 'UI/UX', 'GenAI'],
  authors: [{ name: 'thynkk.digital' }],
  creator: 'thynkk.digital',
  publisher: 'thynkk.digital',
  openGraph: {
    title: 'thynkk.digital - Strategy, Design & Technology',
    description: 'Discover the intersections of strategy, design, and technology. We craft visual stories that resonate and turn hidden opportunities into experiences that move your business forward.',
    url: 'https://thynkk.digital',
    siteName: 'thynkk.digital',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'thynkk.digital - Strategy, Design & Technology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'thynkk.digital - Strategy, Design & Technology',
    description: 'Discover the intersections of strategy, design, and technology. We craft visual stories that resonate and turn hidden opportunities into experiences that move your business forward.',
    images: [
      {
        url: '/icon.png',
        alt: 'thynkk.digital - Strategy, Design & Technology',
      },
    ],
    creator: '@thynkkdigital',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
