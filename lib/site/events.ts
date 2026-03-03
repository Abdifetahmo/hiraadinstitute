import { sanityClient, sanityEnabled } from "@/lib/sanity/client";
import { EVENT_BY_SLUG_QUERY, EVENT_SLUGS_QUERY, EVENTS_QUERY } from "@/lib/sanity/queries";

const EVENT_PLACEHOLDER_IMAGE = "/images/event-placeholder.svg";

interface SanityEventRow {
  slug?: string;
  title?: string;
  date?: string;
  category?: string;
  author?: string;
  location?: string;
  previewDescription?: string;
  introTitle?: string;
  introText?: string;
  detailsTitle?: string;
  highlightsTitle?: string;
  highlightsText?: string;
  assetTitle?: string;
  assetText?: string;
  assetPrimaryLabel?: string;
  assetPrimaryHref?: string;
  assetSecondaryLabel?: string;
  assetSecondaryHref?: string;
  previewImage?: string;
  galleryImages?: string[];
  relatedEventSlugs?: string[];
}

interface SlugRow {
  slug?: string;
}

export interface EventContent {
  slug: string;
  title: string;
  previewMeta: string;
  detailMeta: string;
  category: string;
  author: string;
  location: string;
  previewDescription: string;
  introTitle: string;
  introText: string;
  detailsTitle: string;
  highlightsTitle: string;
  highlightsText: string;
  assetTitle: string;
  assetText: string;
  assetPrimaryLabel: string;
  assetPrimaryHref: string;
  assetSecondaryLabel: string;
  assetSecondaryHref: string;
  previewImage: string;
  galleryImages: string[];
  relatedEventSlugs: string[];
}

function clean(value?: string): string {
  return value?.trim() ?? "";
}

function cleanUrl(value?: string): string | null {
  const normalized = clean(value);
  return normalized.length ? normalized : null;
}

function formatEventDate(value?: string): string {
  const normalized = clean(value);
  if (!normalized) return "";

  const dateOnlyMatch = normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (dateOnlyMatch) {
    const [_, year, month, day] = dateOnlyMatch;
    const utcDate = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC"
    }).format(utcDate);
  }

  const parsed = new Date(normalized);
  if (Number.isNaN(parsed.getTime())) return normalized;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(parsed);
}

function normalizeEvent(row: SanityEventRow | null): EventContent | null {
  if (!row) return null;

  const slug = clean(row.slug);
  if (!slug) return null;

  const previewImage = cleanUrl(row.previewImage) ?? EVENT_PLACEHOLDER_IMAGE;
  const galleryImages = (row.galleryImages ?? [])
    .map((image) => cleanUrl(image))
    .filter((image): image is string => Boolean(image));
  const location = clean(row.location);
  const category = clean(row.category);
  const author = clean(row.author);
  const date = formatEventDate(row.date);

  const previewMeta = [date, location, category].filter(Boolean).join(", ");
  const detailMeta = [location, author, category].filter(Boolean).join(" · ");

  return {
    slug,
    title: clean(row.title) || "Untitled Event",
    previewMeta,
    detailMeta,
    category,
    author,
    location,
    previewDescription: clean(row.previewDescription),
    introTitle: clean(row.introTitle),
    introText: clean(row.introText),
    detailsTitle: clean(row.detailsTitle),
    highlightsTitle: clean(row.highlightsTitle),
    highlightsText: clean(row.highlightsText),
    assetTitle: clean(row.assetTitle),
    assetText: clean(row.assetText),
    assetPrimaryLabel: clean(row.assetPrimaryLabel),
    assetPrimaryHref: clean(row.assetPrimaryHref),
    assetSecondaryLabel: clean(row.assetSecondaryLabel),
    assetSecondaryHref: clean(row.assetSecondaryHref),
    previewImage,
    galleryImages: galleryImages.length ? galleryImages : [previewImage],
    relatedEventSlugs: (row.relatedEventSlugs ?? []).map((value) => clean(value)).filter(Boolean)
  };
}

export async function getEventsContent(): Promise<EventContent[]> {
  if (!sanityEnabled || !sanityClient) {
    return [];
  }

  const rows = await sanityClient.fetch<SanityEventRow[]>(EVENTS_QUERY, {}, { next: { revalidate: 30 } });
  return rows.map((row) => normalizeEvent(row)).filter((row): row is EventContent => Boolean(row));
}

export async function getEventBySlug(slug: string): Promise<EventContent | null> {
  if (!sanityEnabled || !sanityClient) {
    return null;
  }

  const row = await sanityClient.fetch<SanityEventRow | null>(
    EVENT_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 30 } }
  );
  return normalizeEvent(row);
}

export async function getEventSlugs(): Promise<string[]> {
  if (!sanityEnabled || !sanityClient) {
    return [];
  }

  const rows = await sanityClient.fetch<SlugRow[]>(EVENT_SLUGS_QUERY, {}, { next: { revalidate: 30 } });
  return rows.map((row) => clean(row.slug)).filter(Boolean);
}
