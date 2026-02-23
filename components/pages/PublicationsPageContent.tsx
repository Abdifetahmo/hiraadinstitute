import { CTASection } from "@/components/site/CTASection";
import { ButtonLink } from "@/components/site/ButtonLink";
import { PublicationListCard } from "@/components/site/Cards";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionIntro } from "@/components/site/SectionIntro";
import type { ContentResolver } from "@/lib/site/types";

interface PublicationsPageContentProps {
  c: ContentResolver;
}

export function PublicationsPageContent({ c }: PublicationsPageContentProps) {
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

  const recentPublications = [
    {
      meta: c.t("publications.recent.1.meta", "POLICY BRIEF · JUL 2025"),
      title: c.t(
        "publications.recent.1.title",
        "Decentralization and service delivery performance in the Somali Region"
      ),
      description: c.t(
        "publications.recent.1.description",
        "An evidence-based assessment of delivery bottlenecks and institutional coordination gaps across regional and local levels, with practical implementation recommendations."
      ),
      tags: c.t("publications.recent.1.tags", "Governance · Service Delivery · Accountability"),
      button: c.t("publications.recent.1.button", "Open Brief")
    },
    {
      meta: c.t("publications.recent.2.meta", "RESEARCH REPORT · JUN 2025"),
      title: c.t(
        "publications.recent.2.title",
        "Climate vulnerability and adaptive livelihoods in pastoral districts"
      ),
      description: c.t(
        "publications.recent.2.description",
        "Field-based analysis of drought risk, mobility constraints, and resilience pathways for pastoral and agro-pastoral households across selected districts."
      ),
      tags: c.t("publications.recent.2.tags", "Climate · Pastoralism · Livelihoods"),
      button: c.t("publications.recent.2.button", "Open Report")
    },
    {
      meta: c.t("publications.recent.3.meta", "DISCUSSION PAPER · MAY 2025"),
      title: c.t(
        "publications.recent.3.title",
        "Federalism, political identity, and state-society trust in the Somali Region"
      ),
      description: c.t(
        "publications.recent.3.description",
        "Analytical paper examining how federal arrangements, narrative framing, and institutional legitimacy shape public trust and policy implementation outcomes."
      ),
      tags: c.t("publications.recent.3.tags", "Federalism · Identity · Governance"),
      button: c.t("publications.recent.3.button", "Open Paper")
    },
    {
      meta: c.t("publications.recent.4.meta", "POLICY NOTE · APR 2025"),
      title: c.t(
        "publications.recent.4.title",
        "Strengthening community-based peace mechanisms in cross-border zones"
      ),
      description: c.t(
        "publications.recent.4.description",
        "Technical note on prevention-oriented peacebuilding design integrating local institutions, youth participation, and practical conflict early-warning approaches."
      ),
      tags: c.t("publications.recent.4.tags", "Peacebuilding · Conflict Prevention · Social Cohesion"),
      button: c.t("publications.recent.4.button", "Open Note")
    }
  ];

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

          <div className="publications-list-actions">
            <div className="chip-row">
              <span className="chip chip--active">{c.t("publications.filter.all", "All Formats")}</span>
              <span className="chip">{c.t("publications.filter.briefs", "Policy Briefs")}</span>
              <span className="chip">{c.t("publications.filter.reports", "Reports")}</span>
            </div>
            <div className="publications-right-actions">
              <span className="sort-note">{c.t("publications.filter.sorted", "Sorted by newest")}</span>
              <ButtonLink href="/publications" label={c.t("publications.browse", "Browse Archive")} variant="accent" />
            </div>
          </div>

          <div className="stack">
            {recentPublications.map((item) => (
              <PublicationListCard
                key={item.title}
                meta={item.meta}
                title={item.title}
                description={item.description}
                tags={item.tags}
                buttonLabel={item.button}
                href="/publications/decentralization-service-delivery-performance-somali-region"
              />
            ))}
          </div>
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
