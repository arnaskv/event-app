<script setup lang="ts">
import { isTitle } from '@/utils/utilities'
import BackButton from './BackButton.vue'

defineProps<{
  title: string
  // sort?: boolean
  // sortOptions?: string[]
  // filter?: boolean
  // filterOptions?: string[]
}>()
</script>

<template>
  <BackButton @click="$emit('backClick')" class="mt-4 mb-8" />
  <div class="font-bold text-2xl mb-8">{{ isTitle(title) }}</div>
</template>
