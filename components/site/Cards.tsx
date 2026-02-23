import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  dark?: boolean;
}

export function IconCard({ icon: Icon, title, description, href, dark = false }: IconCardProps) {
  const content = (
    <article className={`icon-card ${dark ? "icon-card--dark" : ""}`}>
      <Icon className="icon-card-icon" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );

  if (!href) return content;

  return (
    <Link href={href} className="card-link-wrap">
      {content}
    </Link>
  );
}

interface NumberedRowProps {
  index: string;
  title: string;
  description: string;
  dark?: boolean;
}

export function NumberedRow({ index, title, description, dark = false }: NumberedRowProps) {
  return (
    <article className={`numbered-row ${dark ? "numbered-row--dark" : ""}`}>
      <p className="numbered-row-index">{index}</p>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

interface StatItemProps {
  value: string;
  label: string;
}

export function StatItem({ value, label }: StatItemProps) {
  return (
    <article className="stat-item">
      <h3>{value}</h3>
      <p>{label}</p>
    </article>
  );
}

interface PublicationCardProps {
  image: string;
  tag: string;
  title: string;
  date: string;
  href: string;
}

export function PublicationCard({ image, tag, title, date, href }: PublicationCardProps) {
  return (
    <article className="publication-card">
      <div className="publication-card-image-wrap">
        <Image src={image} alt={title} fill className="publication-card-image" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="publication-card-content">
        <span className="chip chip--soft">{tag}</span>
        <Link href={href} className="publication-card-title-link">
          <h3>{title}</h3>
        </Link>
        <p className="publication-card-date">{date}</p>
      </div>
    </article>
  );
}

interface CompactCardProps {
  meta: string;
  title: string;
  description?: string;
  href?: string;
  variant?: "feature" | "pathway";
}

export function CompactCard({ meta, title, description, href, variant = "feature" }: CompactCardProps) {
  const content = (
    <article className={`compact-card compact-card--${variant}`}>
      {meta ? <p className="compact-card-meta">{meta}</p> : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
    </article>
  );

  if (!href) return content;

  return (
    <Link href={href} className="card-link-wrap">
      {content}
    </Link>
  );
}

interface PublicationListCardProps {
  meta: string;
  title: string;
  description: string;
  tags: string;
  buttonLabel: string;
  href: string;
}

export function PublicationListCard({ meta, title, description, tags, buttonLabel, href }: PublicationListCardProps) {
  return (
    <article className="publication-list-card">
      <p className="publication-list-card-meta">{meta}</p>
      <h3>{title}</h3>
      <p className="publication-list-card-description">{description}</p>
      <p className="publication-list-card-tags">{tags}</p>
      <Link href={href} className="publication-list-card-button">
        {buttonLabel}
      </Link>
    </article>
  );
}

interface RelatedLinkCardProps {
  meta: string;
  title: string;
  href: string;
}

export function RelatedLinkCard({ meta, title, href }: RelatedLinkCardProps) {
  return (
    <Link href={href} className="card-link-wrap">
      <article className="related-link-card">
        <p className="related-link-card-meta">{meta}</p>
        <h3>{title}</h3>
      </article>
    </Link>
  );
}
