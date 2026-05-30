export default function TaskForm({ title, quantity, onTitleChange, onQuantityChange, onAddItem }) {
  return (
    <form className="space-y-4" onSubmit={onAddItem}>
      <div className="grid gap-3 md:grid-cols-[1.6fr_0.9fr]">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Artikel</span>
          <input
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-butter-500 focus:ring-2 focus:ring-butter-200"
            type="text"
            placeholder="z. B. Brot"
            value={title}
            onChange={(event) => onTitleChange(event.target.value)}
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Menge (optional)</span>
          <input
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-butter-500 focus:ring-2 focus:ring-butter-200"
            type="text"
            placeholder="z. B. 2 Packungen"
            value={quantity}
            onChange={(event) => onQuantityChange(event.target.value)}
          />
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-2xl bg-butter-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-butter-600"
      >
        Artikel hinzufügen
      </button>
    </form>
  )
}
