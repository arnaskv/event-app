<script setup lang="ts">
import NavigationButton from '@/components/NavigationButton.vue'
import useSidebarStore from '@/stores/sidebar'
import closeIcon from '@/assets/icons/close.svg'

const { toggleSidebar } = useSidebarStore()
</script>

<template>
  <NavigationButton
    @clicked="toggleSidebar"
    :icon="closeIcon"
    description="Close"
    class="md:invisible"
  />
</template>
