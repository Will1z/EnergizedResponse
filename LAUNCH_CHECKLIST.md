# Launch Checklist

## Pre-Launch Tasks

### Content
- [ ] Replace all placeholder content in `/content/home.mdx`
- [ ] Update contact email in `/content/common.json`
- [ ] Update metrics values in `/content/common.json`
- [ ] Add real testimonials in `components/SocialProof.tsx`
- [ ] Add Kevin's bio and photo in `/app/about/page.tsx`
- [ ] Review all page copy for accuracy

### Assets
- [ ] Replace placeholder logos in `/public/logos/` with real brand SVGs
- [ ] Add favicon (`/public/favicon.ico`)
- [ ] Add Open Graph image (`/public/og-image.jpg`)
- [ ] Add Kevin's headshot for About page
- [ ] Optimize all images

### Functionality
- [ ] Set up form submission endpoint in `/app/contact/page.tsx`
- [ ] Test contact form submission
- [ ] Add email notification for form submissions
- [ ] Set up Calendly link in contact page
- [ ] Test all navigation links
- [ ] Test mobile menu

### SEO & Meta
- [ ] Update meta descriptions in each page
- [ ] Add structured data (JSON-LD)
- [ ] Create `robots.txt`
- [ ] Create `sitemap.xml`
- [ ] Set up Google Search Console
- [ ] Add canonical URLs

### Analytics & Tracking
- [ ] Add Google Analytics or Plausible
- [ ] Set up conversion tracking
- [ ] Add LinkedIn Insight Tag (if needed)
- [ ] Test analytics in production

### Performance
- [ ] Run Lighthouse audit (target 90+ on all metrics)
- [ ] Test on slow 3G connection
- [ ] Optimize images with next/image
- [ ] Enable compression on server
- [ ] Set up CDN (Vercel does this automatically)

### Accessibility
- [ ] Test with screen reader
- [ ] Test keyboard navigation
- [ ] Verify color contrast ratios
- [ ] Test with prefers-reduced-motion enabled
- [ ] Run axe DevTools audit

### Cross-Browser Testing
- [ ] Test on Chrome (desktop & mobile)
- [ ] Test on Safari (desktop & mobile)
- [ ] Test on Firefox
- [ ] Test on Edge
- [ ] Test on various screen sizes

### Legal & Compliance
- [ ] Add Privacy Policy page
- [ ] Add Terms of Service page
- [ ] Add cookie consent (if needed)
- [ ] Review GDPR compliance
- [ ] Add accessibility statement

### Deployment
- [ ] Set up production environment variables
- [ ] Configure custom domain
- [ ] Set up SSL certificate (Vercel does this automatically)
- [ ] Test production build locally (`pnpm build && pnpm start`)
- [ ] Deploy to staging environment
- [ ] Final QA on staging
- [ ] Deploy to production
- [ ] Set up monitoring (Sentry, LogRocket, etc.)

### Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor error logs
- [ ] Check analytics setup
- [ ] Test all forms and CTAs
- [ ] Monitor Core Web Vitals
- [ ] Set up uptime monitoring

## Quick Wins

These can be done immediately:

1. Update `content/common.json` with real contact email
2. Replace logo SVGs in `/public/logos/`
3. Update homepage copy in `content/home.mdx`
4. Add favicon
5. Set up form submission

## Nice to Have

- [ ] Add blog section
- [ ] Add case studies
- [ ] Add video testimonials
- [ ] Add live chat widget
- [ ] Add newsletter signup
- [ ] Add social media links
- [ ] Add team page (if expanding beyond Kevin)

## Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 90+
- Lighthouse SEO: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s
