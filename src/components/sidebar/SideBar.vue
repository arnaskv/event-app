<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useSidebarStore from '@/stores/sidebar'
import SidebarItem from './components/SidebarItem.vue'

const { sidebarEnabled } = storeToRefs(useSidebarStore())
</script>

<template>
  <div
    v-show="sidebarEnabled"
    class="sidebar absolute w-full bg-gray-800 text-white md:block md:relative md:w-72"
  >
    <SidebarItem title="Home" icon="home" />
    <SidebarItem title="About" icon="info" />
    <SidebarItem title="Services" icon="services" />
    <SidebarItem title="Contact" icon="contact" />
  </div>
</template>

<style scoped>
.sidebar {
  height: var(--height-sidebar);
}

@media (min-width: 768px) {
  .sidebar {
    display: block !important;
  }
}
</style>
