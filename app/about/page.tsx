import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Buckeye Pads & Covers"
        description="Buckeye Pads & Covers has been manufacturing quality pads, covers, head plates, and textile products for the dry cleaning, laundry, and industrial markets for decades."
      />

      <section className="py-20">
        <Container className="grid gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Our History"
              title="A trusted manufacturer serving the industry since 1947"
              description="Founded by Francis Henry Bonn, the company has built a long-standing reputation for dependable products, consistent quality, and industry knowledge."
            />

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
              <p>
                Buckeye Pads & Covers manufactures replacement pads, covers,
                head plates, and specialty textile products for commercial
                finishing equipment used throughout the dry cleaning and laundry
                industries.
              </p>

              <p>
                In addition to standard catalog products, the company supports
                OEM manufacturing programs and custom fabrication projects for
                distributors, equipment manufacturers, and industrial customers
                across the United States.
              </p>

              <p>
                With decades of manufacturing experience, Buckeye Pads & Covers
                continues to focus on reliable products, responsive customer
                support, and long-term distributor relationships.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {[
              ["1947", "Founded by Francis Henry Bonn"],
              ["2018", "FH Bonn purchased by Darrin Bonn and Tim Kephart"],
              ["3,000+", "Catalog products available"],
              ["OEM", "OEM and aftermarket manufacturing support"],
              [
                "USA",
                "Manufactured with American craftsmanship and experience",
              ],
            ].map(([stat, label]) => (
              <div
                key={stat}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card"
              >
                <div className="text-4xl font-black text-brand-navy">
                  {stat}
                </div>

                <div className="mt-2 text-sm leading-7 text-slate-600">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
