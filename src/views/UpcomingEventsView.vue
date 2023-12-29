<script setup lang="ts">
import ViewHeader from '@/components/ViewHeader.vue'
import SingleEvent from '@/components/SingleEvent.vue'
import { useEventsStore } from '@/stores/events'
import { useRouter } from 'vue-router'

const router = useRouter()
const { getUpcomingEvents } = useEventsStore()

const upcomingEvents = getUpcomingEvents()
</script>

<template>
  <ViewHeader @back-click="router.push({ name: 'home' })" title="upcoming events" />
  <div v-if="upcomingEvents.length > 0">
    <div class="grid space-y-4">
      <SingleEvent v-for="event in upcomingEvents" :key="event.id" :event="event" />
    </div>
  </div>
  <div v-else>No upcoming events for the following week.</div>
</template>
