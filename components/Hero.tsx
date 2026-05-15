import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 bg-grid bg-[size:40px_40px] opacity-20" />
      <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-100">
            Made in the USA
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Industrial Press Pads & Covers for Dry Cleaning and Laundry
            Equipment
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
            A cleaner, more professional experience for distributors, equipment
            manufacturers, and commercial operators who need the right fit fast.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-orange"
            >
              Request Quote
            </Link>
            <Link
              href="/distributors"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
            >
              Find a Distributor
            </Link>
          </div>
          <div className="mt-10 grid gap-5 text-sm text-zinc-200 sm:grid-cols-3">
            <div>
              <span className="block text-2xl font-black text-white">
                3000+
              </span>{" "}
              catalog items
            </div>
            <div>
              <span className="block text-2xl font-black text-white">55+</span>{" "}
              OEM programs
            </div>
            <div>
              <span className="block text-2xl font-black text-white">1947</span>{" "}
              founded
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-white/15 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
            <Image
              src="/images/logo-current.png"
              alt="Illustration of a commercial press with pad"
              width={900}
              height={680}
              className="h-auto w-full rounded-[1.4rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
