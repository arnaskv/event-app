<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
import useSidebarStore from '@/stores/sidebar'
import { onMounted, onUnmounted } from 'vue'
import SidebarItem from './SidebarItem.vue'

const { sidebarEnabled } = storeToRefs(useSidebarStore())
const isDark = useDark()
const toggleDark = useToggle(isDark)

let previousWidth = window.innerWidth

function checkSize() {
  const currentWidth = window.innerWidth
  if (window.innerWidth < 768 && previousWidth >= 768) {
    sidebarEnabled.value = false
  }
  previousWidth = currentWidth
}

onMounted(() => {
  window.addEventListener('resize', checkSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkSize)
})
</script>

<template>
  <menu
    v-show="sidebarEnabled"
    class="sidebar absolute w-full bg-rose-50 dark:bg-slate-900 dark:border-white text-white border-solid border-2 border-black rounded-t-lg md:block md:relative md:w-80 md:rounded-none md:rounded-r-lg"
  >
    <SidebarItem title="Create event" iconName="add" />
    <SidebarItem title="Nearby" iconName="nearby" />
    <SidebarItem title="My tickets" iconName="ticket" />
    <SidebarItem title="Upcoming events" iconName="event_upcoming" />
    <SidebarItem
      v-if="isDark"
      @clicked="toggleDark"
      title="Light mode"
      iconName="light_mode"
      description="Light mode"
    />
    <SidebarItem
      v-else
      @clicked="toggleDark"
      title="Dark mode"
      iconName="dark_mode"
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
