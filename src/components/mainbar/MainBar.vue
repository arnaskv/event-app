<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import useSidebarStore from '@/stores/sidebar'
import MainBarButton from './MainBarButton.vue'

const { sidebarEnabled } = storeToRefs(useSidebarStore())
</script>

<template>
  <div class="flex mainbar justify-between items-center px-4">
    <MainBarButton
      v-show="!sidebarEnabled"
      icon-name="menu"
      @clicked="sidebarEnabled = true"
      class="md:invisible"
    />
    <MainBarButton
      v-show="sidebarEnabled"
      icon-name="close"
      @clicked="sidebarEnabled = false"
      class="md:invisible"
    />
    <router-link
      :to="{ name: 'home' }"
      @click="sidebarEnabled = false"
      class="app-name text-4xl text-amber-300 light-mode-outline dark:text-amber-700 dark:dark-mode-outline"
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
