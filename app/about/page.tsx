import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteData } from "@/components/site-data";

export default function AboutPage() {
  const { aboutPage } = siteData;

  return (
    <main>
      <PageHero
        title={aboutPage.heroTitle}
        description={aboutPage.heroDescription}
      />

      <section className="py-20">
        <Container className="grid gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow={aboutPage.eyebrow}
              title={aboutPage.title}
              description={aboutPage.description}
            />

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
              {aboutPage.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {aboutPage.stats.map((item) => (
              <div
                key={`${item.value}-${item.label}`}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card"
              >
                <div className="text-4xl font-black text-brand-navy">
                  {item.value}
                </div>

                <div className="mt-2 text-sm leading-7 text-slate-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
