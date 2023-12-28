<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useDateFormat } from '@vueuse/core'
import { type Event, useEventsStore } from '@/stores/events'

const router = useRouter()
const { addClick } = useEventsStore()

const props = defineProps<{
  event: Event
}>()

const formattedDate = useDateFormat(props.event.timestamp, 'YYYY-MM-DD HH:mm')

function goToEvent() {
  router.push({ name: 'event', params: { event: props.event.id } })
  addClick(props.event.id)
}
</script>

<template>
  <button
    type="button"
    @click="goToEvent"
    class="h-32 rounded-lg bg-amber-300 hover:bg-amber-400 dark:bg-amber-700 dark:hover:bg-amber-600 flex items-end p-2 cursor-pointer text-start hover:scale-105"
  >
    <div>
      <div>{{ event.name }}</div>
      <div>{{ formattedDate }}</div>
    </div>
  </button>
</template>
