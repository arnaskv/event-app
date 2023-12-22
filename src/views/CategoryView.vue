<script setup lang="ts">
import MainButton from '@/components/MainButton.vue'
import useCategoryStore from '@/stores/category'

const { categories } = useCategoryStore()
</script>

<template>
  <header class="flex items-center justify-between pt-4 pb-8">
    <p class="font-bold">All categories</p>
    <div class="flex justify-end">
      <MainButton
        class="p-2 bg-rose-300 hover:bg-rose-400 dark:bg-rose-800 dark:hover:bg-rose-700"
        icon-name="sort"
        title-right="Sort"
      />
    </div>
  </header>
  <main
    class="grid gap-8 grid-cols-2 pb-8 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  >
    <MainButton
      v-for="category in categories"
      :key="category"
      :icon-name="category"
      :title-bottom="category"
      class="bg-rose-500 flex justify-center h-60"
    />
  </main>
</template>
