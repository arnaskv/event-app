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
    description="Close menu"
    class="close-button"
  />
</template>

<style scoped>
@media (min-width: 768px) {
  .close-button {
    visibility: hidden;
  }
}
</style>
