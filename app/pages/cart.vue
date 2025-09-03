<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
    <h1 class="text-2xl font-semibold mb-6">Your Cart</h1>

    <div v-if="cart.items.value.length" class="space-y-4">
      <div
        v-for="item in cart.items.value"
        :key="item.id"
        class="flex items-center justify-between bg-neutral-900 border border-white/10 rounded p-4"
      >
        <div>
          <div class="font-medium">{{ item.title }}</div>
          <div class="text-sm text-neutral-400">Unit: {{ formatPrice(item.price) }}</div>
        </div>
        <div class="flex items-center gap-3">
          <button class="px-2 py-1 bg-neutral-800 border border-white/10 rounded" @click="dec(item.id)">-</button>
          <div class="w-10 text-center">{{ item.quantity }}</div>
          <button class="px-2 py-1 bg-neutral-800 border border-white/10 rounded" @click="inc(item.id)">+</button>
        </div>
        <div class="w-28 text-right font-semibold">{{ formatPrice(item.price * item.quantity) }}</div>
        <button class="px-3 py-1 bg-red-600 hover:bg-red-700 rounded" @click="cart.deleteItem(item.id)">Remove</button>
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-white/10">
        <NuxtLink to="/" class="text-teal-300 hover:text-teal-200">Continue shopping</NuxtLink>
        <div class="flex items-center gap-4">
          <div class="text-lg font-semibold">Total: {{ formatPrice(cart.total.value) }}</div>
          <button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded" @click="cart.clear()">Clear cart</button>
          <button class="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded" disabled>Checkout</button>
        </div>
      </div>
    </div>

    <div v-else class="text-neutral-400">
      Your cart is empty.
      <NuxtLink to="/" class="text-teal-300 hover:text-teal-200 ml-1">Go back to shop</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCart } from '~/composables/useCart'

const cart = useCart()

function inc(id: string) {
  const found = cart.items.value.find(i => i.id === id)
  if (!found) return
  cart.addItem({ id: found.id, title: found.title, price: found.price }, 1)
}
function dec(id: string) {
  cart.removeItem(id, 1)
}

function formatPrice(v?: number) {
  if (v == null) return ''
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v)
}
</script>
