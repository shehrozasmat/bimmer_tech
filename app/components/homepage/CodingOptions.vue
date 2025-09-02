<template>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between">
        <div>
          <h1 class="title font-semibold">Check your coding options </h1>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside class="lg:col-span-12 categories">
          <div class="mb-8">
            <p class="subtitle mb-2">Categories</p>
            <Categories @select="onSelectCategory" :selected="selectedCategory" />
          </div>
          <div class="">
            <p class="subtitle mb-2">Types</p>
            <Type @select="onSelectedType" :selected="selectedType"/>
          </div>
        </aside>

        <div class="lg:col-span-12">
          <div class="card">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium" v-if="selectedCategory">{{ selectedCategory }}</h3>
              <h3 class="text-lg font-medium" v-else>All options</h3>
              <div class="w-full max-w-xs ml-auto">

              </div>
            </div>

            <ul class="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <li
                v-for="item in filteredOptions"
                :key="item.id"
                class="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition"
              >
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p class="text-sm font-medium">{{ item.title }}</p>
                    <p class="text-xs text-gray-500 mt-1">{{ item.subtitle }}</p>
                  </div>
                  <button
                    type="button"
                    class="text-sm text-blue-600 hover:underline"
                    @click="openModal(item)"
                  >
                    Details
                  </button>
                </div>
              </li>
            </ul>

            <p v-if="filteredOptions.length === 0" class="text-sm text-gray-500 mt-6">No options found.</p>
          </div>
        </div>
      </div>
    </div>

    <OptionsModal :open="isModalOpen" :item="activeItem" @close="closeModal" />
  </section>
  
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import Categories from "~/components/homepage/Categories.vue";
import OptionsModal from "~/components/homepage/OptionsModal.vue";
import Type from "~/components/homepage/Type.vue";

type OptionItem = {
  id: string
  title: string
  subtitle: string
  category: string
  details: string
}

const selectedCategory = ref<string | null>(null)
const selectedType = ref<string | null>(null)
const query = ref('')

const allOptions = ref<OptionItem[]>([
  { id: 'sound-hk', title: 'BMW Enhanced Bluetooth', subtitle: 'BMW Enhanced Bluetooth', category: 'Sound',details:'Stream music from your phone or USB and do more with BMW Enhanced Bluetooth activation.',  },
  { id: 'inf-carplay', title: 'Apple CarPlay full-screen', subtitle: 'Widescreen enablement', category: 'Infotainment', details:'Stream music from your phone or USB and do more with BMW Enhanced Bluetooth activation.', },
  { id: 'doors-auto', title: 'Comfort access tailgate', subtitle: 'Hands-free trunk opening', category: 'Doors & Trunk', details:'Stream music from your phone or USB and do more with BMW Enhanced Bluetooth activation.', },
  { id: 'nav-speed', title: 'Speed camera alerts', subtitle: 'Navigation guidance enhancements', category: 'Navigation', details:'Stream music from your phone or USB and do more with BMW Enhanced Bluetooth activation.', },
  { id: 'display-mview', title: 'M Performance view', subtitle: 'Sport cluster layout', category: 'Display', details:'Stream music from your phone or USB and do more with BMW Enhanced Bluetooth activation.', },
  { id: 'service-remote', title: 'Remote diagnostics', subtitle: 'Service and DTC insights', category: 'Service & Diagnostic', details:'Stream music from your phone or USB and do more with BMW Enhanced Bluetooth activation.', },
  { id: 'video-nrc', title: 'Video in motion', subtitle: 'Passenger entertainment enablement', category: 'Video', details:'Stream music from your phone or USB and do more with BMW Enhanced Bluetooth activation.', },
  { id: 'control-mirror', title: 'Mirror fold on lock', subtitle: 'Convenience setting', category: 'Control', details:'Stream music from your phone or USB and do more with BMW Enhanced Bluetooth activation.', },
])

const filteredOptions = computed(() => {
  const q = query.value.trim().toLowerCase()
  return allOptions.value.filter((opt) => {
    const matchesCategory = selectedCategory.value ? opt.category === selectedCategory.value : true
    const matchesQuery = q
      ? opt.title.toLowerCase().includes(q) || opt.subtitle.toLowerCase().includes(q)
      : true
    return matchesCategory && matchesQuery
  })
})

function onSelectCategory(category: string | null) {
  selectedCategory.value = category
}

function onSelectedType(type: string | null){
  selectedType.value = type
}

const isModalOpen = ref(false)
const activeItem = ref<OptionItem | null>(null)

function openModal(item?: OptionItem) {
  activeItem.value = item ?? null
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}
</script>