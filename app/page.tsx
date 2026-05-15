import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { IndustryCard, ProductCard } from "@/components/CardGrid";
import { industries, productCategories } from "@/components/site-data";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="About Buckeye Pads & Covers"
            title="Reliable pads and covers for commercial finishing equipment"
            description="Buckeye Pads & Covers manufactures replacement pads, covers, head plates, and custom textile products for dry cleaning, laundry, and industrial equipment."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "OEM and aftermarket products",
              "3,000+ catalog items",
              "Custom fabrication available",
              "Distributor support nationwide",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
              >
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
            title="Find the right product for your equipment"
            description="Browse organized product categories for dry cleaning, laundry, pressing, finishing, and industrial applications."
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
            title="Serving the industries that depend on quality finishing products"
            description="Buckeye Pads & Covers supports dry cleaners, laundries, equipment manufacturers, distributors, and industrial customers."
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
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-100">
              Find a distributor
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Get the products you need through a trusted distributor
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
              Buckeye Pads & Covers works with distributors to help customers
              find the right pads, covers, and replacement products for their
              equipment.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-black tracking-tight text-brand-navy">
              Need help finding the right product?
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Request a quote or contact a distributor for help matching
              products to your equipment, application, and replacement needs.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/request-quote"
                className="rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange"
              >
                Request a Quote
              </Link>

              <Link
                href="/distributors"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
              >
                Find a Distributor
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
