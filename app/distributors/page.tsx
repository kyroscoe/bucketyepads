import Link from 'next/link';
import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { company, distributorStates, siteData } from '@/components/site-data';

const distributorCount = distributorStates.reduce((total, state) => total + state.distributors.length, 0);

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

export default function DistributorsPage() {
  const { distributorsPage } = siteData;

  return (
    <main>
      <PageHero
        title={distributorsPage.heroTitle}
        description={distributorsPage.heroDescription}
      />
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card lg:sticky lg:top-28">
            <h2 className="text-2xl font-black tracking-tight text-brand-navy">{distributorsPage.supportTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {distributorsPage.supportDescription.replace('{count}', String(distributorCount))}
            </p>
            <dl className="mt-6 grid gap-4 border-y border-slate-200 py-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{distributorsPage.customerServiceLabel}</dt>
                <dd className="mt-1 text-sm font-bold text-brand-navy">
                  <a className="transition hover:text-brand-red" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{distributorsPage.phoneLabel}</dt>
                <dd className="mt-1 text-sm font-bold text-brand-navy">
                  <a className="transition hover:text-brand-red" href={phoneHref(company.phone)}>
                    {company.phone}
                  </a>
                </dd>
              </div>
            </dl>
            <Link href="/contact" className="mt-6 inline-flex rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange">
              {distributorsPage.contactButtonLabel}
            </Link>
          </aside>
          <div className="grid gap-5">
            {distributorStates.map(({ state, distributors }) => (
              <section key={state} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-slate-200 pb-4">
                  <h2 className="text-2xl font-black tracking-tight text-brand-navy">{state}</h2>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
                    {distributors.length > 0 ? `${distributors.length} ${distributors.length === 1 ? 'Listing' : 'Listings'}` : 'Customer Service'}
                  </span>
                </div>

                {distributors.length > 0 ? (
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {distributors.map((distributor) => (
                      <div key={`${state}-${distributor.name}-${distributor.city}-${distributor.phone}`} className="rounded-2xl bg-slate-50 p-4">
                        <h3 className="text-base font-black text-brand-navy">{distributor.name}</h3>
                        <p className="mt-2 text-sm font-semibold text-slate-600">{distributor.city}</p>
                        <a className="mt-3 inline-flex text-sm font-bold text-brand-red transition hover:text-brand-orange" href={phoneHref(distributor.phone)}>
                          {distributor.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                    <h3 className="text-base font-black text-brand-navy">{distributorsPage.customerServiceTitle}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {distributorsPage.noDistributorTemplate.replace('{state}', state)}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
                      <a className="text-brand-red transition hover:text-brand-orange" href={`mailto:${company.email}`}>
                        {company.email}
                      </a>
                      <a className="text-brand-red transition hover:text-brand-orange" href={phoneHref(company.tollFree)}>
                        {company.tollFree}
                      </a>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
