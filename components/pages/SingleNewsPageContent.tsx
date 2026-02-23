import { CTASection } from "@/components/site/CTASection";
import { DetailArticleLayout } from "@/components/site/DetailArticleLayout";
import { PageShell } from "@/components/site/PageShell";
import type { ContentResolver } from "@/lib/site/types";

interface SingleNewsPageContentProps {
  c: ContentResolver;
}

export function SingleNewsPageContent({ c }: SingleNewsPageContentProps) {
  return (
    <PageShell t={c.t}>
      <DetailArticleLayout
        breadcrumb={c.t("singleNews.breadcrumb", "News & Media / Feature Story")}
        title={c.t(
          "singleNews.title",
          "Cross-border dialogue forum launches new regional peace and resilience platform"
        )}
        metaLine={c.t(
          "singleNews.meta",
          "Published: August 2025 · Category: News Feature · By: Hiraad Communications"
        )}
        introTitle={c.t("singleNews.intro.title", "Lead")}
        introText={c.t(
          "singleNews.intro.text",
          "Hiraad Institute convened regional stakeholders, local administrators, civil society leaders, and youth representatives to launch a practical platform for cross-border cooperation on peacebuilding, climate resilience, and inclusive public service delivery."
        )}
        detailsTitle={c.t("singleNews.details.title", "Story details")}
        detailCards={[
          {
            label: c.t("singleNews.details.author.label", "AUTHOR"),
            value: c.t("singleNews.details.author.value", "Hiraad Institute Communications Team")
          },
          {
            label: c.t("singleNews.details.location.label", "LOCATION"),
            value: c.t("singleNews.details.location.value", "Jigjiga, Somali Region · Horn of Africa Dialogue Series")
          },
          {
            label: c.t("singleNews.details.source.label", "SOURCE"),
            value: c.t("singleNews.details.source.value", "Field coverage · Interviews · Event documentation")
          }
        ]}
        blockOneTitle={c.t("singleNews.highlights.title", "Highlights")}
        blockOneText={c.t(
          "singleNews.highlights.text",
          "• Regional and local leaders endorsed a joint dialogue framework focused on practical implementation. • Participants prioritized collaboration on social cohesion, drought response, and youth economic inclusion. • Community-led accountability mechanisms were identified as central to sustained trust-building."
        )}
        blockTwoTitle={c.t("singleNews.next.title", "What comes next")}
        blockTwoText={c.t(
          "singleNews.next.text",
          "• Publish a quarterly progress brief on commitments made through the forum. • Establish a rotating coordination mechanism across participating districts. • Expand documentation and public communication to strengthen transparency and citizen participation."
        )}
        assetTitle={c.t("singleNews.assets.title", "Download media package")}
        assetText={c.t("singleNews.assets.text", "Press note, event photos, and stakeholder quotes")}
        assetPrimaryLabel={c.t("singleNews.assets.primary", "Download Press Note")}
        assetPrimaryHref="#download"
        assetSecondaryLabel={c.t("singleNews.assets.secondary", "Download Photo Pack")}
        assetSecondaryHref="#download-data"
        relatedTitle={c.t("singleNews.related.title", "Related stories")}
        related={[
          {
            meta: c.t("singleNews.related.1.meta", "NEWS FEATURE"),
            title: c.t("singleNews.related.1.title", "Policy roundtable spotlights youth livelihoods in drought-affected districts"),
            href: "/news/cross-border-dialogue-forum-regional-peace-platform"
          },
          {
            meta: c.t("singleNews.related.2.meta", "EVENT UPDATE"),
            title: c.t("singleNews.related.2.title", "Regional data dialogue advances shared evidence standards"),
            href: "/news/cross-border-dialogue-forum-regional-peace-platform"
          },
          {
            meta: c.t("singleNews.related.3.meta", "MEDIA BRIEF"),
            title: c.t("singleNews.related.3.title", "Community mediators share lessons from local peace platforms"),
            href: "/news/cross-border-dialogue-forum-regional-peace-platform"
          }
        ]}
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
