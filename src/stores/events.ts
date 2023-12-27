import { ref } from 'vue'
import { defineStore } from 'pinia'
import dummyEvents from './dummyEvents'

export type Event = {
  id: number
  name: string
  location: string
  timestamp: string
  categories: string[]
  description: string
  clicks: number
}

export const useEventsStore = defineStore('event', () => {
  const events = ref<Event[]>(getEvents())

  const eventInitialState: Event = {
    id: getNewId(),
    name: '',
    location: '',
    timestamp: '',
    categories: [],
    description: '',
    clicks: 0,
  }

  function addEvent(newEvent: Event) {
    events.value.push(newEvent)
    localStorage.setItem('events', JSON.stringify(events.value))
  }

  function getNewId() {
    return events.value.length + 1
  }

  function getEvents(): Event[] {
    // const eventsString = localStorage.getItem('events')
    // return eventsString ? JSON.parse(eventsString) : []
    return dummyEvents
  }

  function getEventById(id: number | string): Event {
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id
    return events.value.find((event) => event.id === numericId)
  }

  function getEventsByCategory(category: string): Event[] {
    return events.value.filter((event) => event.categories.includes(category))
  }

  function getUpcomingEvents(): Event[] {
    const currentDate = new Date()
    const sevenDaysLater = new Date()
    sevenDaysLater.setDate(currentDate.getDate() + 7)

    return events.value
      .filter((event) => {
        const eventDate = new Date(event.timestamp)
        return eventDate >= currentDate && eventDate <= sevenDaysLater
      })
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
  }

  function getTrendingEvents(): Event[] {
    return events.value.sort((a, b) => b.clicks - a.clicks).slice(0, 5)
  }

  return {
    events,
    eventInitialState,
    addEvent,
    getNewId,
    getEventById,
    getEventsByCategory,
    getUpcomingEvents,
    getTrendingEvents,
  }
})
