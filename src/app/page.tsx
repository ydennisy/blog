import Link from 'next/link';
import type { Metadata } from 'next';

import { Hero } from '@/components/Hero';
import { Tag } from '@/components/Tag';
import { createSocialMetadata } from '@/lib/metadata';
import { formatDate, getRecentNotes } from '@/lib/notes';

const seoTitle =
  'Dennis Yurkevich – Building, learning, and writing about startups';
const seoDescription =
  'The personal site of Dennis Yurkevich where he shares notes on software engineering, startups, and ongoing experiments.';

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  ...createSocialMetadata({
    title: seoTitle,
    description: seoDescription,
  }),
};

export default function Home() {
  const recentNotes = getRecentNotes();

  return (
    <div className="space-y-8">
      <Hero />
      <div className="separator" />
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Recent Notes
          </h2>

          <Link
            href="/notes"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            View all notes →
          </Link>
        </div>

        <div className="space-y-2 pb-8">
          {recentNotes.map((post) => (
            <article key={post.path}>
              <Link href={post.path} className="block space-y-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>

                  <time
                    dateTime={post.publishedAt}
                    className="whitespace-nowrap text-sm text-gray-500 dark:text-gray-500"
                  >
                    {formatDate(post.publishedAt)}
                  </time>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
