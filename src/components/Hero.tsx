import Link from 'next/link';

export function Hero() {
  return (
    <div className="py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-gray-100">
            Hello, I'm Dennis
          </h1>

          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
            <p>
              Welcome to my corner of the internet. This is where I share my
              thoughts, learnings, and experiments as I navigate the world of
              technology and startups.
            </p>

            <p>
              I write about software engineering, startups, and the things I'm
              building and learning along the way.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
              View Projects
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition-colors hover:border-gray-400 dark:border-gray-700 dark:text-gray-100 dark:hover:border-gray-600"
            >
              More About Me
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/avatar.webp"
            alt="Dennis"
            className="h-64 w-64 rounded-2xl object-cover shadow-lg md:h-80 md:w-80"
          />
        </div>
      </div>
    </div>
  );
}
