<script setup lang="ts">
import { type Event } from '@/stores/events'
import { useRouter } from 'vue-router'

const props = defineProps<{
  event: Event
}>()

const router = useRouter()

function goToEvent() {
  router.push({ name: 'event', params: { event: props.event.name } })
}
</script>

<template>
  <button type="button" @click="goToEvent" class="bg-amber-300 rounded-lg w-32 h-20">
    <div>{{ event.name }}</div>
    <div>{{ event.location }}</div>
  </button>
</template>
