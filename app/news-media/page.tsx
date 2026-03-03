import type { Metadata } from "next";

import { NewsMediaPageContent } from "@/components/pages/NewsMediaPageContent";
import { getContentResolver } from "@/lib/site/content";
import { getNewsContent } from "@/lib/site/news";

export const metadata: Metadata = {
  title: "News & Media | Hiraad Institute",
  description:
    "Read Hiraad Institute's latest institutional updates, commentary, media briefings, and archive resources."
};

export default async function NewsMediaPage() {
  const [c, newsItems] = await Promise.all([getContentResolver("news-media"), getNewsContent()]);
  return <NewsMediaPageContent c={c} newsItems={newsItems} />;
}
