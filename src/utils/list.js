export const STORAGE_PREFIX = 'brot-butter-list'

export function generateListId() {
  return crypto.randomUUID()
}

export function getListKey(listId) {
  return `${STORAGE_PREFIX}:${listId}`
}

export function loadList(listId) {
  if (!listId) {
    return []
  }

  const raw = localStorage.getItem(getListKey(listId))
  if (!raw) {
    return []
  }

  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveList(listId, items) {
  if (!listId) {
    return
  }

  localStorage.setItem(getListKey(listId), JSON.stringify(items))
}

export function readListIdFromUrl() {
  return new URL(window.location.href).searchParams.get('list')
}

export function ensureUrlHasListId(listId) {
  const url = new URL(window.location.href)
  url.searchParams.set('list', listId)
  window.history.replaceState({}, '', url.toString())
  return url.toString()
}

export function buildShareUrl(listId) {
  const url = new URL(window.location.href)
  url.searchParams.set('list', listId)
  return url.toString()
}

export function createItem(title, quantity) {
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    quantity: quantity.trim(),
    done: false,
    createdAt: new Date().toISOString(),
  }
}
