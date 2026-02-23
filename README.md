# Hiraad Next.js + Sanity

This project is a fully coded Next.js App Router implementation of the Hiraad website design.

## Architecture

- Reusable UI components in `/components/site`
- Page-specific compositions in `/components/pages`
- Route files in `/app`
- Sanity CMS integration in `/lib/sanity` and `/sanity/schemaTypes`

## Routes

- `/`
- `/about`
- `/research`
- `/publications`
- `/events`
- `/contact`
- `/news-media`
- `/publications/[slug]`
- `/news/[slug]`
- `/studio` (Sanity Studio)

## CMS model

Sanity uses `pageContent` documents with:

- `slug` (page identifier)
- `textOverrides[]` with `nodeName` (key) and `value`
- `imageOverrides[]` with `nodeName` (key) and `url`

Example keys:

- `home.hero.title`
- `home.hero.image`
- `shared.cta.title`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env.local
```

3. Run app:

```bash
npm run dev
```

4. Open Studio:

- `http://localhost:3000/studio`

## Seed CMS documents

Creates one `pageContent` doc per page slug:

```bash
npm run sanity:seed
```
