import type { Metadata } from "next";

import { SinglePublicationPageContent } from "@/components/pages/SinglePublicationPageContent";
import { getContentResolver } from "@/lib/site/content";

export const metadata: Metadata = {
  title: "Publication | Hiraad Institute",
  description: "Detailed publication page with abstract, citation details, key findings, recommendations, and downloads."
};

export default async function PublicationDetailPage() {
  const c = await getContentResolver("single-publication");
  return <SinglePublicationPageContent c={c} />;
}
