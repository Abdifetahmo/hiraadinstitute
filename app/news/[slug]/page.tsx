import type { Metadata } from "next";

import { SingleNewsPageContent } from "@/components/pages/SingleNewsPageContent";
import { getContentResolver } from "@/lib/site/content";

export const metadata: Metadata = {
  title: "News Story | Hiraad Institute",
  description: "Detailed news story page with story context, highlights, next steps, and media assets."
};

export default async function NewsDetailPage() {
  const c = await getContentResolver("single-news");
  return <SingleNewsPageContent c={c} />;
}
