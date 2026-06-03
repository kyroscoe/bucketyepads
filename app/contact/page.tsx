import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { company, siteData } from "@/components/site-data";
import { QuoteForm } from "@/components/QuoteForm";

export default function ContactPage() {
  const { contactPage } = siteData;

  return (
    <main>
      <PageHero
        title={contactPage.heroTitle}
        description={contactPage.heroDescription}
      />
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="text-2xl font-black tracking-tight text-brand-navy">
              {contactPage.cardTitle}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                {company.addressLine1}
                <br />
                {company.addressLine2}
              </p>
              <p>Phone: {company.phone}</p>
              <p>Email: {company.email}</p>
              <p>{company.hours}</p>
            </div>
          </div>

          <QuoteForm />
        </Container>
      </section>
    </main>
  );
}
