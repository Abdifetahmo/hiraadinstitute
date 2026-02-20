import Link from 'next/link';

import { ContentSections } from '@/src/components/content-sections';
import { PageHero } from '@/src/components/page-hero';
import { getPageContent } from '@/src/lib/content/loaders';

export const metadata = {
  title: 'Get Involved'
};

export default async function GetInvolvedPage() {
  const page = await getPageContent('get-involved');

  return (
    <main className="shell page-wrap section-bottom-gap">
      <PageHero title={page.title} subtitle={page.subtitle} lead={page.lead} />
      <ContentSections sections={page.sections} />
      {page.cta ? (
        <div className="page-cta reveal">
          <Link href={page.cta.href} className="button button-primary">
            {page.cta.label}
          </Link>
        </div>
      ) : null}
    </main>
  );
}
