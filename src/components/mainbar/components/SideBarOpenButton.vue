<script setup lang="ts">
import useSidebarStore from '@/stores/sidebar'
import menuIcon from '@/assets/icons/menu.svg'
import NavigationButton from '@/components/NavigationButton.vue'

const { toggleSidebar } = useSidebarStore()
</script>

<template>
  <NavigationButton
    @clicked="toggleSidebar"
    :icon="menuIcon"
    description="Menu"
    class="md:invisible"
  />
</template>
