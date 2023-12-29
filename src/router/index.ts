import { createRouter, createWebHistory } from 'vue-router'
import useCategoryStore from '@/stores/category'
import { useEventsStore } from '@/stores/events'
import HomeView from '../views/home/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoryView,
  },
  {
    path: '/:category',
    name: 'category',
    component: () => import('@/views/SelectedCategoryView.vue'),
  },
  {
    path: '/event/:event',
    name: 'event',
    component: () => import('@/views/EventView.vue'),
  },
  {
    path: '/create-event',
    name: 'createEvent',
    component: () => import('@/views/createEvent/CreateEventView.vue'),
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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, _, next) => {
  const { categories } = useCategoryStore()
  const { events } = useEventsStore()
  const routeExists = routes.some((route) => route.path === to.path)
  const categoryExists = categories.some((category) => category === to.params.category)
  const eventExists = events.some((event) => event.id.toString() === to.params.event)

  if (routeExists || categoryExists || eventExists) {
    next()
  } else {
    router.back()
  }
})

export default router
