<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useSidebarStore from '@/stores/sidebar'
import SideBarOpenButton from './components/SideBarOpenButton.vue'
import SidebarCloseButton from './components/SidebarCloseButton.vue'

const { sidebarEnabled } = storeToRefs(useSidebarStore())
</script>

<template>
  <div class="flex mainbar justify-between align-middle border-solid border-2 border-red-600 px-4">
    <SideBarOpenButton v-if="!sidebarEnabled" />
    <SidebarCloseButton v-else />
    <div class="flex self-center">
      <h1>EventFully</h1>
    </div>
  </div>
</template>

<style scoped>
.mainbar {
  height: var(--height-mainbar);
}
</style>
