# Kebron Kebede Olana — Executive Banking Portfolio

A production-ready Next.js 15 portfolio designed for a banking executive profile. This application is built with TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, and modern enterprise UI architecture.

## Project Overview

This portfolio highlights Kebron Kebede Olana's banking and business analysis expertise in a professional executive format. The application is built for performance, accessibility, SEO, and responsive presentation across devices.

## Features

- Executive homepage with professional hero section
- Structured data and metadata for SEO
- Sectioned portfolio content: About, Experience, Projects, Skills, Education, Certifications, Contact
- Accessible contact form with validation
- Dark mode support with theme toggle
- Smooth animations via Framer Motion
- Responsive layout and scalable component architecture
- Sitemap and robots.txt for search engine indexing
- Downloadable CV placeholder asset

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form
- Zod
- Next SEO Metadata API

## Installation

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Start the production server

```bash
npm run start
```

## Deployment

This project is ready for deployment on Vercel. Push the repository to GitHub and connect it to Vercel. Ensure the root project is selected, and Vercel will detect the Next.js app automatically.

## Folder Structure

- `app/` — Next.js App Router pages, layout, metadata, and globals
- `components/` — reusable UI components and page sections
- `components/ui/` — shared design system elements
- `data/` — structured profile, experience, project, skills, education, certifications, and social data
- `lib/` — SEO metadata and structured data utilities
- `public/` — static assets, placeholders, and robots file

## Customization Guide

- Update `data/profile.ts` with authorized biography and contact details.
- Replace placeholder assets in `public/` with real images and resume documents.
- Extend `data/projects.ts` and `data/certifications.ts` with verified project case studies and certificates.
- Adjust branding and color palette in `tailwind.config.ts` and `app/globals.css`.

## Performance and Accessibility

The portfolio is designed to meet enterprise-level standards:

- Semantic HTML structure
- Keyboard-friendly navigation
- Accessible form fields with labels and error messaging
- Fast loading with optimized asset usage
- SEO-friendly metadata and sitemap

## Notes

- Replace `public/Kebron-CV.txt` with the final CV file in PDF format.
- Update the sitemap base URL in `lib/seo.ts` and `app/sitemap.ts` to the production domain.
