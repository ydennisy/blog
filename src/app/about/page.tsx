import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Heading } from '@/components/Heading';

export const metadata: Metadata = {
  title: 'About – Dennis Yurkevich',
  description:
    'Learn more about Dennis Yurkevich, a London-based founder and generalist working on applied AI.',
  openGraph: {
    title: 'About – Dennis Yurkevich',
    description:
      'Learn more about Dennis Yurkevich, a London-based founder and generalist working on applied AI.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
    >
      {children}
    </a>
  );
}

export default function AboutPage() {
  return (
    <div className="pb-12">
      <Heading>About</Heading>

      <div className="max-w-3xl space-y-8">
        <section className="space-y-4 text-lg leading-8 text-muted-foreground">
          <p>
            I&apos;m Dennis. I was born in Ukraine, lived in a few different
            countries, and have mostly lived in the UK since I was about eight
            years old. I live in London now.
          </p>

          <p>
            I love tech and I&apos;m a generalist by nature. I&apos;ve worked
            across software engineering, machine learning, data science, product
            management, and data analysis, usually somewhere close to the messy
            middle where technical ideas become useful products.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Work</h2>
          <div className="space-y-4 leading-7 text-muted-foreground">
            <p>
              I&apos;m a second-time founder, living the pain again out of
              choice. My first company was{' '}
              <ExternalLink href="https://airgrid.io/">AirGrid</ExternalLink>,
              where we built privacy-preserving technology that ran federated
              learning models on devices. It was successfully acquired.
            </p>

            <p>
              I&apos;m now working on{' '}
              <ExternalLink href="https://viablesystems.ai/">
                Viable Systems
              </ExternalLink>
              , an applied AI research lab focused on the future of work.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Learning</h2>
          <div className="space-y-4 leading-7 text-muted-foreground">
            <p>
              I read a lot and try to read across disciplines: philosophy,
              economics, physics, mental models, and whatever else seems likely
              to sharpen how I think. I believe cross-disciplinary knowledge is
              important because useful ideas often transfer from one domain to
              another.
            </p>

            <p>
              Right now I&apos;m spending most of my learning time on agentic
              systems, continual reinforcement learning, and how to become a
              more effective lifelong learner. I&apos;m interested in
              flashcards, personal knowledge management, Zettelkasten, knowledge
              graphs, and better ways to organise context.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Outside work</h2>
          <div className="space-y-4 leading-7 text-muted-foreground">
            <p>
              I play a lot of tennis, like hiking and the outdoors, and feel at
              home in nature. I&apos;m also interested in politics, startups,
              and meeting people who care about similar problems.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Get in touch</h2>
          <p className="leading-7 text-muted-foreground">
            If any of this overlaps with what you&apos;re thinking about, reach
            me on{' '}
            <ExternalLink href="https://www.linkedin.com/in/dennisyurkevich/">
              LinkedIn
            </ExternalLink>{' '}
            or <ExternalLink href="https://x.com/ydennisy_">X</ExternalLink>.
          </p>
        </section>
      </div>
    </div>
  );
}
