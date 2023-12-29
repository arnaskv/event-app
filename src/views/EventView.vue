<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import ViewHeader from '@/components/ViewHeader.vue'
import { type Event, useEventsStore } from '@/stores/events'

const route = useRoute()
const router = useRouter()
const { getEventById } = useEventsStore()

const currentEventId = Array.isArray(route.params.event)
  ? route.params.event[0]
  : route.params.event
const currentEvent: Event = getEventById(currentEventId)
</script>

<template>
  <ViewHeader @back-click="router.back" :title="currentEvent.name" />
  <main class="grid gap-4">
    <div>{{ currentEvent.timestamp }}</div>
    <div>{{ currentEvent.location }}</div>
    <div>{{ currentEvent.description }}</div>
  </main>
</template>
