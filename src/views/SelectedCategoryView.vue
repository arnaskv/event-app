<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { type Event, useEventsStore } from '@/stores/events'
import MainButton from '@/components/MainButton.vue'

const route = useRoute()
const router = useRouter()
const { getEventsByCategory } = useEventsStore()

const currentCategory = Array.isArray(route.params.category)
  ? route.params.category[0]
  : route.params.category

const events: Event[] = getEventsByCategory(currentCategory)
</script>

<template>
  <header>
    <MainButton @click="router.go(-1)" icon-name="arrow_back" />
    <span>{{ currentCategory }}</span>
  </header>
  <main>
    <div v-for="event in events" :key="event.name">
      {{ event.name }}
    </div>
  </main>
</template>
