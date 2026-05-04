import type { Metadata } from 'next';

import { Heading } from '@/components/Heading';

export const metadata: Metadata = {
  title: 'About – Dennis Yurkevich',
  description:
    'Learn more about Dennis Yurkevich, the founder and engineer behind dennisy.me.',
  openGraph: {
    title: 'About – Dennis Yurkevich',
    description:
      'Learn more about Dennis Yurkevich, the founder and engineer behind dennisy.me.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function AboutPage() {
  return (
    <>
      <Heading>About</Heading>
      <p>Coming soon...</p>
    </>
  );
}
