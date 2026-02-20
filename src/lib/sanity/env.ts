const fallbackApiVersion = '2025-01-01';

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? '';
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? fallbackApiVersion;

export const sanityEnabled = Boolean(sanityProjectId && sanityDataset);
