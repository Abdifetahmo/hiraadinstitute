import type { Metadata } from "next";

import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { getContentResolver } from "@/lib/site/content";

export const metadata: Metadata = {
  title: "About | Hiraad Institute",
  description:
    "Learn about Hiraad Institute's mission, vision, values, constituencies, and policy impact approach in the Somali Region and Horn of Africa."
};

export default async function AboutPage() {
  const c = await getContentResolver("about");
  return <AboutPageContent c={c} />;
}
