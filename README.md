# Hiraad Institute Website

A lightweight redesign of the Hiraad Institute website built with **Next.js 16** and **Sanity CMS**.

## Stack

- Next.js (App Router, TypeScript)
- Sanity Studio (embedded at `/studio`)
- next-sanity for content queries
- Pure CSS (no heavy UI framework)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env.local
```

Set:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

3. Run the website:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

4. Open Sanity Studio:

Visit [http://localhost:3000/studio](http://localhost:3000/studio).

## Content Model

Sanity schemas are in `src/sanity/schemaTypes`:

- `siteSettings`
- `homeContent`
- `page`
- `newsItem`
- `publication`

## Fallback Content

The site has built-in fallback content in `src/lib/content/fallback.ts` derived from the provided Hiraad Word documents, so pages render immediately even before CMS data is added.

## Project Structure

- `app/` - Next.js routes and layout
- `src/components/` - Reusable UI components
- `src/lib/content/` - Content loaders and fallback data
- `src/lib/sanity/` - Sanity client and GROQ queries
- `src/sanity/` - Sanity schema definitions
- `public/images/logo.jpg` - Logo asset
