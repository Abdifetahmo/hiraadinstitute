import { CTASection } from "@/components/site/CTASection";
import { DetailArticleLayout } from "@/components/site/DetailArticleLayout";
import { PageShell } from "@/components/site/PageShell";
import type { PublicationContent, RelatedPublicationItem } from "@/lib/site/publications";
import type { ContentResolver } from "@/lib/site/types";

interface SinglePublicationPageContentProps {
  c: ContentResolver;
  publication: PublicationContent;
  relatedPublications: RelatedPublicationItem[];
}

export function SinglePublicationPageContent({ c, publication, relatedPublications }: SinglePublicationPageContentProps) {
  return (
    <PageShell t={c.t}>
      <DetailArticleLayout
        breadcrumb={publication.breadcrumb}
        title={publication.title}
        metaLine={publication.metaLine}
        introTitle={publication.introTitle}
        introText={publication.introText}
        detailsTitle={publication.detailsTitle}
        detailCards={publication.detailCards}
        blockOneTitle={publication.blockOneTitle}
        blockOneText={publication.blockOneText}
        blockTwoTitle={publication.blockTwoTitle}
        blockTwoText={publication.blockTwoText}
        assetTitle={publication.assetTitle}
        assetText={publication.assetText}
        assetPrimaryLabel={publication.assetPrimaryLabel}
        assetPrimaryHref={publication.assetPrimaryHref}
        assetSecondaryLabel={publication.assetSecondaryLabel}
        assetSecondaryHref={publication.assetSecondaryHref}
        relatedTitle={c.t("singlePublication.related.title", "Related publications")}
        related={relatedPublications.map((item) => ({
          meta: item.meta,
          title: item.title,
          href: `/publications/${item.slug}`
        }))}
      />

      <CTASection
        title={c.t("shared.cta.title", "Partner with us to shape\npolicy that matters")}
        description={c.t(
          "shared.cta.description",
          "Whether you are a government institution, international organization, academic partner, or civil society group, we welcome collaboration that strengthens evidence-based policymaking in the Horn of Africa."
        )}
        primaryLabel={c.t("shared.cta.primary", "Get In Touch")}
        primaryHref="/contact"
        secondaryLabel={c.t("shared.cta.secondary", "Subscribe to Updates")}
        secondaryHref="#newsletter"
      />
    </PageShell>
  );
}
