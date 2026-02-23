import type { Metadata } from "next";

import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { getContentResolver } from "@/lib/site/content";

export const metadata: Metadata = {
  title: "Get Involved | Hiraad Institute",
  description:
    "Collaborate with Hiraad Institute through partnerships, research collaboration, policy advisory, youth innovation, and media engagement."
};

export default async function ContactPage() {
  const c = await getContentResolver("contact");
  return <ContactPageContent c={c} />;
}
