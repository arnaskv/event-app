<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  title: string
  icon: string
}>()
</script>

<template>
  <div class="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
    <span class="mr-4">
      <i :class="icon"></i>
    </span>
    <span>{{ title }}</span>
  </div>
</template>
