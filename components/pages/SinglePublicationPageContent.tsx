import { CTASection } from "@/components/site/CTASection";
import { DetailArticleLayout } from "@/components/site/DetailArticleLayout";
import { PageShell } from "@/components/site/PageShell";
import type { ContentResolver } from "@/lib/site/types";

interface SinglePublicationPageContentProps {
  c: ContentResolver;
}

export function SinglePublicationPageContent({ c }: SinglePublicationPageContentProps) {
  return (
    <PageShell t={c.t}>
      <DetailArticleLayout
        breadcrumb={c.t("singlePublication.breadcrumb", "Publications / Policy Brief")}
        title={c.t("singlePublication.title", "Decentralization and service delivery performance in the Somali Region")}
        metaLine={c.t(
          "singlePublication.meta",
          "Published: July 2025 · Type: Policy Brief · Author: Hiraad Institute"
        )}
        introTitle={c.t("singlePublication.intro.title", "Abstract")}
        introText={c.t(
          "singlePublication.intro.text",
          "This publication analyzes delivery bottlenecks across selected sectors in the Somali Region and identifies institutional pathways for improving local implementation quality under Ethiopia's federal framework."
        )}
        detailsTitle={c.t("singlePublication.details.title", "Citation and publication details")}
        detailCards={[
          {
            label: c.t("singlePublication.details.authors.label", "AUTHORS"),
            value: c.t(
              "singlePublication.details.authors.value",
              "Hiraad Institute Governance and Service Delivery Unit"
            )
          },
          {
            label: c.t("singlePublication.details.citation.label", "CITATION"),
            value: c.t(
              "singlePublication.details.citation.value",
              "Hiraad Institute. (2025). Decentralization and service delivery performance in the Somali Region."
            )
          },
          {
            label: c.t("singlePublication.details.reference.label", "REFERENCE"),
            value: c.t("singlePublication.details.reference.value", "Language: English · 28 pages · PDF + Data Appendix")
          }
        ]}
        blockOneTitle={c.t("singlePublication.findings.title", "Key findings")}
        blockOneText={c.t(
          "singlePublication.findings.text",
          "• Sub-regional implementation gaps remain strongly associated with staffing and budget execution constraints. • Service coverage disparities are highest in remote woredas with weak coordination interfaces. • Community trust improves where local accountability channels are formalized and consistently used."
        )}
        blockTwoTitle={c.t("singlePublication.recommendations.title", "Policy recommendations")}
        blockTwoText={c.t(
          "singlePublication.recommendations.text",
          "• Establish quarterly regional-local coordination reviews with measurable implementation indicators. • Strengthen woreda-level public reporting for service plans, budgets, and progress. • Integrate citizen feedback mechanisms into sector performance monitoring frameworks."
        )}
        assetTitle={c.t("singlePublication.assets.title", "Download publication package")}
        assetText={c.t("singlePublication.assets.text", "PDF brief, summary slides, and supporting data table")}
        assetPrimaryLabel={c.t("singlePublication.assets.primary", "Download Brief (PDF)")}
        assetPrimaryHref="#download"
        assetSecondaryLabel={c.t("singlePublication.assets.secondary", "Download Data Table")}
        assetSecondaryHref="#download-data"
        relatedTitle={c.t("singlePublication.related.title", "Related publications")}
        related={[
          {
            meta: c.t("singlePublication.related.1.meta", "RESEARCH REPORT"),
            title: c.t("singlePublication.related.1.title", "Climate vulnerability and adaptive livelihoods in pastoral districts"),
            href: "/publications/decentralization-service-delivery-performance-somali-region"
          },
          {
            meta: c.t("singlePublication.related.2.meta", "DISCUSSION PAPER"),
            title: c.t("singlePublication.related.2.title", "Federalism, political identity, and state-society trust"),
            href: "/publications/decentralization-service-delivery-performance-somali-region"
          },
          {
            meta: c.t("singlePublication.related.3.meta", "POLICY NOTE"),
            title: c.t("singlePublication.related.3.title", "Strengthening community-based peace mechanism design"),
            href: "/publications/decentralization-service-delivery-performance-somali-region"
          }
        ]}
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
