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
