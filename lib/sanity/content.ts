import type { PageSlug } from "@/lib/site/types";
import { sanityClient, sanityEnabled } from "@/lib/sanity/client";
import { PAGE_CONTENT_QUERY } from "@/lib/sanity/queries";
import type { SanityPageContent } from "@/lib/sanity/types";

export async function getPageContent(slug: PageSlug): Promise<SanityPageContent | null> {
  if (!sanityEnabled || !sanityClient) {
    return null;
  }

  const content = await sanityClient.fetch<SanityPageContent | null>(
    PAGE_CONTENT_QUERY,
    { slug },
    { next: { revalidate: 30 } }
  );
  return content;
}
