<script setup lang="ts">
defineProps<{
  icon?: string
  description: string
}>()

const emit = defineEmits(['clicked'])
</script>

<template>
  <div>
    <button
      type="button"
      @click="emit('clicked')"
      class="bg-red-300 text-white p-2 rounded aspect-square min-w-min hover:bg-red-400"
    >
      <img :src="icon" :alt="description" />
    </button>
  </div>
</template>
