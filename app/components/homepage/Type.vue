<template>
  <div class="flex">
      <button
          v-for="type in types"
          :key="type"
          type="button"
          class="relative flex items-center justify-center w-[119.43px] h-[38px] mr-2 text-white"
          :class="type === selected ? 'is-active' : ''"
          @click="$emit('select', type === selected ? null : type)"
      >
        <svg
            class="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 134 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M133.488 20.4521L119.843 37.5L0.929688 37.501V17.5488L14.5742 0.500977L133.488 0.5V20.4521Z"
              stroke="white"
              :class="type === selected ? 'stroke-white fill-white' : ''"
          />
        </svg>

        <span class="relative z-10 text-sm font-medium"
              :class="type === selected ? 'text-black' : ''"
        >
        {{ type }}
          </span>
      </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ selected: string | null }>()

const types = [
  "All", "USB", "Cable"
]
</script>


