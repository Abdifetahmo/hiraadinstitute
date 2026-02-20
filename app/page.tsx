import Image from 'next/image';
import Link from 'next/link';

import { NewsGrid } from '@/src/components/news-grid';
import { PublicationGrid } from '@/src/components/publication-grid';
import { getHomeContent, getNewsItems, getPublicationItems } from '@/src/lib/content/loaders';

export default async function HomePage() {
  const [home, newsItems, publicationItems] = await Promise.all([
    getHomeContent(),
    getNewsItems(),
    getPublicationItems()
  ]);

  return (
    <main>
      <section className="shell home-hero">
        <div className="home-hero-copy reveal">
          <p className="eyebrow">{home.heroSubtitle}</p>
          <h1>{home.heroTitle}</h1>
          <p>{home.heroDescription}</p>
          <div className="button-row">
            <Link href={home.primaryCta.href} className="button button-primary">
              {home.primaryCta.label}
            </Link>
            <Link href={home.secondaryCta.href} className="button button-ghost">
              {home.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="home-hero-art reveal" style={{ animationDelay: '120ms' }}>
          <Image src="/images/logo.jpg" alt="Hiraad Institute logo" width={460} height={460} priority />
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
        <div className="content-grid">
          {home.highlights.map((highlight, index) => (
            <article key={highlight.title} className="content-card reveal" style={{ animationDelay: `${index * 80}ms` }}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section-space">
        <div className="section-head reveal">
          <p className="eyebrow">Thematic Areas</p>
          <h2>Policy Domains We Cover</h2>
        </div>
        <div className="tag-wall reveal">
          {home.featuredThemes.map((theme) => (
            <span key={theme} className="tag">
              {theme}
            </span>
          ))}
        </div>
      </section>

      <section className="shell section-space">
        <div className="section-head reveal">
          <p className="eyebrow">Latest</p>
          <h2>News and Events</h2>
        </div>
        <NewsGrid items={newsItems} compact />
      </section>

      <section className="shell section-space section-bottom-gap">
        <div className="section-head reveal">
          <p className="eyebrow">Knowledge Archive</p>
          <h2>Publications and Analysis</h2>
        </div>
        <PublicationGrid items={publicationItems} compact />
      </section>
    </main>
  );
}
