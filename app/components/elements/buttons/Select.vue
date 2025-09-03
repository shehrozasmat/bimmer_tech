<template>
  <button
    class="items-center justify-center w-[119.43px] h-[38px] mr-2 shrink-0 text-black"
    @click="$emit('click')"
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
          class="stroke-white fill-none"
      />
    </svg>
    <span class="text-white">{{ label }}</span>
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{ label?: string }>()
const emit = defineEmits<{ (e: 'click'): void }>()
const label = props.label ?? 'Select'
</script>