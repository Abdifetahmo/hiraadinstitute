'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import type { NavItem } from '@/src/lib/types';

interface SiteHeaderProps {
  navItems: NavItem[];
}

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
          <Image src="/images/logo.jpg" alt="Hiraad Institute Logo" width={52} height={52} className="brand-logo" />
          <div className="brand-copy">
            <span>HIRAAD</span>
            <small>Public Policy Studies Institute</small>
          </div>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={isActive ? 'true' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
