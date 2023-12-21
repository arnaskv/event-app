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
    :iconName="iconName"
    :title-right="title"
    class="p-4 w-full hover:bg-amber-300 border-transparent border-2 border-solid hover:border-gray-700 dark:hover:bg-amber-700 dark:hover:border-gray-300"
  />
</template>
