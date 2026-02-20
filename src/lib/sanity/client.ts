import { createClient } from 'next-sanity';

import { sanityApiVersion, sanityDataset, sanityEnabled, sanityProjectId } from '@/src/lib/sanity/env';

export const sanityClient = sanityEnabled
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: true,
      perspective: 'published',
      token: process.env.SANITY_API_READ_TOKEN
    })
  : null;
