import { PageHero } from '@/src/components/page-hero';
import { PublicationGrid } from '@/src/components/publication-grid';
import { getPublicationItems } from '@/src/lib/content/loaders';

export const metadata = {
  title: 'Publications'
};

export default async function PublicationsPage() {
  const items = await getPublicationItems();

  return (
    <main className="shell page-wrap section-bottom-gap">
      <PageHero
        title="Publications"
        subtitle="Knowledge Production and Policy Engagement"
        lead="Our publication archive translates field-based research into policy-relevant outputs for decision-makers, practitioners, and the public."
      />
      <PublicationGrid items={items} />
    </main>
  );
}
