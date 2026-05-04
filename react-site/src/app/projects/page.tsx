import type { Metadata } from 'next';

import { Heading } from '@/components/Heading';

export const metadata: Metadata = {
  title: 'Projects – Dennis Yurkevich',
  description:
    'A collection of the products and experiments Dennis Yurkevich is building.',
  openGraph: {
    title: 'Projects – Dennis Yurkevich',
    description:
      'A collection of the products and experiments Dennis Yurkevich is building.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Heading>Projects</Heading>
      <p>Coming soon...</p>
    </>
  );
}
