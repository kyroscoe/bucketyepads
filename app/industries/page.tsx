import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { IndustryCard } from '@/components/CardGrid';
import { industries } from '@/components/site-data';

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        title="Industries We Serve"
        description="This section turns buried capabilities into real sales pages. It helps explain where FH Bonn fits instead of forcing every visitor to interpret a dense home page."
      />
      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => (
            <IndustryCard key={item.name} item={item} />
          ))}
        </Container>
      </section>
    </main>
  );
}
