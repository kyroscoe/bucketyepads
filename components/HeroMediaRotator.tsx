'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Megaphone } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type HeroContent = {
  image?: string;
  imageAlt?: string;
};

type PromotionContent = {
  enabled?: boolean;
  showInHero?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

type HeroMediaRotatorProps = {
  hero: HeroContent;
  promotion?: PromotionContent;
};

export function HeroMediaRotator({ hero, promotion }: HeroMediaRotatorProps) {
  const hasPromotion =
    promotion?.showInHero && promotion.title?.trim() && promotion.description?.trim();
  const slides = useMemo(() => (hasPromotion ? ['photo', 'promotion'] : ['photo']), [hasPromotion]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
      <div
        className={`absolute inset-3 transition duration-700 ${
          activeSlide === 0 ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={activeSlide !== 0}
      >
        <Image
          src={hero.image || '/images/buckeye-building.jpg'}
          alt={hero.imageAlt || 'Buckeye Pads and Covers building'}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="rounded-[1.4rem] object-cover object-[58%_38%]"
          priority
        />
      </div>

      {hasPromotion ? (
        <div
          className={`absolute inset-3 flex rounded-[1.4rem] bg-white p-7 text-slate-900 transition duration-700 sm:p-8 ${
            activeSlide === 1 ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={activeSlide !== 1}
        >
          <div className="flex min-h-full flex-col justify-center">
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white">
              <Megaphone className="h-6 w-6" aria-hidden="true" />
            </span>
            {promotion.eyebrow ? (
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-red">
                {promotion.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">
              {promotion.title}
            </h2>
            <p className="mt-4 max-w-lg text-base font-medium leading-7 text-slate-700">
              {promotion.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {promotion.primaryCtaLabel && promotion.primaryCtaHref ? (
                <Link
                  href={promotion.primaryCtaHref}
                  className="inline-flex items-center justify-center rounded-md bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange"
                >
                  {promotion.primaryCtaLabel}
                </Link>
              ) : null}
              {promotion.secondaryCtaLabel && promotion.secondaryCtaHref ? (
                <Link
                  href={promotion.secondaryCtaHref}
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-brand-navy transition hover:border-brand-red hover:text-brand-red"
                >
                  {promotion.secondaryCtaLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {slides.length > 1 ? (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-slate-950/35 px-3 py-2 backdrop-blur">
          {slides.map((slide, index) => (
            <button
              key={slide}
              type="button"
              aria-label={`Show ${slide === 'photo' ? 'building photo' : 'promotion'}`}
              aria-pressed={activeSlide === index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                activeSlide === index ? 'bg-white' : 'bg-white/45 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
