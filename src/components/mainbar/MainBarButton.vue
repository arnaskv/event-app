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
    :title-right="title"
    class="bg-amber-300 p-2 rounded aspect-square min-w-min hover:bg-amber-400 dark:bg-amber-700 dark:hover:bg-amber-600"
  />
</template>
