# Quick Setup Guide

## Prerequisites

You need Node.js 18+ and pnpm installed. If you don't have them:

### Install Node.js
```bash
# Using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18

# Or download from https://nodejs.org
```

### Install pnpm
```bash
npm install -g pnpm
```

## Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open http://localhost:3000 to see the site.

## What's Included

✅ All pages created and functional:
- Home (/)
- Why Us (/why-us)
- Services (/services)
- Methodology (/methodology)
- About (/about)
- Contact (/contact)
- Careers (/careers)

✅ All interactive components:
- Custom animated cursor
- Cursor logo particles
- Parallax hero lines
- Staggered reveal animations
- Animated metric counters
- Sticky CTA
- Auto-scrolling logo strip
- Interactive GTM Engine diagram

✅ Accessibility features:
- Respects prefers-reduced-motion
- Strong focus outlines
- High contrast colors
- Keyboard navigation

✅ Placeholder logos included (replace with real brand logos)

## Next Steps

1. **Replace placeholder logos** in `/public/logos/` with actual brand SVG files
2. **Update content** in `/content/home.mdx` and `/content/common.json`
3. **Add real images** for the About page (Kevin's photo)
4. **Configure form submission** in `/app/contact/page.tsx` (currently logs to console)
5. **Update contact email** in `/content/common.json`
6. **Add analytics** (Google Analytics, Plausible, etc.)
7. **Set up deployment** on Vercel or your preferred platform

## Testing Motion Features

To test that motion effects properly disable:

1. Open DevTools
2. Command Palette (Cmd/Ctrl + Shift + P)
3. Type "Emulate CSS prefers-reduced-motion"
4. Select "reduce"
5. Refresh the page - all animations should be disabled

## Build for Production

```bash
pnpm build
pnpm start
```

## Troubleshooting

If you see errors about missing modules:
```bash
rm -rf node_modules .next
pnpm install
```

If TypeScript errors appear:
```bash
pnpm tsc --noEmit
```

## Support

See README.md for full documentation.
