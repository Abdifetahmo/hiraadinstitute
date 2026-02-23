import { ButtonLink } from "@/components/site/ButtonLink";
import { RelatedLinkCard } from "@/components/site/Cards";

interface DetailMetaCard {
  label: string;
  value: string;
}

interface RelatedItem {
  meta: string;
  title: string;
  href: string;
}

interface DetailArticleLayoutProps {
  breadcrumb: string;
  title: string;
  metaLine: string;
  introTitle: string;
  introText: string;
  detailsTitle: string;
  detailCards: DetailMetaCard[];
  blockOneTitle: string;
  blockOneText: string;
  blockTwoTitle: string;
  blockTwoText: string;
  assetTitle: string;
  assetText: string;
  assetPrimaryLabel: string;
  assetPrimaryHref: string;
  assetSecondaryLabel: string;
  assetSecondaryHref: string;
  relatedTitle: string;
  related: RelatedItem[];
}

export function DetailArticleLayout({
  breadcrumb,
  title,
  metaLine,
  introTitle,
  introText,
  detailsTitle,
  detailCards,
  blockOneTitle,
  blockOneText,
  blockTwoTitle,
  blockTwoText,
  assetTitle,
  assetText,
  assetPrimaryLabel,
  assetPrimaryHref,
  assetSecondaryLabel,
  assetSecondaryHref,
  relatedTitle,
  related
}: DetailArticleLayoutProps) {
  return (
    <>
      <section className="detail-hero">
        <div className="container detail-hero-inner">
          <p className="eyebrow eyebrow--accent">{breadcrumb}</p>
          <h1>{title}</h1>
          <p className="detail-meta-line">{metaLine}</p>
        </div>
      </section>

      <section className="detail-intro">
        <div className="container">
          <h2>{introTitle}</h2>
          <p>{introText}</p>
        </div>
      </section>

      <section className="detail-metadata">
        <div className="container">
          <h2>{detailsTitle}</h2>
          <div className="detail-metadata-grid">
            {detailCards.map((card) => (
              <article className="meta-card" key={card.label}>
                <p className="meta-card-label">{card.label}</p>
                <p>{card.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-body">
        <div className="container">
          <div className="detail-body-stack">
            <article className="info-card">
              <h3>{blockOneTitle}</h3>
              <p>{blockOneText}</p>
            </article>

            <article className="info-card">
              <h3>{blockTwoTitle}</h3>
              <p>{blockTwoText}</p>
            </article>

            <article className="asset-card">
              <h3>{assetTitle}</h3>
              <p>{assetText}</p>
              <div className="asset-actions">
                <ButtonLink href={assetPrimaryHref} label={assetPrimaryLabel} variant="primary" />
                <ButtonLink href={assetSecondaryHref} label={assetSecondaryLabel} variant="outline-light" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="detail-related">
        <div className="container">
          <h2>{relatedTitle}</h2>
          <div className="detail-related-grid">
            {related.map((item) => (
              <RelatedLinkCard key={item.title} meta={item.meta} title={item.title} href={item.href} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
