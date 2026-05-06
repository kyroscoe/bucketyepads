import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-14 w-14 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
        <Image src="/images/logo-current.png" alt="Buckeye Pads and Covers" fill className="object-contain p-1" />
      </div>
      <div>
        <div className="text-lg font-bold tracking-tight text-brand-navy">Buckeye Pads & Covers</div>
      </div>
    </Link>
  );
}
