# CLAUDE.md — Hiraad Institute

AI assistant reference for the Hiraad Institute website codebase.

## Project Overview

**Hiraad Institute** is a Next.js 14 App Router website backed by Sanity headless CMS. It renders institutional pages (home, about, research, publications, events, news, contact) with content that can be overridden via Sanity Studio without code changes.

**Tech stack:**
- **Next.js** 14.2 (App Router, server components, ISR)
- **React** 18.3
- **TypeScript** 5.8 (strict mode)
- **Sanity** 3.77 (headless CMS + embedded Studio at `/studio`)
- **Lucide React** (icons)
- No linting config (ESLint/Prettier not set up), no test framework, no CI/CD

---

## Development Commands

```bash
npm run dev          # Start dev server (also clears .next cache first)
npm run build        # Production build
npm run start        # Serve production build
npm run sanity:seed  # Seed Sanity with initial pageContent documents (one per page)
```

---

## Environment Setup

```bash
cp .env.example .env.local
```

Required variables (see `.env.example`):

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name (default: `production`) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | API version (default: `2025-01-01`) |
| `SANITY_API_READ_TOKEN` | Server-side read token (optional for published content) |
| `SANITY_API_WRITE_TOKEN` | Required only for running `sanity:seed` |

Sanity Studio is available at `http://localhost:3000/studio` once the dev server is running.

---

## Directory Structure

```
/
├── app/                        # Next.js App Router routes
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── page.tsx                # Home route
│   ├── about/page.tsx
│   ├── research/page.tsx
│   ├── publications/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx     # Dynamic publication detail
│   ├── events/page.tsx
│   ├── contact/page.tsx
│   ├── news-media/page.tsx
│   ├── news/[slug]/page.tsx    # Dynamic news detail
│   ├── studio/[[...index]]/    # Sanity Studio (catch-all route)
│   └── globals.css             # All styles (BEM-like, single file)
│
├── components/
│   ├── pages/                  # Page-level compositions (one per route)
│   │   ├── HomePageContent.tsx
│   │   ├── AboutPageContent.tsx
│   │   └── ...
│   └── site/                   # Shared/reusable UI components
│       ├── SiteHeader.tsx      # ("use client" — mobile menu state)
│       ├── SiteFooter.tsx
│       ├── PageShell.tsx       # Layout wrapper (header + footer)
│       ├── Cards.tsx           # IconCard, PublicationCard, StatItem, etc.
│       ├── ButtonLink.tsx      # Smart link (internal vs external)
│       ├── PageHero.tsx
│       ├── CTASection.tsx
│       ├── SectionIntro.tsx
│       ├── DetailArticleLayout.tsx
│       ├── SiteMotion.tsx      # Animation utilities
│       ├── InteractivePublicationList.tsx
│       └── BackToTopButton.tsx
│
├── lib/
│   ├── sanity/
│   │   ├── client.ts           # Sanity client (useCdn: false)
│   │   ├── queries.ts          # GROQ query definitions
│   │   ├── types.ts            # TypeScript interfaces for Sanity data
│   │   └── content.ts          # getPageContent(slug) — fetches from Sanity
│   └── site/
│       ├── types.ts            # PageSlug type, ContentResolver interface
│       └── content.ts          # getContentResolver(slug) — main data abstraction
│
├── sanity/
│   ├── schemaTypes/
│   │   ├── index.ts
│   │   ├── pageContent.ts      # Main document type
│   │   └── objects/
│   │       ├── textOverride.ts
│   │       └── imageOverride.ts
│   └── ...
│
├── scripts/
│   └── seed-sanity-content.ts  # Creates initial pageContent docs in Sanity
│
├── public/images/              # Static assets
├── next.config.mjs             # Allows remote images from images.unsplash.com
├── sanity.config.ts            # Sanity Studio config (basePath: /studio)
├── sanity.cli.ts               # Sanity CLI config
└── tsconfig.json               # Strict TS, path alias @/* → ./*
```

---

## Key Conventions

### File Naming
- **React components**: `PascalCase.tsx` (e.g., `PageShell.tsx`, `HomePageContent.tsx`)
- **Utilities/hooks**: `camelCase.ts` (e.g., `content.ts`, `client.ts`)
- **GROQ query constants**: `SCREAMING_SNAKE_CASE` (e.g., `PAGE_CONTENT_QUERY`)

### Import Paths
Always use the `@/` alias (never relative paths from nested files):
```typescript
import { ButtonLink } from "@/components/site/ButtonLink";
import type { ContentResolver } from "@/lib/site/types";
```

