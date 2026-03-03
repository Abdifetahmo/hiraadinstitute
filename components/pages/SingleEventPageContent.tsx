import Image from "next/image";

import { CTASection } from "@/components/site/CTASection";
import { PageShell } from "@/components/site/PageShell";
import { RelatedLinkCard } from "@/components/site/Cards";
import type { EventContent } from "@/lib/site/events";
import type { ContentResolver } from "@/lib/site/types";

interface SingleEventPageContentProps {
  c: ContentResolver;
  event: EventContent;
  relatedEvents: EventContent[];
}

export function SingleEventPageContent({ c, event, relatedEvents }: SingleEventPageContentProps) {
  const hasHighlight = event.highlightsText.trim().length > 0;

  return (
    <PageShell t={c.t}>
      <section className="detail-hero">
        <div className="container detail-hero-inner">
          <p className="eyebrow eyebrow--accent">{c.t("singleEvent.breadcrumb", "Events / Forum Feature")}</p>
          <h1>{event.title}</h1>
          <p className="detail-meta-line">{event.detailMeta}</p>
        </div>
      </section>

      <section className="detail-intro">
        <div className="container">
          <h2>{event.introTitle}</h2>
          <p>{event.introText}</p>
          <div className="event-preview-image-wrap">
            <Image
              src={event.previewImage}
              alt={`${event.title} preview`}
              fill
              className="event-preview-image"
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 90vw, 1120px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="detail-metadata">
        <div className="container">
          <h2>{event.detailsTitle}</h2>
          <div className="detail-metadata-grid">
            <article className="meta-card">
              <p className="meta-card-label">{c.t("singleEvent.details.author.label", "AUTHOR")}</p>
              <p>{event.author}</p>
            </article>
            <article className="meta-card">
              <p className="meta-card-label">{c.t("singleEvent.details.location.label", "LOCATION")}</p>
              <p>{event.location}</p>
            </article>
            <article className="meta-card">
              <p className="meta-card-label">{c.t("singleEvent.details.category.label", "CATEGORY")}</p>
              <p>{event.category}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="detail-body">
        <div className="container">
          <div className="detail-body-stack">
            {hasHighlight ? (
              <article className="info-card">
                <h3>{event.highlightsTitle}</h3>
                <p>{event.highlightsText}</p>
              </article>
            ) : null}

            <article id="gallery" className="info-card event-gallery-card">
              <h3>{c.t("singleEvent.gallery.title", "Event gallery")}</h3>
              <p>{c.t("singleEvent.gallery.description", "Images from this event and related documentation highlights.")}</p>
              <div className="event-gallery-grid">
                {event.galleryImages.map((image, index) => (
                  <div className="event-gallery-item" key={`${event.slug}-gallery-${index + 1}`}>
                    <Image
                      src={image}
                      alt={`${event.title} image ${index + 1}`}
                      fill
                      className="event-gallery-image"
                      sizes="(max-width: 767px) 100vw, (max-width: 1024px) 48vw, 32vw"
                    />
                  </div>
                ))}
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className="detail-related">
        <div className="container">
          <h2>{c.t("singleEvent.related.title", "Related events")}</h2>
          <div className="detail-related-grid">
            {relatedEvents.map((item) => (
              <RelatedLinkCard
                key={item.slug}
                meta={item.previewMeta}
                title={item.title}
                href={`/events/${item.slug}`}
                image={item.previewImage}
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
