<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
import useSidebarStore from '@/stores/sidebar'
import addIcon from '@/assets/icons/add.svg'
import darkModeIcon from '@/assets/icons/dark_mode.svg'
// import lightModeIcon from '@/assets/icons/light_mode.svg'
import SidebarItem from './components/SidebarItem.vue'

const { sidebarEnabled } = storeToRefs(useSidebarStore())
const isDark = useDark()
const toggleDark = useToggle(isDark)

// function toggleTheme() {}
</script>

<template>
  <menu
    v-show="sidebarEnabled"
    class="sidebar absolute w-full bg-white dark:bg-black text-white md:block md:relative md:w-72"
  >
    <SidebarItem title="Create event" :icon="addIcon" description="Add" />
    <!-- <SidebarItem title="Near me" icon="" />
    <SidebarItem title="My tickets" icon="" />
    <SidebarItem title="Upcoming events" icon="" /> -->
    <SidebarItem
      @clicked="toggleDark"
      title="change theme"
      :icon="darkModeIcon"
      description="Dark mode"
    />
  </menu>
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
