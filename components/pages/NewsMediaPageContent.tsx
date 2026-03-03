import { CTASection } from "@/components/site/CTASection";
import { CompactCard } from "@/components/site/Cards";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionIntro } from "@/components/site/SectionIntro";
import type { NewsListItem } from "@/lib/site/news";
import type { ContentResolver } from "@/lib/site/types";

interface NewsMediaPageContentProps {
  c: ContentResolver;
  newsItems: NewsListItem[];
}

export function NewsMediaPageContent({ c, newsItems }: NewsMediaPageContentProps) {
  const latestNews = newsItems.slice(0, 2);

  return (
    <PageShell t={c.t}>
      <PageHero
        eyebrow={c.t("news.hero.eyebrow", "NEWS & MEDIA")}
        title={c.t("news.hero.title", "Public discourse, institutional updates, and media engagement")}
        description={c.t(
          "news.hero.description",
          "Hiraad publishes timely updates, analytical commentary, and media-facing outputs that strengthen transparency, public understanding, and informed policy dialogue."
        )}
      />

      <section className="section section--surface news-latest">
        <div className="container">
          <SectionIntro
            eyebrow={c.t("news.latest.eyebrow", "LATEST UPDATES")}
            title={c.t("news.latest.title", "News and institutional announcements")}
            description={c.t(
              "news.latest.description",
              "Recent highlights from Hiraad’s forums, institutional milestones, and policy engagement activities."
            )}
            eyebrowTone="accent"
            size="xl"
          />

          <div className="grid grid--two">
            {latestNews.map((item) => (
              <CompactCard
                key={item.slug}
                meta={item.meta}
                title={item.title}
                description={item.description}
                href={`/news/${item.slug}`}
                variant="feature"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted news-media-block">
        <div className="container">
          <SectionIntro
            eyebrow={c.t("news.media.eyebrow", "MEDIA")}
            title={c.t("news.media.title", "Commentary and public analysis")}
            description={c.t(
              "news.media.description",
              "Regular commentary outputs provide contextual analysis on governance, identity, media narratives, and regional policy developments."
            )}
            eyebrowTone="accent"
            size="sm"
          />

          <div className="grid grid--two">
            <article className="info-card">
              <h3>{c.t("news.media.1.title", "Commentary and Public Analysis Series")}</h3>
              <p>
                {c.t(
                  "news.media.1.description",
                  "Evidence-informed interpretation of unfolding political and policy issues affecting the Somali Region and Ethiopia."
                )}
              </p>
            </article>
            <article className="info-card">
              <h3>{c.t("news.media.2.title", "Press Releases and Media Engagement")}</h3>
              <p>
                {c.t(
                  "news.media.2.description",
                  "Institutional statements, expert commentary, and media briefings that support accurate and responsible public communication."
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--surface news-archive">
        <div className="container">
          <SectionIntro
            title={c.t("news.archive.title", "Archive and media resources")}
            description={c.t(
              "news.archive.description",
              "Browse event coverage, photo galleries, video recordings, and newsletter archives that document Hiraad’s institutional journey."
            )}
            size="md"
          />

          <div className="chip-grid">
            <span className="chip chip--bordered">{c.t("news.archive.1", "Event Reports")}</span>
            <span className="chip chip--bordered">{c.t("news.archive.2", "Photo Galleries")}</span>
            <span className="chip chip--bordered">{c.t("news.archive.3", "Video Recordings")}</span>
            <span className="chip chip--bordered">{c.t("news.archive.4", "Newsletter Archive")}</span>
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
