import type { Metadata } from "next";

import { NewsMediaPageContent } from "@/components/pages/NewsMediaPageContent";
import { getContentResolver } from "@/lib/site/content";

export const metadata: Metadata = {
  title: "News & Media | Hiraad Institute",
  description:
    "Read Hiraad Institute's latest institutional updates, commentary, media briefings, and archive resources."
};

export default async function NewsMediaPage() {
  const c = await getContentResolver("news-media");
  return <NewsMediaPageContent c={c} />;
}
