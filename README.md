# DevGram — Instagram-Style Developer Portfolio

A responsive developer portfolio that mimics Instagram's profile UI, built for **Kanishk Kulshrestha**.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **shadcn/ui** patterns
- **next-themes** (system light/dark mode)
- **Embla Carousel** (swipeable modals)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- Instagram-style profile header with custom stats (Codeforces, Repos, Years Coding)
- Highlight circles linking to GitHub, Resume, Codeforces, LinkedIn
- Three tabs: Projects, Experience, Achievements
- 3-column responsive post grid with hover overlays
- Instagram-style modal with image carousel, swipe on mobile, arrow keys on desktop
- Deep linking: `/p/projects/ray-tracer`, `/p/experience/fiserv-internship`, etc.
- System theme support (light/dark)
- SEO metadata, sitemap, and robots.txt

## Customization

Edit content in `src/data/`:

- `profile.ts` — name, bio, stats, highlights
- `projects.ts` — project posts
- `experience.ts` — work experience
- `achievements.ts` — awards and events

Replace gradient thumbnails with real images by setting `thumbnail` and slide `visual` fields to image URLs.

## Build

```bash
npm run build
npm start
```
