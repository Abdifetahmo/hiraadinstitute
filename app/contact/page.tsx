import { getSiteSettings } from '@/src/lib/content/loaders';

export const metadata = {
  title: 'Contact'
};

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <main className="shell page-wrap section-bottom-gap">
      <section className="page-hero reveal">
        <p className="eyebrow">Contact</p>
        <h1>Work With Hiraad</h1>
        <p>
          For partnerships, research collaboration, advisory support, media engagement, or internship inquiries, contact
          our team directly.
        </p>
      </section>

      <section className="contact-grid">
        <article className="content-card reveal">
          <h2>Email</h2>
          <p>
            <a className="text-link" href={`mailto:${settings.contactEmail}`}>
              {settings.contactEmail}
            </a>
          </p>
        </article>

        <article className="content-card reveal" style={{ animationDelay: '90ms' }}>
          <h2>Location</h2>
          <p>{settings.contactLocation}</p>
        </article>

        <article className="content-card reveal" style={{ animationDelay: '180ms' }}>
          <h2>Institutional Focus</h2>
          <p>
            Evidence-based policymaking, governance reform, social cohesion, climate resilience, and inclusive
            development in Ethiopia&apos;s Somali Region.
          </p>
        </article>
      </section>
    </main>
  );
}
