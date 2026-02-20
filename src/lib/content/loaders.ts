import { cache } from 'react';

import {
  fallbackHome,
  fallbackNews,
  fallbackPages,
  fallbackPublications,
  fallbackSiteSettings
} from '@/src/lib/content/fallback';
import { sanityClient } from '@/src/lib/sanity/client';
import { sanityEnabled } from '@/src/lib/sanity/env';
import {
  homeContentQuery,
  newsItemsQuery,
  pageBySlugQuery,
  publicationItemsQuery,
  siteSettingsQuery
} from '@/src/lib/sanity/queries';
import type { HomeContent, NewsItem, PageContent, Publication, SiteSettings } from '@/src/lib/types';

const safeFetch = async <T,>(query: string, params: Record<string, unknown> | undefined, fallback: T): Promise<T> => {
  if (!sanityEnabled || !sanityClient) {
    return fallback;
  }

  try {
    const result = params
      ? await sanityClient.fetch<T | null>(query, params)
      : await sanityClient.fetch<T | null>(query);

    if (!result) {
      return fallback;
    }

    if (Array.isArray(result) && result.length === 0) {
      return fallback;
    }

    return result;
  } catch {
    return fallback;
  }
};

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  return safeFetch<SiteSettings>(siteSettingsQuery, undefined, fallbackSiteSettings);
});

export const getHomeContent = cache(async (): Promise<HomeContent> => {
  return safeFetch<HomeContent>(homeContentQuery, undefined, fallbackHome);
});

export const getPageContent = cache(async (slug: keyof typeof fallbackPages): Promise<PageContent> => {
  return safeFetch<PageContent>(pageBySlugQuery, { slug }, fallbackPages[slug]);
});

export const getNewsItems = cache(async (): Promise<NewsItem[]> => {
  return safeFetch<NewsItem[]>(newsItemsQuery, undefined, fallbackNews);
});

export const getPublicationItems = cache(async (): Promise<Publication[]> => {
  return safeFetch<Publication[]>(publicationItemsQuery, undefined, fallbackPublications);
});
