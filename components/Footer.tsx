import Link from 'next/link';
import { Container } from '@/components/Container';
import { company, navLinks } from '@/components/site-data';

export function Footer() {
  return (
    <footer className="mt-20 bg-brand-slate text-white">
      <Container className="grid gap-12 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h3 className="text-2xl font-bold">Over 70 Years of Manufacturing Experience</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Buckeye Pads & Covers supports distributors, commercial cleaners, and equipment manufacturers with pads, covers,
            fabrication support, and specialized textile manufacturing.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Quick Links</h4>
          <div className="mt-5 grid gap-3 text-sm text-slate-200">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Contact</h4>
          <div className="mt-5 space-y-2 text-sm leading-7 text-slate-200">
            <p>{company.addressLine1}</p>
            <p>{company.addressLine2}</p>
            <p>{company.phone}</p>
            <p>{company.email}</p>
            <p>{company.hours}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
