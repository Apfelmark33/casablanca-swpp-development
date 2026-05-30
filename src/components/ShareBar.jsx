export default function ShareBar({ shareUrl, onShare, shareStatus, itemCount }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-800">Teile diese Liste</p>
          <p className="text-sm text-slate-500">Link kopieren und an andere weitergeben.</p>
        </div>

        <button
          type="button"
          onClick={() => onShare(shareUrl)}
          className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Link kopieren
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
        <p>
          {itemCount} Artikel in dieser Liste. Öffne den Link in einem anderen Tab, um die Liste zu teilen.
        </p>
        <p className="break-all rounded-2xl bg-white p-3 text-slate-700 shadow-sm">{shareUrl}</p>
        {shareStatus && (
          <p className="text-butter-700">{shareStatus}</p>
        )}
      </div>
    </div>
  )
}
