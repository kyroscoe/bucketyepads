import { CatalogSearch } from "@/components/CatalogSearch";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ProductFitmentSearch } from "@/components/ProductFitmentSearch";
import catalogSearchIndex from "@/content/catalog-search-index.json";
import productFitmentIndex from "@/content/product-fitment-index.json";
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
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-brand-navy">
              Search Pads, Covers, and Fitments
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Search the starter product database by part number, machine model,
              manufacturer, application, or buck size.
            </p>
          </div>

          <ProductFitmentSearch fitments={productFitmentIndex} />
        </Container>
      </section>

      <section className="border-t border-slate-200 py-20">
        <Container>
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-brand-navy">
              Download Catalog PDFs
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Browse or download the full catalogs while the product fitment
              database is being built out.
            </p>
          </div>

          <CatalogSearch
            catalogs={catalogsPage.catalogs}
            searchIndex={catalogSearchIndex}
            placeholder={catalogsPage.searchPlaceholder}
            noResultsText={catalogsPage.noResultsText}
            showSearch={false}
          />
        </Container>
      </section>
    </main>
  );
}
