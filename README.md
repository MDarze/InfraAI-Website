# InfraAI Digital Solutions — Website

Static marketing website for InfraAI, a Saudi digital transformation and cybersecurity firm.

**Architecture:** Astro static site generator → GitHub Pages  
**Domain:** infraai-dx.com  
**Language:** Arabic (primary, RTL), English (secondary, LTR)

---

## Quick Start

### Prerequisites
- Node.js 20+
- npm 9+

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:3000/        (Arabic)
# http://localhost:3000/en/     (English)
```

### Build & Deploy

```bash
# Local build (generates /dist)
npm run build

# Preview production build
npm run preview

# Deploy: push to main branch → GitHub Actions auto-deploys to gh-pages
git push origin main
```

---

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml                 # GitHub Actions → GitHub Pages
├── public/
│   ├── CNAME                          # infraai-dx.com
│   ├── robots.txt
│   └── fonts/                         # Self-hosted font files (see below)
├── src/
│   ├── assets/
│   │   ├── blog/                      # Blog post images
│   │   ├── portfolio/                 # Case study images
│   │   └── team/                      # Team member photos
│   ├── components/
│   │   └── (coming in Step 2)
│   ├── content/
│   │   ├── blog/                      # .md blog posts
│   │   ├── portfolio/                 # .md case studies
│   │   └── (coming in Step 2)
│   ├── pages/
│   │   ├── index.astro                # Arabic home (/)
│   │   ├── en/
│   │   │   └── index.astro            # English home (/en/)
│   │   └── (coming in Steps 3-7)
│   ├── styles/
│   │   ├── tokens.css                 # Design system source of truth ⭐
│   │   └── global.css                 # Resets + base styles
│   └── env.d.ts
├── .astro/
├── dist/                              # Build output (generated)
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## Design System

### Tokens (`src/styles/tokens.css`)

All design decisions live in **`tokens.css`** — the single source of truth.

- **Colors:** Light-first palette + electric teal accent
- **Typography:** IBM Plex Sans Arabic, General Sans, IBM Plex Sans, JetBrains Mono
- **Spacing:** 8px base grid (--space-1 through --space-48)
- **Motion:** Two approved easing curves (no bouncy spring)
- **Components:** Nav, buttons, cards, forms, badges

**Apply tokens via CSS custom properties everywhere.** Never hardcode values.

### Typography

**Arabic (primary):**
- Display/Body: IBM Plex Sans Arabic (300, 400, 500, 600, 700)
- Size multiplier: ×1.05 for optical sizing
- Leading: ×1.15 for script descent accommodation
- Letter-spacing: zeroed (Arabic ligatures)

**English (secondary):**
- Display: General Sans (300–700)
- Body: IBM Plex Sans (300–600)
- Letter-spacing: preserved (–0.035em for hero, etc.)

**Mono:** JetBrains Mono (code, DX-OS callouts)

### Colors

```
Light-first: #FFFFFF canvas
Subtle: #FAFAFA alternating sections
Elevated: #F5F5F7 cards
Deep: #0A0A0B dark feature sections

Ink-900: #0A0A0B primary text
Ink-700: #3A3A42 body text
Ink-500: #6B6B74 secondary text
Ink-300: #C8C8CF borders
Ink-100: #EDEDEF dividers

Accent: #00B894 electric teal (4.55:1 contrast on white)
```

---

## Language & i18n

**Routing:**
- `/` → Arabic (RTL)
- `/en/` → English (LTR)

**Implementation:** Astro's built-in i18n (v5+)
- `src/pages/index.astro` → `/` (Arabic)
- `src/pages/en/index.astro` → `/en/` (English)
- All pages must have Arabic **and** English versions
- Use `dir="rtl"` and `lang="ar"` / `lang="en"` at `<html>` root
- Use **logical CSS properties** everywhere:
  - `margin-inline-start` instead of `margin-left`
  - `inset-inline-end` instead of `right`
  - `padding-block-start` instead of `padding-top`

**Language selector:** Top-right of nav. Stores preference in localStorage.

---

## Font Installation

### Fontsource Packages (Zero CDN)

**Already installed via npm:**
- @fontsource/ibm-plex-sans-arabic
- @fontsource/ibm-plex-sans
- @fontsource/jetbrains-mono

These are imported in `src/styles/global.css` and bundled at build time.

### General Sans (Manual)

**Not in npm. Manual download required:**

1. Visit https://www.fontshare.com/fonts/general-sans
2. Download all weights: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)
3. Copy `.woff2` files to `/public/fonts/`:
   ```
   public/fonts/
   ├── GeneralSans-Light.woff2
   ├── GeneralSans-Regular.woff2
   ├── GeneralSans-Medium.woff2
   ├── GeneralSans-Semibold.woff2
   └── GeneralSans-Bold.woff2
   ```
4. The `@font-face` declarations in `tokens.css` will load them.

---

## Development

### Create a New Page

1. Create `/src/pages/page-name.astro` (Arabic)
2. Create `/src/pages/en/page-name.astro` (English)
3. Import `src/styles/global.css` in both
4. Use design tokens from `src/styles/tokens.css`

Example:

```astro
---
import '../styles/global.css';
---

