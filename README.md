# Portfolio - Mark Michael Angelo Clarus

A modern, production-ready personal portfolio website built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email:** Resend
- **Validation:** Zod
- **Linting:** ESLint
- **Formatting:** Prettier

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint the codebase
pnpm lint
```

## Project Structure

```
├── app/
│   ├── api/contact/route.ts    # Contact form API
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   ├── not-found.tsx           # 404 page
│   ├── page.tsx                # Landing page
│   ├── robots.ts               # SEO robots config
│   ├── sitemap.ts              # XML sitemap
│   └── manifest.ts             # PWA manifest
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── sections/               # Hero, About, Experience, etc.
│   ├── shared/                 # Reusable components
│   └── ui/                     # Button, Badge, Card, etc.
├── hooks/                      # Custom React hooks
├── lib/                        # Utilities and data
├── public/                     # Static assets
├── styles/                     # Additional styles
└── types/                      # TypeScript types
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for contact form |
| `CONTACT_EMAIL` | Email to receive contact form submissions |

## Deployment

The project is configured for zero-config deployment on Vercel:

1. Push the repository to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Features

- Responsive design for all screen sizes
- Dark theme with glassmorphism effects
- Smooth animations with Framer Motion
- Optimized for Core Web Vitals
- SEO optimized with Open Graph and JSON-LD
- Accessible with semantic HTML and ARIA labels
- Contact form with spam protection
- Animated particle background
- Interactive floating dashboard
- Smooth scroll navigation

## Performance

- Static generation where possible
- Optimized images
- Lazy-loaded components
- Reduced motion support
- Minimal JavaScript footprint
