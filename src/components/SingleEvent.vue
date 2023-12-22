<script setup lang="ts">
defineProps<{
  name: string
  location: string
}>()
</script>

<template>
  <div>{{ name }}</div>
  <div>{{ location }}</div>
</template>