<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <h1>صفحتي</h1>
    <p>محتوى...</p>
  </body>
</html>
```

### Create a Component

1. Create `/src/components/MyComponent.astro`
2. Use Astro syntax (no React/Vue needed for static site)
3. Import `../styles/global.css` if styling
4. Use design tokens for all values

### Styling

- Scoped `<style>` inside `.astro` files
- Use CSS custom properties from `tokens.css`
- Use logical CSS properties (margin-inline, padding-block, etc.)

---

## Content Management

### Blog Posts

Create files in `/src/content/blog/`:

```markdown
---
title_ar: "العنوان بالعربية"
title_en: "Title in English"
category: "ai" | "dx" | "cybersecurity" | "vision2030"
date: 2024-04-14
author: "Author Name"
cover: "/src/assets/blog/image.jpg"
excerpt_ar: "المقتطف..."
excerpt_en: "Excerpt..."
draft: false
---

## Content in Markdown

Supports rich formatting, code blocks, etc.
```

Place images in `/src/assets/blog/`.

### Portfolio / Case Studies

Create files in `/src/content/portfolio/`:

```markdown
---
title_ar: "الاسم..."
title_en: "Name..."
client: "Client Name"
industry: "Construction | Infrastructure | Industrial"
service_pillar: "ai" | "dx" | "cybersecurity" | "reseller"
cover: "/src/assets/portfolio/image.jpg"
challenge_ar: "..."
challenge_en: "..."
date: 2024-04-14
featured: true
draft: false
---

## Challenge

## Approach

## Outcomes
```

---

## Deployment

### GitHub Pages Setup

1. Go to repo settings → **Pages**
2. Source: **Deploy from a branch** (deprecated, but set to `gh-pages`)
3. The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles everything
4. On push to `main`, GitHub Actions:
   - Builds Astro
   - Pushes to `gh-pages` branch
   - GitHub Pages auto-deploys

### Custom Domain (infraai-dx.com)

1. Update DNS provider to point `infraai-dx.com` → `<username>.github.io`
2. GitHub Pages will validate and enable HTTPS automatically
3. The `public/CNAME` file is already set

---

## Performance

- **Lighthouse target:** 95+
- **Astro static output:** Zero JavaScript by default
- **Images:** Astro `<Image>` component optimizes at build time
- **Fonts:** Self-hosted, preloaded in critical path
- **CSS:** Global reset + tokens, minimal final size

---

## Accessibility

- WCAG 2.2 AA compliant
- Semantic HTML
- Focus-visible rings (--accent colour)
- ≥44px touch targets
- Reduced-motion respect (all transitions disabled)
- Skip-to-content link included

---

## Admin / Content Editing

No login needed. Edit files directly in GitHub:

1. Go to `/src/content/blog/` or `/src/content/portfolio/`
2. Click **Edit** (pencil icon)
3. Modify Markdown frontmatter + content
4. Commit → GitHub Actions auto-deploys
5. Changes live in ~2 minutes

See `/admin/README.md` for full content guide.

---

## Standards

- **HTML:** Semantic
- **CSS:** Logical properties (RTL-safe), custom properties from tokens.css
- **JS:** Minimal (Astro static). Use native APIs only.
- **Fonts:** Self-hosted only (zero CDN)
- **Images:** WebP + fallback. Lazy-loaded.
- **SEO:** OpenGraph, Twitter cards, structured data (Organization, Service, Article)

---

## Build & Deployment Checklist

- [ ] Design tokens reviewed and approved
- [ ] Design system styleguide live (`/design-system/`)
- [ ] Arabic homepage built and translated
- [ ] English mirror built
- [ ] DX-OS product page live
- [ ] 4 service pages live
- [ ] Portfolio, Blog, About, Contact live
- [ ] Admin guide written (`/admin/README.md`)
- [ ] General Sans fonts downloaded and in `/public/fonts/`
- [ ] SEO metadata, hreflang, structured data
- [ ] Lighthouse 95+ all pages
- [ ] CNAME configured at DNS provider
- [ ] GitHub Pages Pages → Deploy from Branch: gh-pages
- [ ] First deploy successful

---

## Support

- **Astro docs:** https://docs.astro.build/
- **Fontsource:** https://fontsource.org/
- **General Sans:** https://www.fontshare.com/fonts/general-sans

---

**Status:** Step 1 complete — Scaffold + design tokens. Awaiting review.
