import Link from 'next/link';

import type { SiteSettings } from '@/src/lib/types';

interface SiteFooterProps {
  settings: SiteSettings;
}

export function SiteFooter({ settings }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const quickLinks = settings.navItems.filter((item) => item.href !== '/').slice(0, 6);

  return (
    <footer className="site-footer">
      <div className="shell site-footer-grid">
        <div>
          <p className="eyebrow">Hiraad Institute</p>
          <h3>{settings.name}</h3>
          <p>{settings.description}</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{settings.contactLocation}</p>
          <a href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</a>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="shell site-footer-meta">© {year} Hiraad Institute. All rights reserved.</div>
    </footer>
  );
}
