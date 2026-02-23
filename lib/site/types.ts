export const PAGE_SLUGS = [
  "home",
  "about",
  "research",
  "publications",
  "events",
  "contact",
  "news-media",
  "single-publication",
  "single-news"
] as const;

export type PageSlug = (typeof PAGE_SLUGS)[number];

export interface ContentResolver {
  t: (key: string, fallback: string) => string;
  i: (key: string, fallback: string) => string;
}
