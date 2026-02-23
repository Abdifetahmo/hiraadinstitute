import Link from "next/link";

import { ButtonLink } from "@/components/site/ButtonLink";
import { LogoMark } from "@/components/site/LogoMark";

const navigation = [
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "News & Media", href: "/news-media" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <LogoMark />

        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header-cta">
          <ButtonLink href="/contact" label="Get Involved" variant="dark" />
        </div>

        <button className="site-header-menu" aria-label="Open navigation menu" type="button">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
