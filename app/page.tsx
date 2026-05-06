import Link from 'next/link';
import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { IndustryCard, ProductCard } from '@/components/CardGrid';
import { industries, productCategories } from '@/components/site-data';

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="About Buckeye Pads & Covers"
            title="A cleaner, more professional website direction for a legacy manufacturer"
            description="This redesign keeps the existing brand recognizable while replacing the dated layout with stronger hierarchy, cleaner calls to action, and category-based navigation."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              'OEM and aftermarket manufacturing',
              '3000+ catalog products',
              'Custom fabrication available',
              'Distributor-friendly navigation and support',
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
                <div className="text-lg font-bold text-brand-navy">{item}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-gray py-20">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Organized product categories instead of a cluttered catalog-first homepage"
            description="The key improvement is clarity. Buyers land here, understand the product structure immediately, and move directly into the right category."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((item) => (
              <ProductCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Built for the markets FH Bonn already serves"
            description="The company supports dry cleaning, laundry, equipment manufacturers, and broader industrial fabrication needs."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item) => (
              <IndustryCard key={item.name} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-slate py-20 text-white">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-100">Find a distributor</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Make the sales path easier to navigate</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
              The current site hides the path forward. This version gives distributors and end customers a direct place
              to start, then funnels quote requests and product inquiries cleanly.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-black tracking-tight text-brand-navy">Ready to move this into production?</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Start with the homepage, product pages, quote page, and updated contact flow. That is enough to sell the
              redesign and give the client something they can actually use.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/request-quote" className="rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange">
                Request Quote
              </Link>
              <Link href="/distributors" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50">
                Distributor Page
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
