import Link from 'next/link';

import type { Publication } from '@/src/lib/types';

interface PublicationGridProps {
  items: Publication[];
  compact?: boolean;
}

export function PublicationGrid({ items, compact = false }: PublicationGridProps) {
  const renderedItems = compact ? items.slice(0, 4) : items;

  return (
    <div className="pub-grid">
      {renderedItems.map((item, index) => (
        <article key={item.slug} className="pub-card reveal" style={{ animationDelay: `${index * 80}ms` }}>
          <p className="meta">{item.type}</p>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <div className="tag-wrap">
            {item.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
      {compact ? (
        <div className="more-link-wrap">
          <Link className="text-link" href="/publications">
            Browse full publication archive
          </Link>
        </div>
      ) : null}
    </div>
  );
}
