import type { Metadata } from "next";

import { EventsPageContent } from "@/components/pages/EventsPageContent";
import { getContentResolver } from "@/lib/site/content";

export const metadata: Metadata = {
  title: "Events | Hiraad Institute",
  description:
    "Track Hiraad Institute's featured dialogues, forums, seminars, and ongoing community engagement programs."
};

export default async function EventsPage() {
  const c = await getContentResolver("events");
  return <EventsPageContent c={c} />;
}
