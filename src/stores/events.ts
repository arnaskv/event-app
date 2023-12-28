import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
// import dummyEvents from './dummyEvents'

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
    const eventsString = localStorage.getItem('events')
    return eventsString ? JSON.parse(eventsString) : []
    // return dummyEvents
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
    const sortedEvents = events.value.sort((a, b) => b.clicks - a.clicks)
    return sortedEvents.slice(0, Math.min(sortedEvents.length, 5))
  }

  function removePastEvents() {
    const currentDate = new Date()
    events.value = events.value.filter((event) => {
      const eventDate = new Date(event.timestamp)
      return eventDate >= currentDate
    })
  }

  function addClick(id: number | string) {
    const eventId = typeof id === 'string' ? parseInt(id, 10) : id

    const event = getEventById(eventId)
    if (event) {
      event.clicks += 1
      localStorage.setItem('events', JSON.stringify(events.value))
    }
  }

  watchEffect(() => {
    removePastEvents()
  })

  return {
    events,
    eventInitialState,
    addEvent,
    getNewId,
    getEventById,
    getEventsByCategory,
    getUpcomingEvents,
    getTrendingEvents,
    addClick,
  }
})