### Server vs Client Components
- Components are **server components by default** (no directive needed)
- Add `"use client"` only when using hooks (`useState`, `useEffect`, `usePathname`, etc.)
- Currently, only `SiteHeader`, `ChunkLoadRecovery`, and a few interactive components use `"use client"`

### TypeScript
- Strict mode is on — avoid `any`, never disable strict checks
- Use `import type` for type-only imports
- Props interfaces are inline or named `ComponentNameProps`

### CSS
- All styles live in `app/globals.css` (no CSS modules, no Tailwind, no CSS-in-JS)
- Class naming is BEM-like: `hero-home`, `section--surface`, `card__title`
- Use template literals for conditional classes: `` `nav-link ${isActive ? "nav-link--active" : ""}` ``

---

## Content Resolver Pattern

This is the core abstraction for CMS-driven content. Every page fetches a resolver and uses it to get text/image values with hardcoded fallbacks.

### How it works

```typescript
// app/page.tsx (or any page route)
import { getContentResolver } from "@/lib/site/content";

export default async function HomePage() {
  const c = await getContentResolver("home");
  return <HomePageContent c={c} />;
}
```

```typescript
// components/pages/HomePageContent.tsx
import type { ContentResolver } from "@/lib/site/types";

export function HomePageContent({ c }: { c: ContentResolver }) {
  return (
    <h1>{c.t("home.hero.title", "Advancing Knowledge")}</h1>
    // c.t(key, fallback) — returns Sanity override or fallback string
    // c.i(key, fallback) — returns Sanity image URL or fallback URL
  );
}
```

### Key naming convention for content keys
Use dot-notation: `{page}.{section}.{field}` — e.g.:
- `home.hero.title`
- `home.hero.image`
- `about.mission.body`
- `shared.cta.title`

---

## Sanity CMS

### Schema
The single document type is `pageContent`:
- `slug` (string, required) — page identifier (e.g., `"home"`, `"about"`)
- `textOverrides[]` — array of `{ nodeName, value }` pairs
- `imageOverrides[]` — array of `{ nodeName, url }` pairs

### GROQ Query (`lib/sanity/queries.ts`)
```groq
*[_type == "pageContent" && slug == $slug][0] {
  slug,
  textOverrides[]{ nodeName, nodeId, value },
  imageOverrides[]{ nodeName, nodeId, url }
}
```

### Data Fetching
- Fetched server-side in async page components
- ISR revalidation: **30 seconds** (`{ next: { revalidate: 30 } }`)
- `useCdn: false` — always fetches fresh published content

### Valid page slugs (`lib/site/types.ts`)
`home`, `about`, `research`, `publications`, `events`, `contact`, `news-media`, `single-publication`, `single-news`

---

## Component Patterns

### `components/site/` — Reusable UI primitives
- Self-contained, accept typed props, usable across pages
- `ButtonLink` auto-detects internal vs external links (uses `<Link>` or `<a>` accordingly)
- `Cards.tsx` exports multiple card variants: `IconCard`, `PublicationCard`, `NumberedRow`, `StatItem`, `CompactCard`
- All cards support an optional `href` prop with conditional link wrapping

### `components/pages/` — Page compositions
- One component per page, named `{PageName}PageContent.tsx`
- Always receive `c: ContentResolver` as a prop
- Compose from `site/` components and use `c.t()` / `c.i()` for content

### Conditional link wrapping pattern
```typescript
// Common pattern in site/ components
const content = <span className="card__title">{title}</span>;
if (!href) return content;
return <Link href={href}>{content}</Link>;
```

---

## Adding a New Page

1. **Create the route**: `app/{page-name}/page.tsx`
   ```typescript
   import { getContentResolver } from "@/lib/site/content";
   import { NewPageContent } from "@/components/pages/NewPageContent";

   export default async function NewPage() {
     const c = await getContentResolver("new-page"); // add slug to PAGE_SLUGS first
     return <NewPageContent c={c} />;
   }
   ```

2. **Add slug**: Add `"new-page"` to the `PAGE_SLUGS` array in `lib/site/types.ts`

3. **Create page component**: `components/pages/NewPageContent.tsx`
   - Accept `c: ContentResolver` prop
   - Use `<PageShell>` as layout wrapper
   - Use `c.t()` and `c.i()` with sensible fallbacks

4. **Seed Sanity**: Add a seed entry in `scripts/seed-sanity-content.ts` and run `npm run sanity:seed`

---

## What Does Not Exist

- No ESLint or Prettier configuration
- No test framework (no Jest, Vitest, or React Testing Library)
- No CI/CD pipelines or GitHub Actions
- No PR or issue templates
- No Storybook or component documentation
- No API routes (`app/api/`)
