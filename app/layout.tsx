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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
