import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { siteData } from "@/components/site-data";

export default function RequestQuotePage() {
  const { requestQuotePage } = siteData;

  return (
    <main>
      <PageHero
        title={requestQuotePage.heroTitle}
        description={requestQuotePage.heroDescription}
      />
      <section className="py-20">
        <Container>
          <QuoteForm />
        </Container>
      </section>
    </main>
  );
}
