import { CTASection } from "@/components/site/CTASection";
import { CompactCard } from "@/components/site/Cards";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionIntro } from "@/components/site/SectionIntro";
import type { ContentResolver } from "@/lib/site/types";

interface EventsPageContentProps {
  c: ContentResolver;
}

export function EventsPageContent({ c }: EventsPageContentProps) {
  const featuredEvents = [
    {
      meta: c.t("events.featured.1.meta", "July 2025 · Jigjiga · Governance & Public Policy"),
      title: c.t("events.featured.1.title", "Hiraad Annual Dialogue Forum (HADAF) 2025"),
      description: c.t(
        "events.featured.1.description",
        "Flagship forum convening policymakers, researchers, civil society, private sector, and communities to discuss governance, service delivery, social cohesion, climate risk, and economic development pathways."
      )
    },
    {
      meta: c.t("events.featured.2.meta", "June 1, 2025 · Jigjiga · Youth Leadership & Innovation"),
      title: c.t("events.featured.2.title", "Somali Regional Youth Forum 2025"),
      description: c.t(
        "events.featured.2.description",
        "Convened youth leaders, students, entrepreneurs, and institutions to advance civic participation, leadership development, and youth inclusion in policy formulation."
      )
    },
    {
      meta: c.t("events.featured.3.meta", "June 1, 2025 · Jigjiga · Media & Governance"),
      title: c.t("events.featured.3.title", "Who Shapes the Narrative of the Somali Regional State?"),
      description: c.t(
        "events.featured.3.description",
        "Public panel with journalists, communication officials, and researchers on narrative production, representation, public trust, and media responsibility."
      )
    },
    {
      meta: c.t("events.featured.4.meta", "August 2025 · Jigjiga · Peacebuilding & Media Literacy"),
      title: c.t("events.featured.4.title", "Forum on Media, Journalism, and Peacebuilding"),
      description: c.t(
        "events.featured.4.description",
        "Forum examining misinformation risks, ethical journalism, and coordinated strategies for digital-era conflict prevention and social cohesion."
      )
    }
  ];

  const ongoingPrograms = [
    {
      title: c.t("events.ongoing.1.title", "Policy Seminar Series"),
      description: c.t(
        "events.ongoing.1.description",
        "Monthly thematic seminars connecting ongoing research to policy debate and practitioner experience."
      )
    },
    {
      title: c.t("events.ongoing.2.title", "Community Field Engagement"),
      description: c.t(
        "events.ongoing.2.description",
        "Urban and rural outreach that validates findings with communities and strengthens participatory policy design."
      )
    },
    {
      title: c.t("events.ongoing.3.title", "Capacity Workshops"),
      description: c.t(
        "events.ongoing.3.description",
        "Practical training for institutions, CSOs, youth, and analysts on evidence use and policy implementation."
      )
    }
  ];

  return (
    <PageShell t={c.t}>
      <PageHero
        eyebrow={c.t("events.hero.eyebrow", "NEWS & EVENTS")}
        title={c.t("events.hero.title", "Institutional dialogue, public engagement, and policy forum")}
        description={c.t(
          "events.hero.description",
          "Hiraad documents key forums, seminars, media engagements, and outreach activities to strengthen institutional memory, transparency, and evidence-informed public discourse."
        )}
      />

      <section className="section section--surface events-featured">
        <div className="container">
          <SectionIntro
            eyebrow={c.t("events.featured.eyebrow", "FEATURED")}
            title={c.t("events.featured.title", "Major institutional events")}
            description={c.t(
              "events.featured.description",
              "Selected highlights from Hiraad’s public programming and policy dialogue activities in 2024–2025."
            )}
            eyebrowTone="accent"
            size="xl"
          />

          <div className="grid grid--two">
            {featuredEvents.map((event) => (
              <CompactCard key={event.title} meta={event.meta} title={event.title} description={event.description} variant="feature" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted events-ongoing">
        <div className="container">
          <SectionIntro
            eyebrow={c.t("events.ongoing.eyebrow", "ONGOING PROGRAMS")}
            title={c.t("events.ongoing.title", "Seminars, outreach, and institutional learning")}
            description={c.t(
              "events.ongoing.description",
              "In addition to flagship forums, Hiraad sustains policy dialogue through recurring public and institutional engagement mechanisms."
            )}
            eyebrowTone="accent"
            size="xl"
          />

          <div className="grid grid--three">
            {ongoingPrograms.map((program) => (
              <article key={program.title} className="info-card">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </article>
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
