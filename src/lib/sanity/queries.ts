import { groq } from 'next-sanity';

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    name,
    tagline,
    description,
    contactEmail,
    contactLocation,
    navItems[]{label, href}
  }
`;

export const homeContentQuery = groq`
  *[_type == "homeContent"][0]{
    heroTitle,
    heroSubtitle,
    heroDescription,
    primaryCta,
    secondaryCta,
    highlights[]{title, description},
    stats[]{value, label},
    featuredThemes
  }
`;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    subtitle,
    lead,
    sections[]{title, text, bullets},
    cta
  }
`;

export const newsItemsQuery = groq`
  *[_type == "newsItem"] | order(date desc){
    title,
    "slug": slug.current,
    date,
    location,
    theme,
    excerpt
  }
`;

export const publicationItemsQuery = groq`
  *[_type == "publication"] | order(publishedAt desc){
    title,
    "slug": slug.current,
    type,
    summary,
    tags
  }
`;
