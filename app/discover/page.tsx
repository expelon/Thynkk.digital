import type { Metadata } from 'next';
import DiscoverClient from './DiscoverClient';

export const metadata: Metadata = {
  title: 'Discover | thynkk.digital',
  description:
    'Discover is where meaningful digital transformation begins. At thynkk.digital we turn insight into strategic advantage through research, audits and data-driven opportunity mapping.',
};

export default function DiscoverPage() {
  return <DiscoverClient />;
}
