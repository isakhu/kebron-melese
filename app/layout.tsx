import type { ReactNode } from 'react';
import { metadata, structuredData } from '../lib/seo';
import { Navigation } from '../components/navigation';
import { ScrollProgress } from '../components/scroll-progress';
import '../app/globals.css';

export { metadata };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-surface-darker text-text-primary antialiased">
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
