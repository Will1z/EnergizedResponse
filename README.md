# Energized Response - Marketing Site

A production-ready marketing site for Energized Response, a GTM and RevOps agency for B2B SaaS companies.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for micro-interactions
- **Lenis** for smooth scrolling
- **Lucide React** for icons
- **MDX** for content management

## Features

### Interactive Elements
- ✨ Custom animated cursor with glow effect on CTAs
- 🎯 Cursor logo particles (outbound tool logos that follow mouse movement)
- 🌊 Parallax hero lines that respond to mouse and scroll
- 📊 Animated metric counters
- 🎨 Staggered reveal animations
- 📍 Sticky CTA that appears after 30% scroll
- 🔄 Auto-scrolling client logo strip

### Accessibility
- ♿ Respects `prefers-reduced-motion` - disables all motion effects when set
- 🎯 Strong focus outlines on all interactive elements
- 🎨 High contrast color scheme (black/white with neon accents)
- ⌨️ Keyboard navigation support

### Performance
- ⚡ Optimized images with Next.js Image component
- 📦 Minimal bundle size (no heavy 3D libraries)
- 🚀 Fast page loads
- 💾 Lazy loading for non-critical sections

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm installed
- Basic knowledge of Next.js and React

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Add logo files to `/public/logos/` (see Logo Setup below)

4. Run the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Logo Setup

Add SVG logo files to `/public/logos/` with these exact filenames:

- `outreach.svg`
- `salesloft.svg`
- `apollo.svg`
- `clay.svg`
- `zoominfo.svg`
- `seamless.svg`
- `clearbit.svg`
- `lusha.svg`
- `hubspot.svg`
- `salesforce.svg`

**Tip:** Use black/monochrome versions of logos for best results. The site applies grayscale filters by default and removes them on hover.

## Content Management

### Editing Page Content

Content is stored in MDX and JSON files in the `/content` folder:

- `content/home.mdx` - Homepage copy
- `content/common.json` - Sitewide strings (CTAs, contact email, metrics)

To edit content:

1. Open the relevant file in `/content`
2. Make your changes
3. Save the file - changes will hot-reload in development

### Adding New Pages

1. Create a new folder in `/app` (e.g., `/app/new-page`)
2. Add a `page.tsx` file
3. Import and use existing components like `Reveal`, `Hero`, etc.
4. Add the route to the navigation in `components/Nav.tsx`

### Updating Metrics

Edit `content/common.json`:

```json
{
  "socialProof": {
    "metric1": {
      "value": 150,
      "suffix": "%",
      "label": "Average Pipeline Growth"
    }
  }
}
```

## Color System

The site uses a high-contrast black and white base with neon accents:

- **Base:** `#000000` (black)
- **Background:** `#FFFFFF` (white)
- **Text Primary:** `#111111`
- **Text Secondary:** `#555555`
- **Accent Yellow:** `#FFD600` (electric yellow)
- **Accent Teal:** `#00FFC2` (mint teal)
- **Accent Pink:** `#FF0054` (hot pink)
- **Border:** `#E6E6E6`
- **Focus Ring:** `#00A2FF`

**Note:** Purple is intentionally avoided throughout the design.

## Component Overview

### Core Components

- **`AnimatedCursor.tsx`** - Custom cursor with glow effect on hover
- **`CursorLogos.tsx`** - Logo particles that spawn near cursor
- **`ParallaxLines.tsx`** - Animated SVG background lines
- **`Reveal.tsx`** - Intersection Observer wrapper for fade-up animations
- **`Metrics.tsx`** - Animated counter component
- **`StickyCTA.tsx`** - Sticky call-to-action that appears on scroll
- **`Nav.tsx`** - Navigation with scroll progress bar
- **`Footer.tsx`** - Site footer with links
- **`SmoothScroll.tsx`** - Lenis smooth scrolling wrapper

### Page Sections

- **`Hero.tsx`** - Homepage hero with parallax background
- **`ProofStrip.tsx`** - Auto-scrolling logo strip
- **`ValueProps.tsx`** - Feature cards with staggered reveals
- **`GTMEngine.tsx`** - Interactive SVG diagram
- **`SocialProof.tsx`** - Metrics and testimonials
- **`FinalCTA.tsx`** - Bottom CTA section

## Customization

### Disabling Motion Effects

Motion effects automatically disable for users with `prefers-reduced-motion: reduce` set. To test:

1. Open DevTools
2. Open Command Palette (Cmd/Ctrl + Shift + P)
3. Type "Emulate CSS prefers-reduced-motion"
4. Select "reduce"

### Adjusting Animation Timing

Edit the component files directly:

- Cursor logo spawn rate: `components/CursorLogos.tsx` (line 35)
- Parallax sensitivity: `components/ParallaxLines.tsx` (line 24)
- Reveal animation duration: `components/Reveal.tsx` (line 32)
- Counter animation speed: `components/Metrics.tsx` (line 23)

### Changing Colors

Edit `tailwind.config.ts` to update the color palette. Colors are also defined as CSS variables in `app/globals.css`.

## Pages

- `/` - Home
- `/why-us` - Why Energized Response Works
- `/services` - Service pillars
- `/about` - Meet Kevin
- `/methodology` - Process overview
- `/contact` - Contact form
- `/careers` - Careers page

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy - Vercel will auto-detect Next.js

### Other Platforms

Build the static site:

```bash
pnpm build
```

The output will be in `.next/` - deploy this folder to your hosting provider.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## Troubleshooting

### Logos not appearing

1. Check that logo files exist in `/public/logos/`
2. Verify filenames match exactly (case-sensitive)
3. Ensure logos are valid SVG files

### Motion effects not working

1. Check browser console for errors
2. Verify Framer Motion is installed: `pnpm list framer-motion`
3. Check if `prefers-reduced-motion` is enabled

### Build errors

1. Clear `.next` folder: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && pnpm install`
3. Check for TypeScript errors: `pnpm tsc --noEmit`

## License

Proprietary - All rights reserved

## Support

For questions or issues, contact: hello@energizedresponse.com
