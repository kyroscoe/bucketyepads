"use client";

import { useMemo, useState } from "react";
import { FileText, Search } from "lucide-react";

type ProductFitment = {
  id: string;
  catalogTitle: string;
  catalogFile: string;
  catalogPage: number;
  section: string;
  manufacturer: string;
  equipmentModel: string;
  productType: string;
  partNumber: string;
  material: string;
  buckSize: string;
  application: string;
  requiresModelNumber: boolean;
  quantity: string;
  notes: string;
  searchText: string;
};

type ProductFitmentSearchProps = {
  fitments: ProductFitment[];
};

function normalizeSearchText(value: string) {
  return value
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function uniqueValues(fitments: ProductFitment[], key: keyof ProductFitment) {
  return Array.from(
    new Set(fitments.map((fitment) => String(fitment[key])).filter(Boolean)),
  ).sort((a, b) => a.localeCompare(b));
}

function compactSearchText(value: string) {
  return value.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
}

function fieldTokens(value: string) {
  return normalizeSearchText(value).split(" ").filter(Boolean);
}

function compactFieldTokens(value: string) {
  return [
    compactSearchText(value),
    ...fieldTokens(value).map((token) => compactSearchText(token)),
  ].filter(Boolean);
}

function isShortCodeTerm(term: string) {
  return /^[a-z]+$/.test(term) && term.length <= 3;
}

function codeTermMatches(value: string, term: string) {
  const tokens = fieldTokens(value);
  const compactTokens = compactFieldTokens(value);

  if (/^\d+$/.test(term)) {
    return tokens.includes(term) || compactTokens.includes(term);
  }

  if (isShortCodeTerm(term)) {
    return (
      tokens.includes(term) ||
      compactTokens.some((token) => token.startsWith(term))
    );
  }

  return (
    tokens.includes(term) ||
    compactTokens.includes(term) ||
    compactTokens.some((token) => token.startsWith(term))
  );
}

function textTermMatches(value: string, term: string) {
  if (/^\d+$/.test(term) || isShortCodeTerm(term)) {
    return codeTermMatches(value, term);
  }

  return normalizeSearchText(value).includes(term);
}

function scoreFitment(fitment: ProductFitment, query: string, terms: string[]) {
  if (terms.length === 0) {
    return 0;
  }

  const compactQuery = compactSearchText(query);
  const primaryFields = [
    fitment.partNumber,
    fitment.equipmentModel,
    fitment.manufacturer,
  ];
  const secondaryFields = [
    fitment.productType,
    fitment.material,
    fitment.buckSize,
    fitment.application,
  ];
  const supportingFields = [fitment.section, fitment.notes, fitment.catalogTitle];

  const allTermsMatch = terms.every((term) => {
    const primaryMatch = primaryFields.some((value) => codeTermMatches(value, term));
    const secondaryMatch = secondaryFields.some((value) => textTermMatches(value, term));
    const supportingMatch =
      !isShortCodeTerm(term) &&
      supportingFields.some((value) => textTermMatches(value, term));

    return primaryMatch || secondaryMatch || supportingMatch;
  });

  if (!allTermsMatch) {
    return -1;
  }

  let score = 0;

  for (const value of [fitment.partNumber, fitment.equipmentModel]) {
    const compactValue = compactSearchText(value);
    const tokens = fieldTokens(value);

    if (compactValue === compactQuery) {
      score += 1000;
    } else if (tokens.includes(compactQuery)) {
      score += 900;
    } else if (compactValue.startsWith(compactQuery)) {
      score += 800;
    }
  }

  if (fieldTokens(fitment.manufacturer).includes(compactQuery)) {
    score += 650;
  }

  for (const term of terms) {
    if (primaryFields.some((value) => codeTermMatches(value, term))) {
      score += 250;
    } else if (secondaryFields.some((value) => textTermMatches(value, term))) {
      score += 90;
    } else {
      score += 20;
    }
  }

  return score;
}

export function ProductFitmentSearch({ fitments }: ProductFitmentSearchProps) {
  const [query, setQuery] = useState("");
  const [productType, setProductType] = useState("All");
  const [manufacturer, setManufacturer] = useState("All");
  const normalizedTerms = useMemo(
    () => normalizeSearchText(query).split(" ").filter(Boolean),
    [query],
  );

  const productTypes = useMemo(
    () => ["All", ...uniqueValues(fitments, "productType")],
    [fitments],
  );
  const manufacturers = useMemo(
    () => ["All", ...uniqueValues(fitments, "manufacturer")],
    [fitments],
  );
  const hasActiveSearch =
    normalizedTerms.length > 0 || productType !== "All" || manufacturer !== "All";

  const filteredFitments = useMemo(() => {
    return fitments
      .map((fitment) => ({
        fitment,
        score:
          normalizedTerms.length === 0
            ? 0
            : scoreFitment(fitment, query, normalizedTerms),
      }))
      .filter(({ fitment, score }) => {
        const matchesQuery = normalizedTerms.length === 0 || score >= 0;
        const matchesProductType =
          productType === "All" || fitment.productType === productType;
        const matchesManufacturer =
          manufacturer === "All" || fitment.manufacturer === manufacturer;

        return matchesQuery && matchesProductType && matchesManufacturer;
      })
      .sort((a, b) => b.score - a.score)
      .map(({ fitment }) => fitment);
  }, [
    fitments,
    manufacturer,
    normalizedTerms,
    productType,
    query,
  ]);

  const resultLabel =
    filteredFitments.length === 1
      ? "1 matching fitment"
      : `${filteredFitments.length} matching fitments`;

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-[1fr_220px_280px]">
        <label className="relative block">
          <span className="sr-only">Search product fitments</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search part number, machine model, buck size, or application"
            className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-base font-semibold text-slate-900 outline-none ring-brand-red transition placeholder:text-slate-400 focus:ring-2"
          />
        </label>

        <label className="block">
          <span className="sr-only">Product type</span>
          <select
            value={productType}
            onChange={(event) => setProductType(event.target.value)}
            className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm font-bold text-slate-800 outline-none ring-brand-red transition focus:ring-2"
          >
            {productTypes.map((type) => (
              <option key={type} value={type}>
                {type === "All" ? "All product types" : type}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Manufacturer</span>
          <select
            value={manufacturer}
            onChange={(event) => setManufacturer(event.target.value)}
            className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm font-bold text-slate-800 outline-none ring-brand-red transition focus:ring-2"
          >
            {manufacturers.map((name) => (
              <option key={name} value={name}>
                {name === "All" ? "All manufacturers" : name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {hasActiveSearch ? (
        <>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm font-semibold text-slate-600">
            <p>{resultLabel}</p>
          </div>

          {filteredFitments.length > 0 ? (
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              <div className="hidden grid-cols-[160px_180px_1fr_180px_140px] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-black uppercase text-slate-500 lg:grid">
                <span>Part</span>
                <span>Type</span>
                <span>Fits</span>
                <span>Buck Size</span>
                <span>Catalog</span>
              </div>

              <div className="divide-y divide-slate-200">
                {filteredFitments.map((fitment) => (
                  <article
                    key={fitment.id}
                    className="grid gap-4 px-5 py-5 lg:grid-cols-[160px_180px_1fr_180px_140px] lg:items-center"
                  >
                    <div>
                      <p className="text-base font-black text-brand-navy">
                        {fitment.partNumber}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {fitment.productType}
                      </p>
                      {fitment.material ? (
                        <p className="mt-1 text-sm text-slate-600">
                          {fitment.material}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <p className="text-sm font-black text-slate-900">
                        {fitment.manufacturer} {fitment.equipmentModel}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {fitment.application}
                        {fitment.requiresModelNumber ? " | Model number required" : ""}
                      </p>
                      {fitment.notes ? (
                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          {fitment.notes}
                        </p>
                      ) : null}
                    </div>

                    <p className="text-sm font-bold text-slate-800">
                      {fitment.buckSize}
                    </p>

                    <a
                      href={fitment.catalogFile}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-red transition hover:text-brand-orange"
                    >
                      <FileText aria-hidden="true" className="h-4 w-4" />
                      Page {fitment.catalogPage}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </>
      ) : null}

      {hasActiveSearch && filteredFitments.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-card">
          <p className="text-sm font-semibold leading-7 text-slate-600">
            No fitments matched your search. Try a part number like PRO-850, a
            model like DC-446, or a size like 46 x 20.
          </p>
        </div>
      ) : null}
    </div>
  );
}
