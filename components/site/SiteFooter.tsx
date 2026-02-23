import Link from "next/link";

import { LogoMark } from "@/components/site/LogoMark";

interface SiteFooterProps {
  t?: (key: string, fallback: string) => string;
}

const researchLinks = [
  { key: "footer.research.governance", label: "Governance", href: "/research#governance" },
  { key: "footer.research.peace", label: "Peace & Cohesion", href: "/research#peace-cohesion" },
  { key: "footer.research.climate", label: "Climate Resilience", href: "/research#climate-resilience" },
  { key: "footer.research.livelihoods", label: "Livelihoods", href: "/research#livelihoods" },
  { key: "footer.research.social", label: "Social Services", href: "/research#social-services" }
];

const instituteLinks = [
  { key: "footer.institute.about", label: "About Us", href: "/about" },
  { key: "footer.institute.team", label: "Our Team", href: "/about#team" },
  { key: "footer.institute.publications", label: "Publications", href: "/publications" },
  { key: "footer.institute.events", label: "Events", href: "/events" },
  { key: "footer.institute.contact", label: "Contact", href: "/contact" }
];

const connectLinks = [
  { key: "footer.connect.twitter", label: "Twitter / X", href: "https://x.com" },
  { key: "footer.connect.linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { key: "footer.connect.newsletter", label: "Newsletter", href: "#newsletter" },
  { key: "footer.connect.email", label: "info@hiraad.org", href: "mailto:info@hiraad.org" }
];

function text(t: SiteFooterProps["t"], key: string, fallback: string): string {
  return t ? t(key, fallback) : fallback;
}

export function SiteFooter({ t }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-top">
          <div className="site-footer-brand">
            <LogoMark invert size="footer" />
            <p>
              {text(
                t,
                "footer.brand.description",
                "An independent, non-partisan public policy research institute based in Jigjiga, Somali Region, Ethiopia."
              )}
            </p>
          </div>

          <div className="site-footer-links">
            <div>
              <h4>RESEARCH</h4>
              {researchLinks.map((item) => (
                <Link key={item.key} href={item.href}>
                  {text(t, item.key, item.label)}
                </Link>
              ))}
            </div>

            <div>
              <h4>INSTITUTE</h4>
              {instituteLinks.map((item) => (
                <Link key={item.key} href={item.href}>
                  {text(t, item.key, item.label)}
                </Link>
              ))}
            </div>

            <div>
              <h4>CONNECT</h4>
              {connectLinks.map((item) => (
                <a key={item.key} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {text(t, item.key, item.label)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer-divider" />

        <div className="site-footer-bottom">
          <p>{text(t, "footer.bottom.copy", "© 2026 Hiraad Institute. All rights reserved.")}</p>
          <p>{text(t, "footer.bottom.credit", "Created with ❤️ by PrimeCreative")}</p>
        </div>
      </div>
    </footer>
  );
}
