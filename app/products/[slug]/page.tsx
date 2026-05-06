import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { productCategories } from '@/components/site-data';

export function generateStaticParams() {
  return productCategories.map((item) => ({ slug: item.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = productCategories.find((entry) => entry.slug === slug);

  if (!item) notFound();

  return (
    <main>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-gray to-white py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-red">Product Category</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">{item.name}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{item.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/request-quote" className="rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange">
                Request Quote
              </Link>
              <Link href="/contact" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50">
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
            <Image src={item.image} alt={item.name} width={900} height={560} className="h-auto w-full" />
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="text-2xl font-black tracking-tight text-brand-navy">Key Features</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-7 text-slate-600">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="rounded-2xl bg-slate-50 px-5 py-4">{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="text-2xl font-black tracking-tight text-brand-navy">Typical Applications</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-7 text-slate-600">
              {item.applications.map((application) => (
                <li key={application} className="rounded-2xl bg-slate-50 px-5 py-4">{application}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
