import { Metadata } from 'next';

const siteUrl = 'https://kebron-portfolio.example.com';

export const metadata: Metadata = {
  title: 'Kebron Kebede Olana | Project Manager · Business Analyst · Card Banking Officer',
  description: 'Professional portfolio for Kebron Kebede Olana, Project Manager candidate with expertise in banking operations, business analysis, payment systems, and project leadership.',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Kebron Kebede Olana · Project Manager Portfolio',
    description: 'Executive banking portfolio highlighting project management, business analysis, payment systems expertise, and banking operations leadership.',
    type: 'website',
    url: siteUrl,
    siteName: 'Kebron Kebede Olana - Project Manager',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kebron Kebede Olana · Project Manager Portfolio',
    description: 'Banking operations and project management professional with documented expertise in business analysis and system enhancement.',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kebron Kebede Olana',
  jobTitle: 'Project Manager | Business Analyst | Card Banking Officer',
  worksFor: {
    '@type': 'Organization',
    name: 'Cooperative Bank of Oromia',
  },
  email: 'mailto:hopekebron@gmail.com',
  telephone: '+251933773213',
  sameAs: [
    'https://www.linkedin.com/in/kebron-kebede-22bb7324b',
    'https://t.me/KebronK',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ethiopia',
  },
};
