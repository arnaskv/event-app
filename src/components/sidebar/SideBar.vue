<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
import useSidebarStore from '@/stores/sidebar'
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import SidebarItem from './SidebarItem.vue'

const { sidebarEnabled } = storeToRefs(useSidebarStore())
const { toggleSidebar } = useSidebarStore()
const isDark = useDark()
const toggleDark = useToggle(isDark)

let previousWidth = window.innerWidth

/**
 * hides sidebar going back to smaller than md if enabled
 */
function checkSize() {
  const currentWidth = window.innerWidth
  if (window.innerWidth < 768 && previousWidth >= 768) {
    sidebarEnabled.value = false
  }
  previousWidth = currentWidth

  if (window.innerWidth >= 768 && previousWidth < 768) {
    sidebarEnabled.value = true
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
    class="grid auto-rows-min gap-4 p-4 sidebar absolute w-full bg-rose-50 dark:bg-slate-800 dark:border-white border-solid border-2 border-black rounded-t-lg md:block md:relative md:w-80 md:rounded-none md:rounded-r-lg"
  >
    <router-link :to="{ name: 'createEvent' }">
      <SidebarItem @clicked="toggleSidebar" title="Create event" iconName="add" />
    </router-link>
    <!-- <router-link :to="{ name: 'nearby' }">
      <SidebarItem @clicked="toggleSidebar" title="Nearby" iconName="nearby" />
    </router-link> -->
    <router-link :to="{ name: 'upcoming' }">
      <SidebarItem @clicked="toggleSidebar" title="Upcoming events" iconName="event_upcoming" />
    </router-link>
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
    display: grid !important;
  }
}
</style>
