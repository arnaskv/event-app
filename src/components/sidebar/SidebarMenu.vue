<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useSidebarStore from '@/stores/sidebar'
import SidebarCloseButton from './sidebarComponents/SidebarCloseButton.vue'
import SidebarItem from './sidebarComponents/SidebarItem.vue'

const { sidebarEnabled } = storeToRefs(useSidebarStore())
</script>

<template>
  <div
    v-show="sidebarEnabled"
    class="sidebar w-full min-h-screen absolute inset-0 bg-gray-800 text-white md:block md:relative md:w-80"
  >
    <SidebarCloseButton />
    <SidebarItem title="Home" icon="home" />
    <SidebarItem title="About" icon="info" />
    <SidebarItem title="Services" icon="services" />
    <SidebarItem title="Contact" icon="contact" />
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .sidebar {
    display: block !important;
  }
}
</style>
