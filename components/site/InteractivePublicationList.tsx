"use client";

import { useMemo, useState } from "react";

import { ButtonLink } from "@/components/site/ButtonLink";
import { PublicationListCard } from "@/components/site/Cards";

interface PublicationItem {
  kind: "brief" | "report" | "other";
  meta: string;
  title: string;
  description: string;
  tags: string;
  button: string;
}

interface InteractivePublicationListProps {
  items: PublicationItem[];
  href: string;
  labels: {
    allFormats: string;
    briefs: string;
    reports: string;
    sortedByNewest: string;
    browseArchive: string;
  };
}

type FilterKey = "all" | "brief" | "report";

export function InteractivePublicationList({ items, href, labels }: InteractivePublicationListProps) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    if (filter === "brief") return items.filter((item) => item.kind === "brief");
    return items.filter((item) => item.kind === "report");
  }, [filter, items]);

  return (
    <>
      <div className="publications-list-actions">
        <div className="chip-row">
          <button className={`chip chip-button ${filter === "all" ? "chip--active" : ""}`} type="button" onClick={() => setFilter("all")}>
            {labels.allFormats}
          </button>
          <button className={`chip chip-button ${filter === "brief" ? "chip--active" : ""}`} type="button" onClick={() => setFilter("brief")}>
            {labels.briefs}
          </button>
          <button className={`chip chip-button ${filter === "report" ? "chip--active" : ""}`} type="button" onClick={() => setFilter("report")}>
            {labels.reports}
          </button>
        </div>
        <div className="publications-right-actions">
          <span className="sort-note">{labels.sortedByNewest}</span>
          <ButtonLink href="/publications" label={labels.browseArchive} variant="accent" />
        </div>
      </div>

      <div className="stack">
        {filtered.map((item) => (
          <PublicationListCard
            key={item.title}
            meta={item.meta}
            title={item.title}
            description={item.description}
            tags={item.tags}
            buttonLabel={item.button}
            href={href}
          />
        ))}
      </div>
    </>
  );
}
