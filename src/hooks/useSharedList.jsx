import { useEffect, useState, useRef } from 'react'
import { getListKey, loadList, saveList } from '../utils/list'

export default function useSharedList(listId) {
  const [items, setItems] = useState(() => loadList(listId))
  const savingRef = useRef(false)

  useEffect(() => {
    setItems(loadList(listId))
  }, [listId])

  useEffect(() => {
    saveList(listId, items)
    savingRef.current = true
    const timer = window.setTimeout(() => {
      savingRef.current = false
    }, 50)

    return () => window.clearTimeout(timer)
  }, [listId, items])

  useEffect(() => {
    function handleStorage(event) {
      if (event.key !== getListKey(listId)) {
        return
      }

      if (savingRef.current) {
        return
      }

      if (!event.newValue) {
        setItems([])
        return
      }

      try {
        const next = JSON.parse(event.newValue)
        if (Array.isArray(next)) {
          setItems(next)
        }
      } catch {
        // ignore malformed storage updates
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [listId])

  return [items, setItems]
}
