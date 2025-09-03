import { computed, watch } from 'vue'
import { useState, useCookie } from '#app'

export type CartItem = {
  id: string
  title: string
  price: number
  quantity: number
}

export function useCart() {
  // Persist cart on the user side via cookie (SSR-friendly)
  const cartCookie = useCookie<CartItem[]>('bt_cart', { default: () => [] })

  // Initialize state from cookie so SSR and CSR see the same initial value
  const items = useState<CartItem[]>('cart:items', () => cartCookie.value || [])

  // Keep cookie in sync whenever items change
  watch(items, (val) => {
    cartCookie.value = val
  }, { deep: true })

  function addItem(payload: { id: string; title: string; price: number }, qty = 1) {
    if (!payload || !payload.id) return
    const index = items.value.findIndex(i => i.id === payload.id)
    if (index !== -1) {
      const current = items.value[index]
      if (!current) return
      const updated: CartItem = { ...current, quantity: current.quantity + qty }
      items.value = items.value.map((i, idx) => (idx === index ? updated : i))
    } else {
      const newItem: CartItem = { id: payload.id, title: payload.title, price: payload.price, quantity: qty }
      items.value = [...items.value, newItem]
    }
  }

  function removeItem(id: string, qty = 1) {
    const index = items.value.findIndex(i => i.id === id)
    if (index === -1) return
    const current = items.value[index]
    if (!current) return
    const newQty = current.quantity - qty
    if (newQty <= 0) {
      items.value = items.value.filter((_, idx) => idx !== index)
    } else {
      const updated: CartItem = { ...current, quantity: newQty }
      items.value = items.value.map((i, idx) => (idx === index ? updated : i))
    }
  }

  function deleteItem(id: string) {
    items.value = items.value.filter(i => i.id !== id)
  }

  function clear() {
    items.value = []
  }

  const count = computed(() => items.value.reduce((sum, i) => sum + i.quantity, 0))
  const total = computed(() => items.value.reduce((sum, i) => sum + i.price * i.quantity, 0))

  return { items, addItem, removeItem, deleteItem, clear, count, total }
}
