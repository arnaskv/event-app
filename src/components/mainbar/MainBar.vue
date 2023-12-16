<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import useSidebarStore from '@/stores/sidebar'
import SideBarOpenButton from './components/SideBarOpenButton.vue'
import SidebarCloseButton from './components/SidebarCloseButton.vue'
import SearchButton from './components/SearchButton.vue'

const { sidebarEnabled } = storeToRefs(useSidebarStore())
</script>

<template>
  <div class="flex mainbar justify-between items-center px-4">
    <SideBarOpenButton v-if="!sidebarEnabled" />
    <SidebarCloseButton v-else />
    <router-link :to="{ name: 'home' }" class="app-name text-amber-600 text-4xl">
      EventFully
    </router-link>
    <SearchButton />
  </div>
</template>

<style scoped>
.mainbar {
  height: var(--height-mainbar);
}
</style>
