interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  size?: "default" | "compact";
}

export function PageHero({ eyebrow, title, description, size = "default" }: PageHeroProps) {
  return (
    <section className={`page-hero ${size === "compact" ? "page-hero--compact" : ""}`}>
      <div className="container page-hero-inner">
        <p className="eyebrow eyebrow--accent">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}
