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
    :title="title"
    class="p-4 w-72 hover:bg-amber-100 dark:hover:bg-amber-900"
  />
</template>
