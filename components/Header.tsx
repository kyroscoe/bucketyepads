'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navLinks, resourceLinks } from '@/components/site-data';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';

function DesktopNavLink({ link }: { link: { href: string; label: string } }) {
  if (link.href !== '/resources') {
    return (
      <Link href={link.href} className="transition hover:text-brand-red">
        {link.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={link.href}
        className="inline-flex items-center gap-1 py-7 transition hover:text-brand-red group-focus-within:text-brand-red"
      >
        {link.label}
        <ChevronDown
          aria-hidden="true"
          className="h-4 w-4 transition group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </Link>
      <div className="invisible absolute right-0 top-full w-80 translate-y-2 rounded-lg border border-slate-200 bg-white p-2 text-left opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {resourceLinks.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="block rounded-md px-3 py-3 transition hover:bg-slate-50 hover:text-brand-red focus:bg-slate-50 focus:text-brand-red focus:outline-none"
          >
            <span className="block text-sm font-black text-slate-900">
              {resource.title}
            </span>
            <span className="mt-1 block text-xs font-semibold leading-5 text-slate-500">
              {resource.description}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

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
              <DesktopNavLink key={link.href} link={link} />
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
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-md px-3 py-3 transition hover:bg-slate-50 hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                  {link.href === '/resources' ? (
                    <div className="mb-2 ml-3 border-l border-slate-200 pl-3">
                      {resourceLinks.map((resource) => (
                        <Link
                          key={resource.href}
                          href={resource.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-brand-red"
                        >
                          {resource.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
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
