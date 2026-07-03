# Darshan Satapara | Personal Portfolio

A public, JSON-driven portfolio presenting Darshan Satapara's full-stack development, Python, data engineering, AI automation, podcasting, group discussions, and vlogging work.

Live website: [darshan.techorbitra.com](https://darshan.techorbitra.com)

## Features

- Responsive neo-brutalist interface
- Public Home, About, Work, Services, and Contact pages
- Work experience with company logos
- Development, data engineering, OCR, LLM, and automation projects
- Separate mixed and Data/AI-focused resumes
- Podcast, group-discussion, YouTube, Instagram, and vlogging profiles
- SEO metadata, Open Graph cards, sitemap, robots configuration, and JSON-LD
- Centralized portfolio content stored in one JSON file

## Content Management

Portfolio content is maintained in:

```text
app/data/portfolio.json
```

This file contains:

- Personal and contact information
- Resume variants
- Social and creator profiles
- Education and certificates
- Work experience and company logos
- Projects and technology stacks
- Skills, services, languages, and interests

Components import this JSON directly, so most content updates do not require editing JSX.

## Resume Variants

- `public/darshan_resume_m.pdf` — development, data, and AI profile
- `public/darshan_resume_d.pdf` — data and AI-focused profile

## Main Assets

```text
public/profile.jpg
public/profile2.jpg
public/7span.png
public/instabizweb.ico
public/egniol.png
public/webseeder.webp
```

## Tech Stack

- Next.js 16 with App Router
- React 19
- Tailwind CSS 4
- Lucide React
- ESLint

## Pages

- `/` — introduction, services, experience, and projects
- `/about` — background, education, skills, certificates, and creator profiles
- `/work` — complete project showcase
- `/service` — full-stack, AI automation, and data-engineering capabilities
- `/contact` — email, phone, LinkedIn, GitHub, and LeetCode

All portfolio pages are publicly accessible; no OTP or email verification is required.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Production Configuration

Set `NEXT_PUBLIC_SITE_URL` when deploying to a domain different from the default configured in `portfolio.json`.

Before deployment, verify the project with:

```bash
npm run lint
npm run build
```

## Contact

- Email: [darshansatapara286@gmail.com](mailto:darshansatapara286@gmail.com)
- LinkedIn: [darshansatapara](https://linkedin.com/in/darshansatapara/)
- GitHub: [darshansatapara](https://github.com/darshansatapara)
- LeetCode: [darshansatapara](https://leetcode.com/u/darshansatapara)

## Author

Darshan Satapara
