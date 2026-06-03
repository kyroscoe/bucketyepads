'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/components/site-data';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <div className="min-w-0">
          <Logo />
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-brand-red">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/request-quote"
            className="rounded-xl bg-brand-red px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orange"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy shadow-sm transition hover:border-brand-red hover:text-brand-red lg:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </Container>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white shadow-lg lg:hidden">
          <Container className="py-3">
            <nav className="flex flex-col gap-1 text-base font-semibold text-slate-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-3 py-3 transition hover:bg-slate-50 hover:text-brand-red"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/request-quote"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-red px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orange"
              >
                Request Quote
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
