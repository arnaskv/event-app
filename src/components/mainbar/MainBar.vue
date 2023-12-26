<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import useSidebarStore from '@/stores/sidebar'
import MainBarButton from './MainBarButton.vue'
import MainButton from '../MainButton.vue'

const { sidebarEnabled } = storeToRefs(useSidebarStore())
</script>

<template>
  <div class="mainbar flex justify-between items-center px-4">
    <MainBarButton v-show="!sidebarEnabled" @click="sidebarEnabled = true" class="md:invisible">
      <MainButton icon-name="menu" />
    </MainBarButton>
    <MainBarButton v-show="sidebarEnabled" @click="sidebarEnabled = false" class="md:invisible">
      <MainButton icon-name="close" />
    </MainBarButton>
    <router-link
      :to="{ name: 'home' }"
      @click="sidebarEnabled = false"
      class="app-name text-4xl text-amber-300 light-mode-outline dark:text-amber-700 dark:dark-mode-outline"
    >
      EventFully
    </router-link>
    <MainBarButton>
      <MainButton icon-name="search" />
    </MainBarButton>
  </div>
</template>

<style scoped>
.mainbar {
  height: var(--height-mainbar);
}
</style>
