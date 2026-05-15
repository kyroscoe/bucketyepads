import Link from 'next/link';
import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { resourceLinks, siteData } from '@/components/site-data';

export default function ResourcesPage() {
  const { resourcesPage } = siteData;

  return (
    <main>
      <PageHero
        title={resourcesPage.heroTitle}
        description={resourcesPage.heroDescription}
      />
      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {resourceLinks.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
              <h2 className="text-2xl font-black tracking-tight text-brand-navy">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              <Link href={item.href} className="mt-6 inline-flex text-sm font-bold text-brand-red">
                Open resource
              </Link>
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}
