import type { SiteSettings } from '@/src/lib/types';

interface SiteFooterProps {
  settings: SiteSettings;
}

export function SiteFooter({ settings }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell site-footer-grid">
        <div>
          <h3>{settings.name}</h3>
          <p>{settings.description}</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{settings.contactLocation}</p>
          <a href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</a>
        </div>
      </div>
      <div className="shell site-footer-meta">© {year} Hiraad Institute. All rights reserved.</div>
    </footer>
  );
}
