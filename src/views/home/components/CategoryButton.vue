<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  category: string
}>()

function goToCategory() {
  router.push({ name: 'category', params: { category: props.category } })
}
</script>

<template>
  <button
    type="button"
    @click="goToCategory"
    class="flex justify-center items-center aspect-square w-16 md:scale-110 rounded-lg border-solid border-2 hover:bg-amber-300 border-gray-700 dark:border-gray-300 dark:hover:bg-amber-700"
  >
    <slot></slot>
  </button>
</template>
