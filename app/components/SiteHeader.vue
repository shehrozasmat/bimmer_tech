<template>
  <header class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">

        <div class="flex-shrink-0">
          <a href="#" class="text-2xl font-bold">BimmerTech</a>
        </div>

        <nav class="hidden md:flex space-x-8">
          <a href="#" class="hover:text-gray-300">Home</a>
          <a href="#" class="hover:text-gray-300">About</a>
          <a href="#" class="hover:text-gray-300">Services</a>
          <a href="#" class="hover:text-gray-300">Contact</a>
        </nav>

        <div ref="cartContainer" class="relative">
          <button @click="toggleCart" class="flex items-center gap-2 text-gray-200 hover:text-white">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.091.833l.383 1.375M7.5 14.25h8.955a1.5 1.5 0 001.463-1.17l1.359-6A1.5 1.5 0 0017.827 5.25H5.11m2.39 9l-1.5 6m10.5-6l1.5 6M6.75 20.25h10.5" />
            </svg>
            <span>Cart</span>
          </button>
          <span v-if="cart.count.value" class="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-teal-600 rounded-full min-w-[1.25rem]">{{ cart.count.value }}</span>


          <div
            v-if="showCart"
            class="absolute right-0 mt-2 w-80 bg-white text-gray-900 shadow-lg rounded-md overflow-hidden z-50"
          >
            <div class="p-4 max-h-80 overflow-auto" v-if="cart.items.value.length">
              <div v-for="item in cart.items.value" :key="item.id" class="flex items-center justify-between py-2 border-b last:border-b-0">
                <div>
                  <div class="font-medium">{{ item.title }}</div>
                  <div class="text-sm text-gray-500">Qty: {{ item.quantity }}</div>
                </div>
                <div class="text-right font-semibold">{{ (item.price * item.quantity).toFixed(2) }}</div>
              </div>
            </div>
            <div class="p-4 text-center text-sm text-gray-600" v-else>
              Your cart is empty.
            </div>
            <div class="p-4 border-t bg-gray-50 flex items-center justify-between">
              <div class="font-semibold">Total: {{ cart.total.value.toFixed(2) }}</div>
              <div class="flex gap-2">
                <button @click="cart.clear(); closeCart()" class="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded">Clear</button>
                <NuxtLink to="/cart" class="px-3 py-1 text-sm bg-teal-600 text-white hover:bg-teal-700 rounded" @click="closeCart">View cart</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="md:hidden">
          <button class="text-gray-300 hover:text-white focus:outline-none">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useCart } from '~/composables/useCart'

const cart = useCart()
const showCart = ref(false)
const cartContainer = ref<HTMLElement | null>(null)

function toggleCart() {
  showCart.value = !showCart.value
}
function closeCart() {
  showCart.value = false
}

function onGlobalClick(e: MouseEvent) {
  if (!showCart.value) return
  const target = e.target as Node | null
  if (cartContainer.value && target && !cartContainer.value.contains(target)) {
    closeCart()
  }
}
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeCart()
}

onMounted(() => {
  window.addEventListener('click', onGlobalClick)
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  window.removeEventListener('click', onGlobalClick)
  window.removeEventListener('keydown', onKeydown)
})
</script>