import Image from 'next/image';
import Link from 'next/link';
import { ProductCategory, Industry } from '@/components/site-data';

export function ProductCard({ item }: { item: ProductCategory }) {
  return (
    <Link href={`/products/${item.slug}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-xl">
      <div className="border-b border-slate-100 bg-slate-50">
        <Image src={item.image} alt={item.name} width={800} height={520} className="h-52 w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold tracking-tight text-brand-navy">{item.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.short}</p>
        <div className="mt-5 text-sm font-bold text-brand-red">View category</div>
      </div>
    </Link>
  );
}

export function IndustryCard({ item }: { item: Industry }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <Image src={item.image} alt={item.name} width={640} height={420} className="h-36 w-full rounded-2xl bg-slate-50 object-cover" />
      <h3 className="mt-5 text-xl font-bold tracking-tight text-brand-navy">{item.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
    </div>
  );
}
