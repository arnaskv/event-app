<script setup lang="ts">
import { useRoute } from 'vue-router'
import ViewHeader from '@/components/ViewHeader.vue'
import { type Event, useEventsStore } from '@/stores/events'

const route = useRoute()
const { getEventById } = useEventsStore()

const currentEventId = Array.isArray(route.params.event)
  ? route.params.event[0]
  : route.params.event
const currentEvent: Event = getEventById(currentEventId)
</script>

<template>
  <ViewHeader :title="currentEvent.name" />
  <main class="grid gap-4">
    <div>{{ currentEvent.timestamp }}</div>
    <div>{{ currentEvent.location }}</div>
    <div>{{ currentEvent.description }}</div>
  </main>
</template>
