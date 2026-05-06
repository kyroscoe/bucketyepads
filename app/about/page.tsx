import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Buckeye Pads and Covers"
        description="A modernized About page that keeps the legacy credibility, but presents it like a current manufacturer instead of a dated catalog site."
      />
      <section className="py-20">
        <Container className="grid gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Legacy"
              title="A long-standing OEM and aftermarket manufacturer"
              description="Founded in 1947, FH Bonn built its reputation around pads, covers, and textile components for the dry cleaning and laundry industries."
            />
            <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
              <p>
                This redesign positions that history as a strength while cleaning up the way the company presents itself online.
                The goal is not to reinvent the company. It is to make the company easier to trust, easier to understand,
                and easier to contact.
              </p>
              <p>
                The site architecture also leaves room for industrial sewing and knitted wire mesh work so the broader manufacturing
                capability is visible instead of buried.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            {[
              ['1947', 'Founded by Francis Henry Bonn'],
              ['3000+', 'Catalog items'],
              ['55+', 'OEM programs supported'],
              ['USA', 'Manufacturing identity carried through the site'],
            ].map(([stat, label]) => (
              <div key={stat} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
                <div className="text-4xl font-black text-brand-navy">{stat}</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
