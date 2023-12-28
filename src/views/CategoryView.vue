<script setup lang="ts">
import { useRouter } from 'vue-router'
import MainButton from '@/components/MainButton.vue'
import useCategoryStore from '@/stores/category'
import ViewHeader from '@/components/ViewHeader.vue'

const router = useRouter()

const { categories } = useCategoryStore()

function goToCategeory(selectedCategory: string): void {
  router.push({ name: 'category', params: { category: selectedCategory } })
}
</script>

<template>
  <ViewHeader title="all categories" />
  <main
    class="grid gap-8 grid-cols-2 pb-8 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  >
    <MainButton
      @click="goToCategeory(category)"
      v-for="category in categories"
      :key="category"
      :icon-name="category"
      :title-bottom="category"
      class="flex justify-center h-60 bg-amber-300 hover:bg-amber-400 dark:bg-amber-700 dark:hover:bg-amber-600"
    />
  </main>
</template>
