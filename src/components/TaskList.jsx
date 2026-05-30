export default function TaskList({ items, onToggleDone, onDeleteItem }) {
  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-500">
        Kein Eintrag vorhanden. Füge deinen ersten Artikel hinzu.
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-butter-300"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <label className="inline-flex items-center gap-3 text-slate-900">
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => onToggleDone(item.id)}
                  className="h-5 w-5 rounded border-slate-300 text-butter-500 focus:ring-butter-500"
                />
                <div>
                  <p className={`text-lg font-semibold ${item.done ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                    {item.title}
                  </p>
                  {item.quantity && (
                    <p className="text-sm text-slate-500">Menge: {item.quantity}</p>
                  )}
                </div>
              </label>
            </div>

            <button
              type="button"
              onClick={() => onDeleteItem(item.id)}
              className="self-start rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 md:self-center"
            >
              Löschen
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
