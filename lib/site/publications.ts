import { sanityClient, sanityEnabled } from "@/lib/sanity/client";
import { PUBLICATION_BY_SLUG_QUERY, PUBLICATIONS_QUERY, PUBLICATION_SLUGS_QUERY } from "@/lib/sanity/queries";

type PublicationKind = "brief" | "report" | "other";

interface SlugRow {
  slug?: string;
}

interface SanityPublicationListRow {
  slug?: string;
  kind?: string;
  meta?: string;
  title?: string;
  description?: string;
  tags?: string;
  button?: string;
}

interface SanityPublicationDetailCard {
  label?: string;
  value?: string;
}

interface SanityRelatedPublication {
  slug?: string;
  meta?: string;
  title?: string;
}

interface SanityPublicationRow extends SanityPublicationListRow {
  breadcrumb?: string;
  metaLine?: string;
  introTitle?: string;
  introText?: string;
  detailsTitle?: string;
  detailCards?: SanityPublicationDetailCard[];
  blockOneTitle?: string;
  blockOneText?: string;
  blockTwoTitle?: string;
  blockTwoText?: string;
  assetTitle?: string;
  assetText?: string;
  assetPrimaryLabel?: string;
  assetPrimaryHref?: string;
  assetSecondaryLabel?: string;
  assetSecondaryHref?: string;
  relatedPublications?: SanityRelatedPublication[];
}

export interface PublicationListItem {
  slug: string;
  kind: PublicationKind;
  meta: string;
  title: string;
  description: string;
  tags: string;
  button: string;
}

export interface PublicationDetailCard {
  label: string;
  value: string;
}

export interface RelatedPublicationItem {
  slug: string;
  meta: string;
  title: string;
}

export interface PublicationContent extends PublicationListItem {
  breadcrumb: string;
  metaLine: string;
  introTitle: string;
  introText: string;
  detailsTitle: string;
  detailCards: PublicationDetailCard[];
  blockOneTitle: string;
  blockOneText: string;
  blockTwoTitle: string;
  blockTwoText: string;
  assetTitle: string;
  assetText: string;
  assetPrimaryLabel: string;
  assetPrimaryHref: string;
  assetSecondaryLabel: string;
  assetSecondaryHref: string;
  relatedPublications: RelatedPublicationItem[];
}

function clean(value?: string): string {
  return value?.trim() ?? "";
}

function normalizeKind(kind?: string): PublicationKind {
  if (kind === "brief" || kind === "report" || kind === "other") {
    return kind;
  }
  return "other";
}

function normalizePublicationListItem(row: SanityPublicationListRow | null): PublicationListItem | null {
  if (!row) return null;

  const slug = clean(row.slug);
  if (!slug) return null;

  return {
    slug,
    kind: normalizeKind(row.kind),
    meta: clean(row.meta),
    title: clean(row.title) || "Untitled Publication",
    description: clean(row.description),
    tags: clean(row.tags),
    button: clean(row.button) || "Open"
  };
}

function normalizeRelatedPublication(row: SanityRelatedPublication | null): RelatedPublicationItem | null {
  if (!row) return null;
  const slug = clean(row.slug);
  if (!slug) return null;

  return {
    slug,
    meta: clean(row.meta),
    title: clean(row.title) || "Untitled Publication"
  };
}

function normalizePublication(row: SanityPublicationRow | null): PublicationContent | null {
  const base = normalizePublicationListItem(row);
  if (!row || !base) return null;

  const detailCards = (row.detailCards ?? [])
    .map((card) => ({
      label: clean(card.label),
      value: clean(card.value)
    }))
    .filter((card) => card.label.length > 0 && card.value.length > 0);

  return {
    ...base,
    breadcrumb: clean(row.breadcrumb),
    metaLine: clean(row.metaLine),
    introTitle: clean(row.introTitle),
    introText: clean(row.introText),
    detailsTitle: clean(row.detailsTitle),
    detailCards,
    blockOneTitle: clean(row.blockOneTitle),
    blockOneText: clean(row.blockOneText),
    blockTwoTitle: clean(row.blockTwoTitle),
    blockTwoText: clean(row.blockTwoText),
    assetTitle: clean(row.assetTitle),
    assetText: clean(row.assetText),
    assetPrimaryLabel: clean(row.assetPrimaryLabel),
    assetPrimaryHref: clean(row.assetPrimaryHref),
    assetSecondaryLabel: clean(row.assetSecondaryLabel),
    assetSecondaryHref: clean(row.assetSecondaryHref),
    relatedPublications: (row.relatedPublications ?? [])
      .map((item) => normalizeRelatedPublication(item))
      .filter((item): item is RelatedPublicationItem => Boolean(item))
  };
}

export async function getPublicationsContent(): Promise<PublicationListItem[]> {
  if (!sanityEnabled || !sanityClient) {
    return [];
  }

  const rows = await sanityClient.fetch<SanityPublicationListRow[]>(PUBLICATIONS_QUERY, {}, { next: { revalidate: 30 } });
  return rows.map((row) => normalizePublicationListItem(row)).filter((row): row is PublicationListItem => Boolean(row));
}

export async function getPublicationBySlug(slug: string): Promise<PublicationContent | null> {
  if (!sanityEnabled || !sanityClient) {
    return null;
  }

  const row = await sanityClient.fetch<SanityPublicationRow | null>(
    PUBLICATION_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 30 } }
  );
  return normalizePublication(row);
}

export async function getPublicationSlugs(): Promise<string[]> {
  if (!sanityEnabled || !sanityClient) {
    return [];
  }

  const rows = await sanityClient.fetch<SlugRow[]>(PUBLICATION_SLUGS_QUERY, {}, { next: { revalidate: 30 } });
  return rows.map((row) => clean(row.slug)).filter(Boolean);
}
