export interface NavItem {
  label: string;
  href: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  description: string;
  contactEmail: string;
  contactLocation: string;
  navItems: NavItem[];
}

export interface ContentSection {
  title: string;
  text: string;
  bullets?: string[];
}

export interface PageContent {
  slug: string;
  title: string;
  subtitle: string;
  lead: string;
  sections: ContentSection[];
  cta?: {
    label: string;
    href: string;
  };
}

export interface HomeHighlight {
  title: string;
  description: string;
}

export interface HomeStat {
  value: string;
  label: string;
}

export interface HomeContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  highlights: HomeHighlight[];
  stats: HomeStat[];
  featuredThemes: string[];
}

export interface NewsItem {
  title: string;
  slug: string;
  date: string;
  location: string;
  theme: string;
  excerpt: string;
}

export interface Publication {
  title: string;
  slug: string;
  type: string;
  summary: string;
  tags: string[];
}
