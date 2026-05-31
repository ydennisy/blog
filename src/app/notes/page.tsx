import Link from 'next/link';
import type { Metadata } from 'next';

import { Heading } from '@/components/Heading';
import { Tag } from '@/components/Tag';
import { createSocialMetadata } from '@/lib/metadata';
import { formatDate, getAllNotes } from '@/lib/notes';

const seoTitle = 'Notes – Dennis Yurkevich';
const seoDescription =
  'Browse the latest notes from Dennis Yurkevich covering software engineering, startups, and building products.';

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  ...createSocialMetadata({
    title: seoTitle,
    description: seoDescription,
  }),
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <Heading>Notes</Heading>
      <div className="space-y-4">
        {notes.map((note) => (
          <article key={note.path} className="group">
            <Link href={note.path} className="block space-y-1">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {note.title}
                </h2>

                <time
                  dateTime={note.publishedAt}
                  className="whitespace-nowrap text-sm text-muted"
                >
                  {formatDate(note.publishedAt)}
                </time>
              </div>

              <p className="text-sm text-muted-foreground">{note.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {note.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
