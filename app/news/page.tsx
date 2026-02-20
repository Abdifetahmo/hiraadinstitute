import { NewsGrid } from '@/src/components/news-grid';
import { PageHero } from '@/src/components/page-hero';
import { getNewsItems } from '@/src/lib/content/loaders';

export const metadata = {
  title: 'News and Events'
};

export default async function NewsPage() {
  const items = await getNewsItems();

  return (
    <main className="shell page-wrap section-bottom-gap">
      <PageHero
        title="News and Events"
        subtitle="Institutional Updates and Public Dialogue"
        lead="Track Hiraad forums, policy seminars, outreach activities, and institutional milestones documented across 2024-2025."
      />
      <NewsGrid items={items} />
    </main>
  );
}
