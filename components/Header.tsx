import Link from 'next/link';
import { navLinks } from '@/components/site-data';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
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
      </Container>
    </header>
  );
}
