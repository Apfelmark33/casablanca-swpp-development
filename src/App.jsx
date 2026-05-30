import { useEffect, useMemo, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ShareBar from './components/ShareBar'
import useSharedList from './hooks/useSharedList'
import {
  buildShareUrl,
  createItem,
  ensureUrlHasListId,
  generateListId,
  readListIdFromUrl,
} from './utils/list'

export default function App() {
  const [listId, setListId] = useState(() => readListIdFromUrl() || generateListId())
  const [title, setTitle] = useState('')
  const [quantity, setQuantity] = useState('')
  const [shareStatus, setShareStatus] = useState('')

  useEffect(() => {
    ensureUrlHasListId(listId)
  }, [listId])

  const [items, setItems] = useSharedList(listId)

  const openItems = useMemo(() => items.filter((item) => !item.done), [items])
  const completedItems = useMemo(() => items.filter((item) => item.done), [items])
  const shareUrl = buildShareUrl(listId)

  function handleAddItem(event) {
    event.preventDefault()
    if (!title.trim()) {
      return
    }

    const newItem = createItem(title, quantity)
    setItems((currentItems) => [newItem, ...currentItems])
    setTitle('')
    setQuantity('')
  }

  function handleToggleDone(itemId) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, done: !item.done } : item,
      ),
    )
  }

  function handleDeleteItem(itemId) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== itemId))
  }

  function handleClearCompleted() {
    setItems((currentItems) => currentItems.filter((item) => !item.done))
  }

  async function handleShare(url) {
    try {
      await navigator.clipboard.writeText(url)
      setShareStatus('Link kopiert!')
    } catch {
      window.prompt('Kopiere den Link manuell:', url)
      setShareStatus('Link in Zwischenablage kopieren fehlgeschlagen.')
    }

    window.setTimeout(() => {
      setShareStatus('')
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-[2rem] bg-white px-6 py-8 shadow-xl shadow-slate-200/40 sm:px-10 sm:py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-butter-700">Brot & Butter</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Minimaler Einkaufszettel
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 sm:text-lg">
            Erstelle eine Liste, teile den Link und benutze die Einkaufsliste ohne Login. Items werden lokal gespeichert und zwischen Tabs synchronisiert.
          </p>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.9fr] xl:items-start">
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Status</p>
                    <p className="mt-1 text-3xl font-bold text-slate-950">{openItems.length}</p>
                    <p className="text-sm text-slate-500">offene Artikel</p>
                  </div>
                  <div className="rounded-3xl bg-white px-4 py-3 text-right shadow-sm shadow-slate-200/70">
                    <p className="text-sm text-slate-500">Erledigt</p>
                    <p className="text-3xl font-bold text-slate-900">{completedItems.length}</p>
                  </div>
                </div>
              </div>

              <TaskForm
                title={title}
                quantity={quantity}
                onTitleChange={setTitle}
                onQuantityChange={setQuantity}
                onAddItem={handleAddItem}
              />

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold text-slate-700">Aktionen</p>
                  <button
                    type="button"
                    onClick={handleClearCompleted}
                    disabled={completedItems.length === 0}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Erledigte Items löschen
                  </button>
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  Entfernt nur die bereits gekennzeichneten Artikel aus der aktuellen Liste.
                </p>
              </div>
            </div>

            <ShareBar
              shareUrl={shareUrl}
              onShare={handleShare}
              shareStatus={shareStatus}
              itemCount={items.length}
            />
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-6 py-8 shadow-xl shadow-slate-200/40 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">Einkaufsliste</h2>
              <p className="text-sm text-slate-500">Klicke ein Item an, um es als gekauft zu markieren.</p>
            </div>
            <p className="text-sm text-slate-500">Liste-ID: <span className="font-semibold text-slate-700">{listId}</span></p>
          </div>

          <div className="mt-6">
            <TaskList
              items={items}
              onToggleDone={handleToggleDone}
              onDeleteItem={handleDeleteItem}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
