import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/category/:category/:event',
      component: () => import('@/views/EventView.vue'),
    },
    {
      path: '/create-event',
      name: 'createEvent',
      component: () => import('@/views/CreateEventView.vue'),
    },
    {
      path: '/nearby',
      name: 'nearby',
      component: () => import('@/views/NearbyEventsView.vue'),
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: () => import('@/views/UpcomingEventsView.vue'),
    },
  ],
})

export default router
