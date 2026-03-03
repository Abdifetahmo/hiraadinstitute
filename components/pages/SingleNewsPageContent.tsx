import { CTASection } from "@/components/site/CTASection";
import { DetailArticleLayout } from "@/components/site/DetailArticleLayout";
import { PageShell } from "@/components/site/PageShell";
import type { NewsContent, RelatedNewsItem } from "@/lib/site/news";
import type { ContentResolver } from "@/lib/site/types";

interface SingleNewsPageContentProps {
  c: ContentResolver;
  news: NewsContent;
  relatedNews: RelatedNewsItem[];
}

export function SingleNewsPageContent({ c, news, relatedNews }: SingleNewsPageContentProps) {
  return (
    <PageShell t={c.t}>
      <DetailArticleLayout
        breadcrumb={news.breadcrumb}
        title={news.title}
        metaLine={news.metaLine}
        introTitle={news.introTitle}
        introText={news.introText}
        detailsTitle={news.detailsTitle}
        detailCards={[
          {
            label: c.t("singleNews.details.author.label", "AUTHOR"),
            value: news.author
          },
          {
            label: c.t("singleNews.details.location.label", "LOCATION"),
            value: news.location
          },
          {
            label: c.t("singleNews.details.source.label", "SOURCE"),
            value: news.source
          }
        ]}
        blockOneTitle={news.blockOneTitle}
        blockOneText={news.blockOneText}
        blockTwoTitle={news.blockTwoTitle}
        blockTwoText={news.blockTwoText}
        assetTitle={news.assetTitle}
        assetText={news.assetText}
        assetPrimaryLabel={news.assetPrimaryLabel}
        assetPrimaryHref={news.assetPrimaryHref}
        assetSecondaryLabel={news.assetSecondaryLabel}
        assetSecondaryHref={news.assetSecondaryHref}
        relatedTitle={c.t("singleNews.related.title", "Related stories")}
        related={relatedNews.map((item) => ({
          meta: item.meta,
          title: item.title,
          href: `/news/${item.slug}`
        }))}
      />

      <CTASection
        title={c.t("singleNews.cta.title", "Collaborate with us to amplify\nevidence-based public dialogue")}
        description={c.t(
          "singleNews.cta.description",
          "We work with institutions, media partners, and community actors to turn timely field evidence into actionable public knowledge across the Somali Region and the Horn of Africa."
        )}
        primaryLabel={c.t("singleNews.cta.primary", "Share a Story Lead")}
        primaryHref="/contact"
        secondaryLabel={c.t("singleNews.cta.secondary", "Subscribe to News")}
        secondaryHref="#newsletter"
      />
    </PageShell>
  );
}
