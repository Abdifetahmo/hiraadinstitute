import type { Metadata } from 'next';

import { SiteFooter } from '@/src/components/site-footer';
import { SiteHeader } from '@/src/components/site-header';
import { getSiteSettings } from '@/src/lib/content/loaders';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Hiraad Institute',
    template: '%s | Hiraad Institute'
  },
  description:
    'Independent policy research institute in Ethiopia\'s Somali Region advancing evidence-based policymaking and inclusive public dialogue.'
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteSettings = await getSiteSettings();

  return (
    <html lang="en">
      <body>
        <div className="page-bg" />
        <SiteHeader navItems={siteSettings.navItems} />
        {children}
        <SiteFooter settings={siteSettings} />
      </body>
    </html>
  );
}
