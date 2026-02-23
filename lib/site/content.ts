import { getPageContent } from "@/lib/sanity/content";
import type { PageSlug, ContentResolver } from "@/lib/site/types";

export async function getContentResolver(slug: PageSlug): Promise<ContentResolver> {
  const doc = await getPageContent(slug);

  const textMap = new Map<string, string>();
  const imageMap = new Map<string, string>();

  for (const item of doc?.textOverrides ?? []) {
    const value = item.value?.trim();
    if (!value) continue;

    if (item.nodeName) {
      textMap.set(item.nodeName, value);
    }

    if (item.nodeId) {
      textMap.set(item.nodeId, value);
    }
  }

  for (const item of doc?.imageOverrides ?? []) {
    const value = item.url?.trim();
    if (!value) continue;

    if (item.nodeName) {
      imageMap.set(item.nodeName, value);
    }

    if (item.nodeId) {
      imageMap.set(item.nodeId, value);
    }
  }

  return {
    t(key, fallback) {
      return textMap.get(key) ?? fallback;
    },
    i(key, fallback) {
      return imageMap.get(key) ?? fallback;
    }
  };
}
