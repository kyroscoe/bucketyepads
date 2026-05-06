import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/CardGrid';
import { productCategories } from '@/components/site-data';

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        title="Product Categories"
        description="A cleaner structure for buyers. Start with the category, then drill into machine fit, application, and quote needs."
      />
      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((item) => (
            <ProductCard key={item.slug} item={item} />
          ))}
        </Container>
      </section>
    </main>
  );
}
