import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { IndustryCard, ProductCard } from "@/components/CardGrid";
import { industries, productCategories, siteData } from "@/components/site-data";

export default function HomePage() {
  const { home } = siteData;

  return (
    <main>
      <Hero />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={home.about.eyebrow}
            title={home.about.title}
            description={home.about.description}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {home.about.highlights.map((item) => (
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
            eyebrow={home.products.eyebrow}
            title={home.products.title}
            description={home.products.description}
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
            eyebrow={home.industries.eyebrow}
            title={home.industries.title}
            description={home.industries.description}
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
              {home.distributorCta.eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              {home.distributorCta.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
              {home.distributorCta.description}
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-black tracking-tight text-brand-navy">
              {home.distributorCta.cardTitle}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {home.distributorCta.cardDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={home.distributorCta.primaryCtaHref}
                className="rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange"
              >
                {home.distributorCta.primaryCtaLabel}
              </Link>

              <Link
                href={home.distributorCta.secondaryCtaHref}
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
              >
                {home.distributorCta.secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
