<script setup lang="ts">
import { useRoute } from 'vue-router'
import ViewHeader from '@/components/ViewHeader.vue'

const route = useRoute()

const currentEvent = Array.isArray(route.params.event) ? route.params.event[0] : route.params.event
</script>

<template>
  <ViewHeader :title="currentEvent" />
</template>
