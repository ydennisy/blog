import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { createSocialMetadata, siteUrl } from '@/lib/metadata';

import './globals.css';

const siteTitle = 'Dennis Yurkevich';
const siteDescription =
  'The personal site of Dennis Yurkevich where he shares notes on software engineering, startups, and ongoing experiments.';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  ...createSocialMetadata({
    title: siteTitle,
    description: siteDescription,
  }),
};

const colorModeScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  } catch {
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
