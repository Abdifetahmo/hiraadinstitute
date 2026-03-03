import type { Metadata } from "next";

import { PublicationsPageContent } from "@/components/pages/PublicationsPageContent";
import { getContentResolver } from "@/lib/site/content";
import { getPublicationsContent } from "@/lib/site/publications";

export const metadata: Metadata = {
  title: "Publications | Hiraad Institute",
  description:
    "Browse Hiraad Institute policy briefs, research reports, commentary, technical notes, and knowledge products."
};

export default async function PublicationsPage() {
  const [c, publications] = await Promise.all([getContentResolver("publications"), getPublicationsContent()]);
  return <PublicationsPageContent c={c} publications={publications} />;
}
