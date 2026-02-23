import type { ReactNode } from "react";

import { BackToTopButton } from "@/components/site/BackToTopButton";
import { SiteMotion } from "@/components/site/SiteMotion";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

interface PageShellProps {
  children: ReactNode;
  t?: (key: string, fallback: string) => string;
}

export function PageShell({ children, t }: PageShellProps) {
  return (
    <>
      <SiteMotion />
      <SiteHeader />
      <main className="site-page">{children}</main>
      <BackToTopButton />
      <SiteFooter t={t} />
    </>
  );
}
