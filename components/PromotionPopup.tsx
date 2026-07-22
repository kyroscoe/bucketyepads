'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Megaphone, X } from 'lucide-react';

type PromotionPopupContent = {
  enabled?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

type PromotionPopupProps = {
  promotion?: PromotionPopupContent;
};

export function PromotionPopup({ promotion }: PromotionPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  const storageKey = useMemo(() => {
    const keySource = promotion?.title?.trim() || 'site-promotion';
    return `buckeye-promotion-dismissed:${keySource}`;
  }, [promotion?.title]);

  useEffect(() => {
    if (!promotion?.enabled || !promotion.title || !promotion.description) {
      return;
    }

    if (window.sessionStorage.getItem(storageKey) === 'true') {
      return;
    }

    const timer = window.setTimeout(() => setIsVisible(true), 900);
    return () => window.clearTimeout(timer);
  }, [promotion, storageKey]);

  if (!promotion?.enabled || !promotion.title || !promotion.description || !isVisible) {
    return null;
  }

  const closePopup = () => {
    window.sessionStorage.setItem(storageKey, 'true');
    setIsVisible(false);
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/45 px-4 py-5 sm:items-center sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promotion-popup-title"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-2xl">
        <button
          type="button"
          aria-label="Close promotion popup"
          onClick={closePopup}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 pr-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
              <Megaphone className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              {promotion.eyebrow ? (
                <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-red">
                  {promotion.eyebrow}
                </p>
              ) : null}
              <h2 id="promotion-popup-title" className="text-xl font-black text-brand-navy sm:text-2xl">
                {promotion.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          <p className="text-base font-medium leading-7 text-slate-700">
            {promotion.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {promotion.primaryCtaLabel && promotion.primaryCtaHref ? (
              <Link
                href={promotion.primaryCtaHref}
                onClick={closePopup}
                className="inline-flex items-center justify-center rounded-md bg-brand-red px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-orange"
              >
                {promotion.primaryCtaLabel}
              </Link>
            ) : null}
            {promotion.secondaryCtaLabel && promotion.secondaryCtaHref ? (
              <Link
                href={promotion.secondaryCtaHref}
                onClick={closePopup}
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-brand-navy transition hover:border-brand-red hover:text-brand-red"
              >
                {promotion.secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
