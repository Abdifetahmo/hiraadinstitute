import type { Metadata } from "next";

import { PublicationsPageContent } from "@/components/pages/PublicationsPageContent";
import { getContentResolver } from "@/lib/site/content";

export const metadata: Metadata = {
  title: "Publications | Hiraad Institute",
  description:
    "Browse Hiraad Institute policy briefs, research reports, commentary, technical notes, and knowledge products."
};

export default async function PublicationsPage() {
  const c = await getContentResolver("publications");
  return <PublicationsPageContent c={c} />;
}
