import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { QuoteForm } from '@/components/QuoteForm';

export default function RequestQuotePage() {
  return (
    <main>
      <PageHero
        title="Request a Quote"
        description="This page gives the client a practical next step. It is one of the highest-value pages in the redesign because it turns the site from brochure to lead capture tool."
      />
      <section className="py-20">
        <Container>
          <QuoteForm />
        </Container>
      </section>
    </main>
  );
}
