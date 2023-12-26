<script setup lang="ts">
import { useRouter } from 'vue-router'
import MainButton from './MainButton.vue'

const router = useRouter()
</script>

<template>
  <MainButton
    @click="router.back"
    icon-name="arrow_back"
    class="bg-rose-300 hover:bg-rose-400 dark:bg-rose-800 dark:hover:bg-rose-700 p-2"
  />
</template>
