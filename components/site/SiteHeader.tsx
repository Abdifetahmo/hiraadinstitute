"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileMenuOpen(false);
      }
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    }

    mediaQuery.addListener(onChange);
    return () => mediaQuery.removeListener(onChange);
  }, []);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname?.startsWith(`${href}/`));

  return (
    <>
      <header className="site-header">
        <div className="container site-header-inner">
          <LogoMark />

          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`site-nav-link ${isActive(item.href) ? "is-active" : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header-cta">
            <ButtonLink href="/contact" label="Get Involved" variant="dark" />
          </div>

          <button
            className={`site-header-menu ${mobileMenuOpen ? "is-open" : ""}`}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`site-mobile-backdrop ${mobileMenuOpen ? "is-open" : ""}`} onClick={() => setMobileMenuOpen(false)} />

      <div className={`site-mobile-nav ${mobileMenuOpen ? "is-open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="site-mobile-nav-inner">
          <nav className="site-mobile-nav-links" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`site-mobile-nav-link ${isActive(item.href) ? "is-active" : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ButtonLink href="/contact" label="Get Involved" variant="dark" className="site-mobile-nav-cta" />
        </div>
      </div>
    </>
  );
}
