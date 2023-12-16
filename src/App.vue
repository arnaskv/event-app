<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainBar from './components/mainbar/MainBar.vue'
import SideBar from './components/sidebar/SideBar.vue'
</script>

<template>
  <div class="dark:bg-black">
    <MainBar />
    <div class="flex">
      <SideBar />
      <main class="flex-1 px-4 main-view">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.main-view {
  min-height: var(--height-sidebar);
}
</style>
