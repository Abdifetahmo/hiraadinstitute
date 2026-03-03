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
      meta: c.t("events.featured.1.meta", "February 4, 2026 · Jigjiga · Education Reform & Policy"),
      title: c.t("events.featured.1.title", "Hiraad Education Forum 2026"),
      image: c.i("events.featured.1.image", "/images/14a71f10-8a68-46f5-a5d4-b36588d79373.jpeg"),
      description: c.t(
        "events.featured.1.description",
        "In 2026, the Hiraad Education Forum stood as a platform of reflection, research, and reform.\n\nOrganized by the Hiraad Institute in collaboration with the Somali Region Education Bureau, the forum brought together educators, researchers, policymakers, and thought leaders committed to strengthening the education system of the Somali Region.\n\nThe Forum was not merely a gathering — it was a space where ideas matured into research, dialogue shaped direction, and evidence informed action.\n\nThrough policy dialogues, academic discussions, and expert panels, the forum focused on:\n• Advancing educational development\n• Promoting research and publication\n• Producing policy briefs\n• Strengthening institutional transformation\n\nAt Hiraad, we believe education is the foundation of state-building and societal progress. The Hiraad Education Forum reaffirmed that meaningful reform begins with knowledge, collaboration, and courageous conversations."
      )
    },
    {
      meta: c.t("events.featured.2.meta", "July 2025 · Jigjiga · Governance & Public Policy"),
      title: c.t("events.featured.2.title", "Hiraad Annual Dialogue Forum (HADAF) 2025"),
      image: c.i("events.featured.2.image", "/images/d4d880d8-e146-40d6-940a-25ef6e92f911.jpeg"),
      description: c.t(
        "events.featured.2.description",
        "Flagship forum convening policymakers, researchers, civil society, private sector, and communities to discuss governance, service delivery, social cohesion, climate risk, and economic development pathways."
      )
    },
    {
      meta: c.t("events.featured.3.meta", "June 1, 2025 · Jigjiga · Youth Leadership & Innovation"),
      title: c.t("events.featured.3.title", "Somali Regional Youth Forum 2025"),
      image: c.i("events.featured.3.image", "/images/efab05da-28f0-4fbf-aa0b-6540d86c6dbd.jpeg"),
      description: c.t(
        "events.featured.3.description",
        "Convened youth leaders, students, entrepreneurs, and institutions to advance civic participation, leadership development, and youth inclusion in policy formulation."
      )
    },
    {
      meta: c.t("events.featured.4.meta", "June 1, 2025 · Jigjiga · Media & Governance"),
      title: c.t("events.featured.4.title", "Who Shapes the Narrative of the Somali Regional State?"),
      image: c.i("events.featured.4.image", "/images/e885c9b2-5476-490b-9e9a-4f947fd37184.jpeg"),
      description: c.t(
        "events.featured.4.description",
        "Public panel with journalists, communication officials, and researchers on narrative production, representation, public trust, and media responsibility."
      )
    },
    {
      meta: c.t("events.featured.5.meta", "August 2025 · Jigjiga · Peacebuilding & Media Literacy"),
      title: c.t("events.featured.5.title", "Forum on Media, Journalism, and Peacebuilding"),
      image: c.i("events.featured.5.image", "/images/727ccbe7-a5ff-4cb1-b234-abe5c0f444a0.jpeg"),
      description: c.t(
        "events.featured.5.description",
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
              <CompactCard
                key={event.title}
                meta={event.meta}
                title={event.title}
                image={event.image}
                description={event.description}
                variant="feature"
              />
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
