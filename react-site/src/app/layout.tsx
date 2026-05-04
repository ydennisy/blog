import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import './globals.css';

export const metadata: Metadata = {
  title: 'Dennis Yurkevich',
  description:
    'The personal site of Dennis Yurkevich where he shares notes on software engineering, startups, and ongoing experiments.',
};

const colorModeScript = `
(() => {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="site-container">{children}</div>
          </main>
          <div className="separator" />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
