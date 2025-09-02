<template>
  <div v-if="open" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/30" @click="$emit('close')"></div>
    <div class="absolute inset-0 flex items-center justify-center p-4">
      <div class="w-full max-w-lg rounded-xl bg-white shadow-lg">
        <div class="flex items-center justify-between px-5 py-4 border-b">
          <h4 class="text-base font-medium">{{ item?.title || 'Coding option details' }}</h4>
          <button type="button" class="text-gray-500 hover:text-black" @click="$emit('close')">✕</button>
        </div>
        <div class="px-5 py-4">
          <p class="text-sm text-gray-600" v-if="item">{{ item.subtitle }}</p>
          <p class="text-sm text-gray-600" v-else>Learn how coding options work and what you can enable.</p>
        </div>
        <div class="px-5 py-4 border-t flex items-center justify-end gap-3">
          <button type="button" class="rounded-md border border-gray-300 px-3 py-2 text-sm" @click="$emit('close')">Close</button>
          <button type="button" class="rounded-md bg-black text-white px-3 py-2 text-sm">Proceed</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
type OptionItem = {
  id: string
  title: string
  subtitle: string
  category: string
}

defineProps<{ open: boolean; item: OptionItem | null }>()
</script>

