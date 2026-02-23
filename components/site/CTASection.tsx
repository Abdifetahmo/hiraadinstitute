import { ButtonLink } from "@/components/site/ButtonLink";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CTASectionProps) {
  return (
    <section className="cta-section" id="newsletter">
      <div className="container cta-section-inner">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="cta-actions">
          <ButtonLink href={primaryHref} label={primaryLabel} variant="primary" />
          <ButtonLink href={secondaryHref} label={secondaryLabel} variant="outline-light" />
        </div>
      </div>
    </section>
  );
}
