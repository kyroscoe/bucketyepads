import Image from 'next/image';
import type { Industry, ProductCategory } from '@/components/site-data';

export function ProductCard({ item }: { item: ProductCategory }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
      <div className="flex h-56 items-center justify-center bg-slate-50 p-5">
        <Image
          src={item.image}
          alt=""
          width={800}
          height={520}
          className="max-h-full w-full object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black tracking-tight text-brand-navy">{item.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.short}</p>
      </div>
    </article>
  );
}

export function IndustryCard({ item }: { item: Industry }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
      <div className="flex h-56 items-center justify-center bg-slate-50 p-5">
        <Image
          src={item.image}
          alt=""
          width={800}
          height={520}
          className="max-h-full w-full object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black tracking-tight text-brand-navy">{item.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
      </div>
    </article>
  );
}
