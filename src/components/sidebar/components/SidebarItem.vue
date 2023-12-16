<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  title: string
  icon: string
  description: string
}>()

defineEmits(['clicked'])
</script>

<template>
  <button
    type="button"
    @click="$emit('clicked')"
    class="flex items-center p-4 cursor-pointer text-black hover:rounded-lg hover:bg-amber-100 hover:border-black dark:text-white dark:hover:border-white dark:hover:bg-amber-900"
  >
    <span class="mr-4">
      <img :src="icon" :alt="description" />
    </span>
    <span>{{ title }}</span>
  </button>
</template>
