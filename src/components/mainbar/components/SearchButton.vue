<script setup lang="ts">
import NavigationButton from '@/components/NavigationButton.vue'
import searchIcon from '@/assets/icons/search.svg'
</script>

<template>
  <NavigationButton :icon="searchIcon" description="Search" class="hover:bg-amber-100" />
</template>
