<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import useSidebarStore from '@/stores/sidebar'
import MainBarButton from './MainBarButton.vue'

const { sidebarEnabled } = storeToRefs(useSidebarStore())
const { toggleSidebar } = useSidebarStore()
</script>

<template>
  <div class="flex mainbar justify-between items-center px-4">
    <MainBarButton
      v-if="!sidebarEnabled"
      icon-name="menu"
      @clicked="toggleSidebar"
      class="md:invisible"
    />
    <MainBarButton v-else icon-name="close" @clicked="toggleSidebar" class="md:invisible" />
    <router-link
      :to="{ name: 'home' }"
      class="app-name text-4xl text-amber-200 light-mode-outline dark:text-amber-800 dark:dark-mode-outline"
    >
      EventFully
    </router-link>
    <MainBarButton icon-name="search" />
  </div>
</template>

<style scoped>
.mainbar {
  height: var(--height-mainbar);
}
</style>
