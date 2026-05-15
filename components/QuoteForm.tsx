import { siteData } from "@/components/site-data";

export function QuoteForm() {
  const { quoteForm } = siteData;
  const { fields } = quoteForm;

  return (
    <form
      action={quoteForm.action}
      method="POST"
      className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {fields.nameLabel}
          <input
            name="name"
            required
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2"
            placeholder={fields.namePlaceholder}
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {fields.companyLabel}
          <input
            name="company"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2"
            placeholder={fields.companyPlaceholder}
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {fields.emailLabel}
          <input
            name="email"
            type="email"
            required
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2"
            placeholder={fields.emailPlaceholder}
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {fields.phoneLabel}
          <input
            name="phone"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2"
            placeholder={fields.phonePlaceholder}
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {fields.productCategoryLabel}
          <select
            name="productCategory"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2"
          >
            {quoteForm.productCategoryOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {fields.machineModelLabel}
          <input
            name="machineModel"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2"
            placeholder={fields.machineModelPlaceholder}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        {fields.projectDetailsLabel}
        <textarea
          name="projectDetails"
          rows={6}
          required
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2"
          placeholder={fields.projectDetailsPlaceholder}
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          className="rounded-xl bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-brand-orange"
        >
          {fields.submitLabel}
        </button>
      </div>
    </form>
  );
}
