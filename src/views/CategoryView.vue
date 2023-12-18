<script setup lang="ts">
import MainButton from '@/components/MainButton.vue'
</script>

<template>
  <header class="flex items-center justify-between">
    <p class="font-bold">All categories</p>
    <div class="flex justify-end">
      <MainButton
        class="p-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600"
        icon-name="sort"
        title="Sort"
      />
    </div>
  </header>
  <div class="grid gap-4 grid-cols-2"></div>
</template>
