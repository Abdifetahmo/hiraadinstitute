import { CTASection } from "@/components/site/CTASection";
import { CompactCard } from "@/components/site/Cards";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionIntro } from "@/components/site/SectionIntro";
import type { EventContent } from "@/lib/site/events";
import type { ContentResolver } from "@/lib/site/types";

interface EventsPageContentProps {
  c: ContentResolver;
  events: EventContent[];
}

export function EventsPageContent({ c, events }: EventsPageContentProps) {
  const featuredEvents = events.map((event, index) => {
    const key = index + 1;

    return {
      meta: c.t(`events.featured.${key}.meta`, event.previewMeta),
      title: c.t(`events.featured.${key}.title`, event.title),
      image: event.previewImage,
      description: c.t(`events.featured.${key}.description`, event.previewDescription),
      href: `/events/${event.slug}`
    };
  });

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
              "Selected highlights from Hiraad’s public programming and policy dialogue activities."
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
                href={event.href}
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
