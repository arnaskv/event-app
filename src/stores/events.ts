import { ref } from 'vue'
import { defineStore } from 'pinia'
import dummyEvents from './dummyEvents'

export type Event = {
  // id: number
  name: string
  location: string
  timestamp: string
  categories: string[]
  description: string
}

export const useEventsStore = defineStore('event', () => {
  const events = ref<Event[]>(getEvents())

  function getEvents(): Event[] {
    // const eventsString = localStorage.getItem('events')
    // return eventsString ? JSON.parse(eventsString) : []
    return dummyEvents
  }

  function addEvent(newEvent: Event) {
    events.value.push(newEvent)
    localStorage.setItem('events', JSON.stringify(events.value))
  }

  function getEventsByCategory(category: string): Event[] {
    return events.value.filter((event) => event.categories.includes(category))
  }

  return { events, addEvent, getEventsByCategory }
})
