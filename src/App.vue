<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainBar from './components/mainbar/MainBar.vue'
import SideBar from './components/sidebar/SideBar.vue'
import useSidebarStore from './stores/sidebar'

const { sidebarEnabled } = useSidebarStore()
</script>

<template>
  <div class="bg-slate-200 text-black dark:bg-zinc-900 dark:text-white">
    <MainBar />
    <div class="flex">
      <SideBar />
      <main class="flex-1 px-4 main-view">
        <RouterView v-if="!sidebarEnabled" />
      </main>
    </div>
  </div>
</template>

<style scoped>
.main-view {
  min-height: var(--height-sidebar);
}
</style>
