import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteData } from "@/components/site-data";

export default function MakeModelPage() {
  const { makeModelPage } = siteData;

  return (
    <main>
      <PageHero
        title={makeModelPage.heroTitle}
        description={makeModelPage.heroDescription}
      />

      <section className="py-20">
        <Container>
          <div className="mb-8">
            <Link
              href="/resources"
              className="text-sm font-bold text-brand-red transition hover:text-brand-orange"
            >
              Back to Resources
            </Link>
          </div>

          <div className="max-w-4xl">
            <SectionHeading
              eyebrow="Ordering Guide"
              title={makeModelPage.introTitle}
              description={makeModelPage.introParagraphs.join(" ")}
            />
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
            <div className="border-b border-slate-200 bg-brand-gray px-6 py-5">
              <h2 className="text-2xl font-black tracking-tight text-brand-navy">
                {makeModelPage.tableTitle}
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              {makeModelPage.manufacturers.map((item) => (
                <div
                  key={item.manufacturer}
                  className="grid gap-3 p-6 md:grid-cols-[14rem_1fr]"
                >
                  <h3 className="text-sm font-black uppercase tracking-[0.18em] text-brand-red">
                    {item.manufacturer}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {item.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-16">
            <SectionHeading
              eyebrow="Field Tips"
              title={makeModelPage.tipsTitle}
              description={makeModelPage.tipsIntro}
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {makeModelPage.tips.map((tip) => (
                <article
                  key={tip.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card"
                >
                  <h3 className="text-xl font-black tracking-tight text-brand-navy">
                    {tip.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {tip.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </section>
    </main>
  );
}
