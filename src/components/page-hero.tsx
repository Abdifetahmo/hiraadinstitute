interface PageHeroProps {
  title: string;
  subtitle: string;
  lead: string;
}

export function PageHero({ title, subtitle, lead }: PageHeroProps) {
  return (
    <section className="page-hero reveal">
      <p className="eyebrow">{subtitle}</p>
      <h1>{title}</h1>
      <p>{lead}</p>
    </section>
  );
}
