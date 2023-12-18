<script setup lang="ts">
import MainButton from '@/components/MainButton.vue'

defineProps<{
  iconName: string
  title?: string
}>()

defineEmits(['clicked'])
</script>

<template>
  <MainButton
    @clicked="$emit('clicked')"
    :icon-name="iconName"
    :title="title"
    class="bg-amber-200 p-2 rounded aspect-square min-w-min hover:bg-amber-300 dark:bg-amber-800 dark:hover:bg-amber-700"
  />
</template>
