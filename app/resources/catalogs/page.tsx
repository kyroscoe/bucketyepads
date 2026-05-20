import Link from "next/link";
import { CatalogSearch } from "@/components/CatalogSearch";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import catalogSearchIndex from "@/content/catalog-search-index.json";
import { siteData } from "@/components/site-data";

export default function CatalogsPage() {
  const { catalogsPage } = siteData;

  return (
    <main>
      <PageHero
        title={catalogsPage.heroTitle}
        description={catalogsPage.heroDescription}
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

          <CatalogSearch
            catalogs={catalogsPage.catalogs}
            searchIndex={catalogSearchIndex}
            placeholder={catalogsPage.searchPlaceholder}
            noResultsText={catalogsPage.noResultsText}
          />
        </Container>
      </section>
    </main>
  );
}
