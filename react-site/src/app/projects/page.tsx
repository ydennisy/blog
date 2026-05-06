import type { Metadata } from 'next';
import Link from 'next/link';

import { Heading } from '@/components/Heading';
import { Tag } from '@/components/Tag';

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
    <div className="space-y-8">
      <Heading>Projects</Heading>

      <section className="space-y-4 pb-8">
        <article className="space-y-4 rounded-lg border border-gray-200 p-5 dark:border-gray-800">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Cardaroo
              </h2>

              <div className="flex flex-wrap gap-2">
                <Tag label="TypeScript" />
                <Tag label="AI" />
                <Tag label="Content" />
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              A fun experiment in automated content generation for greeting
              cards. The idea was to generate blog posts and sharing flows which
              could drive traffic to the site.
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            The main lesson: driving traffic in a hot space is very hard. Still,
            friends and family send me these cards, which makes it worth it.
          </p>

          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <Link
              href="https://cardaroo.shop"
              target="_blank"
              className="text-gray-900 transition-colors hover:text-primary dark:text-gray-100"
            >
              Visit site →
            </Link>
            <Link
              href="https://github.com/ydennisy/cardaroo"
              target="_blank"
              className="text-gray-900 transition-colors hover:text-primary dark:text-gray-100"
            >
              View source →
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
