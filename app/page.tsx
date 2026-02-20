import Image from 'next/image';
import Link from 'next/link';

import { NewsGrid } from '@/src/components/news-grid';
import { PublicationGrid } from '@/src/components/publication-grid';
import { getHomeContent, getNewsItems, getPublicationItems } from '@/src/lib/content/loaders';

export default async function HomePage() {
  const policyCycle = [
    {
      title: 'Context Scoping',
      text: 'We identify policy questions through field engagement, institutional consultations, and local priorities.'
    },
    {
      title: 'Evidence Generation',
      text: 'Multidisciplinary research combines qualitative and quantitative methods with ethical, contextual analysis.'
    },
    {
      title: 'Advisory and Dialogue',
      text: 'Findings are translated into recommendations, validated with stakeholders, and applied through policy engagement.'
    }
  ];

  const [home, newsItems, publicationItems] = await Promise.all([
    getHomeContent(),
    getNewsItems(),
    getPublicationItems()
  ]);

  return (
    <main className="home-main">
      <section className="shell hero-shell">
        <div className="hero-panel reveal">
          <div className="home-hero-copy">
            <p className="eyebrow">{home.heroSubtitle}</p>
            <h1>{home.heroTitle}</h1>
            <p className="hero-description">{home.heroDescription}</p>
            <div className="button-row">
              <Link href={home.primaryCta.href} className="button button-primary">
                {home.primaryCta.label}
              </Link>
              <Link href={home.secondaryCta.href} className="button button-ghost">
                {home.secondaryCta.label}
              </Link>
            </div>
            <div className="commitment-row">
              <span>Independent</span>
              <span>Policy-Oriented</span>
              <span>Community-Grounded</span>
            </div>
          </div>

          <div className="home-hero-art">
            <div className="hero-logo-wrap reveal" style={{ animationDelay: '120ms' }}>
              <Image src="/images/logo.jpg" alt="Hiraad Institute logo" width={460} height={460} priority />
            </div>
            <aside className="hero-note reveal" style={{ animationDelay: '210ms' }}>
              <p className="eyebrow">Institutional Scope</p>
              <h3>Somali Region + Horn Lens</h3>
              <p>
                Grounded in Ethiopia&apos;s Somali Region and connected to national and regional policy dynamics across the
                Horn of Africa.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="shell stats-bar reveal" style={{ animationDelay: '180ms' }}>
        {home.stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="shell section-space">
        <div className="section-head reveal">
          <p className="eyebrow">Institutional Priorities</p>
          <h2>Work That Connects Research to Action</h2>
        </div>
        <div className="content-grid content-grid-4">
          {home.highlights.map((highlight, index) => (
            <article key={highlight.title} className="content-card reveal" style={{ animationDelay: `${index * 80}ms` }}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section-space">
        <div className="surface-block reveal">
          <div className="section-head">
            <p className="eyebrow">Method</p>
            <h2>Our Policy Impact Cycle</h2>
          </div>
          <div className="cycle-grid">
            {policyCycle.map((step, index) => (
              <article key={step.title} className="cycle-card">
                <span>{`0${index + 1}`}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-space">
        <div className="section-head reveal">
          <p className="eyebrow">Thematic Areas</p>
          <h2>Policy Domains We Cover</h2>
        </div>
        <div className="theme-grid">
          {home.featuredThemes.map((theme, index) => (
            <article key={theme} className="theme-row reveal" style={{ animationDelay: `${index * 70}ms` }}>
              <span>{`0${index + 1}`}</span>
              <p>{theme}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section-space">
        <div className="section-head reveal">
          <p className="eyebrow">Latest</p>
          <h2>News and Events</h2>
        </div>
        <div className="surface-block surface-block-light">
          <NewsGrid items={newsItems} compact />
        </div>
      </section>

      <section className="shell section-space section-bottom-gap">
        <div className="section-head reveal">
          <p className="eyebrow">Knowledge Archive</p>
          <h2>Publications and Analysis</h2>
        </div>
        <div className="surface-block surface-block-light">
          <PublicationGrid items={publicationItems} compact />
        </div>
      </section>
    </main>
  );
}
