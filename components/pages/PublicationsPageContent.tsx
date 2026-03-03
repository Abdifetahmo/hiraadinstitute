import { CTASection } from "@/components/site/CTASection";
import { InteractivePublicationList } from "@/components/site/InteractivePublicationList";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionIntro } from "@/components/site/SectionIntro";
import type { PublicationListItem } from "@/lib/site/publications";
import type { ContentResolver } from "@/lib/site/types";

interface PublicationsPageContentProps {
  c: ContentResolver;
  publications: PublicationListItem[];
}

export function PublicationsPageContent({ c, publications }: PublicationsPageContentProps) {
  const publicationTypes = [
    [
      c.t("publications.types.1.title", "Research Reports"),
      c.t(
        "publications.types.1.description",
        "Comprehensive studies with methodology, findings, and policy implications for medium- and long-term planning."
      )
    ],
    [
      c.t("publications.types.2.title", "Policy Briefs"),
      c.t(
        "publications.types.2.description",
        "Concise, actionable recommendations tailored to active policy windows and institutional decision cycles."
      )
    ],
    [
      c.t("publications.types.3.title", "Commentary & Analysis"),
      c.t(
        "publications.types.3.description",
        "Interpretive articles on current issues to enrich public discourse with evidence-informed perspectives."
      )
    ],
    [
      c.t("publications.types.4.title", "Forum Proceedings"),
      c.t(
        "publications.types.4.description",
        "Documented outcomes from HADAF, policy seminars, and multi-stakeholder dialogues."
      )
    ],
    [
      c.t("publications.types.5.title", "Technical Notes"),
      c.t(
        "publications.types.5.description",
        "Focused issue papers responding quickly to specialized or emerging policy questions."
      )
    ],
    [
      c.t("publications.types.6.title", "Data & Analytical Outputs"),
      c.t(
        "publications.types.6.description",
        "Curated datasets, indicators, and visual summaries that strengthen transparency and secondary analysis."
      )
    ]
  ];

  const thematicCoverage = [
    c.t("publications.theme.1", "Peace, conflict, and social cohesion"),
    c.t("publications.theme.2", "Policy, governance, and accountability"),
    c.t("publications.theme.3", "Pastoralism, agriculture, and livelihoods"),
    c.t("publications.theme.4", "Social services and human development"),
    c.t("publications.theme.5", "Climate and environmental resilience"),
    c.t("publications.theme.6", "Economic development and transformation"),
    c.t("publications.theme.7", "Religion, culture, and social values"),
    c.t("publications.theme.8", "History, heritage, and collective memory")
  ];

  const recentPublications = publications.map((publication, index) => {
    const key = index + 1;
    return {
      kind: publication.kind,
      meta: c.t(`publications.recent.${key}.meta`, publication.meta),
      title: c.t(`publications.recent.${key}.title`, publication.title),
      description: c.t(`publications.recent.${key}.description`, publication.description),
      tags: c.t(`publications.recent.${key}.tags`, publication.tags),
      button: c.t(`publications.recent.${key}.button`, publication.button),
      href: `/publications/${publication.slug}`
    };
  });

  return (
    <PageShell t={c.t}>
      <PageHero
        eyebrow={c.t("publications.hero.eyebrow", "PUBLICATIONS")}
        title={c.t("publications.hero.title", "Knowledge production for policy impact")}
        description={c.t(
          "publications.hero.description",
          "Hiraad publications translate field-grounded evidence into policy-relevant outputs for decision-makers, practitioners, media, and communities in the Somali Region and beyond."
        )}
      />

      <section className="section section--surface publications-types">
        <div className="container">
          <SectionIntro
            eyebrow={c.t("publications.types.eyebrow", "KNOWLEDGE PRODUCTS")}
            title={c.t("publications.types.title", "Publication portfolio")}
            description={c.t(
              "publications.types.description",
              "Each format serves a distinct policy function while maintaining analytical rigor, contextual depth, and practical usability."
            )}
            eyebrowTone="accent"
            size="xl"
          />

          <div className="grid grid--three">
            {publicationTypes.map(([title, description]) => (
              <article key={title} className="info-card">
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted publications-thematic">
        <div className="container">
          <SectionIntro
            eyebrow={c.t("publications.thematic.eyebrow", "THEMATIC COVERAGE")}
            title={c.t("publications.thematic.title", "Core research domains")}
            description={c.t(
              "publications.thematic.description",
              "All publication outputs are organized around Hiraad’s eight interconnected thematic domains."
            )}
            eyebrowTone="accent"
            size="xl"
          />

          <div className="chip-grid">
            {thematicCoverage.map((item) => (
              <span key={item} className="chip chip--bordered">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface publications-editorial">
        <div className="container">
          <article className="editorial-standards">
            <h2>{c.t("publications.editorial.title", "Editorial standards, quality assurance, and accessibility")}</h2>
            <p>
              {c.t(
                "publications.editorial.description",
                "Outputs undergo internal and peer-informed review for methodological integrity, analytical coherence, and policy usability. Publications are disseminated through reports, summaries, digital media, and public events to maximize reach and accountability."
              )}
            </p>
          </article>
        </div>
      </section>

      <section className="section section--surface section--topless publications-featured">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow={c.t("publications.recent.eyebrow", "LATEST PUBLICATIONS")}
              title={c.t("publications.recent.title", "Recent reports, briefs, and analysis")}
              description={c.t(
                "publications.recent.description",
                "Browse recent Hiraad publications across governance, social cohesion, climate resilience, and economic transformation."
              )}
              eyebrowTone="accent"
              size="xl"
            />
          </div>

          <InteractivePublicationList
            items={recentPublications}
            labels={{
              allFormats: c.t("publications.filter.all", "All Formats"),
              briefs: c.t("publications.filter.briefs", "Policy Briefs"),
              reports: c.t("publications.filter.reports", "Reports"),
              sortedByNewest: c.t("publications.filter.sorted", "Sorted by newest"),
              browseArchive: c.t("publications.browse", "Browse Archive")
            }}
          />
        </div>
      </section>

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
