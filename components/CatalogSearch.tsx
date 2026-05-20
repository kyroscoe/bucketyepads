"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

type Catalog = {
  title: string;
  description: string;
  file: string;
  keywords: string;
};

type CatalogSearchProps = {
  catalogs: Catalog[];
  placeholder: string;
  noResultsText: string;
};

export function CatalogSearch({
  catalogs,
  placeholder,
  noResultsText,
}: CatalogSearchProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredCatalogs = useMemo(() => {
    if (!normalizedQuery) {
      return catalogs;
    }

    return catalogs.filter((catalog) => {
      const searchableText = [
        catalog.title,
        catalog.description,
        catalog.keywords,
        catalog.file,
      ]
        .join(" ")
        .toLowerCase();

      return normalizedQuery
        .split(/\s+/)
        .every((term) => searchableText.includes(term));
    });
  }, [catalogs, normalizedQuery]);

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search catalogs</span>
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
        />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-base font-semibold text-slate-900 outline-none ring-brand-red transition placeholder:text-slate-400 focus:ring-2"
        />
      </label>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredCatalogs.map((catalog) => (
          <article
            key={catalog.file}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card"
          >
            <h2 className="text-2xl font-black tracking-tight text-brand-navy">
              {catalog.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {catalog.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={catalog.file}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange"
              >
                View PDF
              </a>
              <a
                href={catalog.file}
                download
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
              >
                Download
              </a>
            </div>
          </article>
        ))}
      </div>

      {filteredCatalogs.length === 0 ? (
        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-card">
          <p className="text-sm font-semibold leading-7 text-slate-600">
            {noResultsText}
          </p>
        </div>
      ) : null}
    </div>
  );
}
