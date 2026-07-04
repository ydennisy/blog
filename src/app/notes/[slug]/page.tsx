import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { NoteImage } from '@/components/NoteImage';
import { Tag } from '@/components/Tag';
import { createSocialMetadata } from '@/lib/metadata';
import { getAllNotes, getNoteBySlug } from '@/lib/notes';

type NotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllNotes().map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getNoteBySlug(slug);

  if (!post) {
    return {
      title: 'Notes – Dennis Yurkevich',
    };
  }

  const title = `${post.title} – Notes by Dennis Yurkevich`;

  return {
    title,
    description: post.description,
    ...createSocialMetadata({
      title,
      description: post.description,
    }),
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const post = getNoteBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose mt-8 dark:prose-invert">
      <h1>{post.title}</h1>
      <div className="flex flex-wrap gap-2 pt-2">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ img: NoteImage }}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
