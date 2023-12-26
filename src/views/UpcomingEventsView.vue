<script setup lang="ts">
import ViewHeader from '@/components/ViewHeader.vue'
import SingleEvent from '@/components/SingleEvent.vue'
import { useEventsStore } from '@/stores/events'

const { getUpcomingEvents } = useEventsStore()

const upcomingEvents = getUpcomingEvents()
</script>

<template>
  <ViewHeader title="upcoming events" />
  <SingleEvent v-for="event in upcomingEvents" :key="event.id" />
</template>
