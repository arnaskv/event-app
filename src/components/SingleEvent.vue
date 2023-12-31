<script setup lang="ts">
import { type Event, useEventsStore } from '@/stores/events'
import { useRouter } from 'vue-router'

const router = useRouter()
const { addClick } = useEventsStore()

const props = defineProps<{
  event: Event
}>()

function goToEvent() {
  router.push({ name: 'event', params: { event: props.event.id } })
  addClick(props.event.id)
}
</script>

<template>
  <div class="flex w-full justify-center">
    <button
      type="button"
      @click="goToEvent"
      class="bg-amber-300 hover:bg-amber-400 dark:bg-amber-700 dark:hover:bg-amber-600 rounded-lg max-w-screen-md w-full h-32 p-2 hover:scale-105"
    >
      <div>{{ event.name }}</div>
      <div>{{ event.timestamp }}</div>
      <div>{{ event.location }}</div>
    </button>
  </div>
</template>
