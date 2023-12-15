<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainBar from './components/mainbar/MainBar.vue'
import SideBar from './components/sidebar/SideBar.vue'
</script>

<template>
  <MainBar />
  <div class="flex">
    <SideBar />
    <main class="flex-1 px-4">
      <RouterView />
    </main>
  </div>
</template>
