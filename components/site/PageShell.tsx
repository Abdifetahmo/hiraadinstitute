import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

interface PageShellProps {
  children: ReactNode;
  t?: (key: string, fallback: string) => string;
}

export function PageShell({ children, t }: PageShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="site-page">{children}</main>
      <SiteFooter t={t} />
    </>
  );
}
