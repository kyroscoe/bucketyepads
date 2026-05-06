import Link from 'next/link';
import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { distributorRegions } from '@/components/site-data';

export default function DistributorsPage() {
  return (
    <main>
      <PageHero
        title="Find a Distributor"
        description="The current site has a distributor page, but it does not guide users well. This redesigned version makes the path clearer and easier to scan."
      />
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="text-2xl font-black tracking-tight text-brand-navy">Distributor Support</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Use this page to list authorized distributors by region, territory, or service area. The cards below are starter placeholders.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange">
              Need help locating one?
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {distributorRegions.map((region) => (
              <div key={region} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
                <div className="text-xl font-black tracking-tight text-brand-navy">{region}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">Add distributor company names, contact numbers, emails, and coverage details here.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
