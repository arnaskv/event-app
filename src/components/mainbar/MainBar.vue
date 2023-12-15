<script setup lang="ts">
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
    <h1>EventFully</h1>
    <SearchButton />
  </div>
</template>

<style scoped>
.mainbar {
  height: var(--height-mainbar);
}
</style>
