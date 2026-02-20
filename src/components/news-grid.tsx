import Link from 'next/link';

import type { NewsItem } from '@/src/lib/types';

interface NewsGridProps {
  items: NewsItem[];
  compact?: boolean;
}

export function NewsGrid({ items, compact = false }: NewsGridProps) {
  const renderedItems = compact ? items.slice(0, 3) : items;

  return (
    <div className="news-grid">
      {renderedItems.map((item, index) => (
        <article key={item.slug} className="news-card reveal" style={{ animationDelay: `${index * 90}ms` }}>
          <p className="meta">{new Date(item.date).toLocaleDateString()} • {item.location}</p>
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
          <span className="tag">{item.theme}</span>
        </article>
      ))}
      {compact ? (
        <div className="more-link-wrap">
          <Link className="text-link" href="/news">
            View all news and events
          </Link>
        </div>
      ) : null}
    </div>
  );
}
