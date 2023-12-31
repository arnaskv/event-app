<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { type Event, useEventsStore } from '@/stores/events'
import ViewHeader from '@/components/ViewHeader.vue'
import SingleEvent from '@/components/SingleEvent.vue'

const route = useRoute()
const router = useRouter()
const { getEventsByCategory } = useEventsStore()

const currentCategory = Array.isArray(route.params.category)
  ? route.params.category[0]
  : route.params.category

const eventsInCategory: Event[] = getEventsByCategory(currentCategory)
</script>

<template>
  <ViewHeader @back-click="router.back" :title="currentCategory" />
  <main class="grid space-y-4">
    <div v-for="event in eventsInCategory" :key="event.id">
      <SingleEvent :event="event" />
    </div>
  </main>
</template>
