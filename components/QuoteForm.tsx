export function QuoteForm() {
  return (
    <form className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Name
          <input className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Company
          <input className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2" placeholder="Company name" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Email
          <input type="email" className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2" placeholder="you@company.com" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Phone
          <input className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2" placeholder="Phone number" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Product Category
          <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2">
            <option>Dry Cleaning Pads</option>
            <option>Laundry Pads & Covers</option>
            <option>Steel & Texsteel Pads</option>
            <option>Roll Goods & Fabrics</option>
            <option>Industrial Sewing</option>
            <option>Knitted Wire Mesh</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Machine Make / Model
          <input className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2" placeholder="Ajax, Sankosha, Unipress, etc." />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Project Details
        <textarea rows={6} className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-red transition focus:ring-2" placeholder="Tell us what you need, quantities, timing, and any spec details." />
      </label>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm leading-7 text-slate-500">Form is styled and ready. Hook this up to your preferred email, CRM, or form handler.</p>
        <button type="submit" className="rounded-xl bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-brand-orange">
          Submit Quote Request
        </button>
      </div>
    </form>
  );
}
