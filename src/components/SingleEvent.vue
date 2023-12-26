<script setup lang="ts">
import { type Event } from '@/stores/events'
import { useRouter } from 'vue-router'

const props = defineProps<{
  event: Event
}>()

const router = useRouter()

function goToEvent() {
  router.push({ name: 'event', params: { event: props.event.id } })
}
</script>

<template>
  <button
    type="button"
    @click="goToEvent"
    class="bg-amber-300 hover:bg-amber-400 rounded-lg w-full h-32"
  >
    <div>{{ event.name }}</div>
    <div>{{ event.timestamp }}</div>
    <div>{{ event.location }}</div>
  </button>
</template>
