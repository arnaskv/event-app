<script setup lang="ts">
import SideBar from '@/components/sidebar/SidebarMenu.vue'
import MenuButton from '@/components/MenuButton.vue'
</script>

<template>
  <div class="flex">
    <SideBar />
    <div class="flex-1">
      <MenuButton />
      <h1>Welcome to the App</h1>
    </div>
  </div>
</template>
