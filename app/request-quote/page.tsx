import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";

export default function RequestQuotePage() {
  return (
    <main>
      <PageHero title="Request a Quote" description="" />
      <section className="py-20">
        <Container>
          <QuoteForm />
        </Container>
      </section>
    </main>
  );
}
