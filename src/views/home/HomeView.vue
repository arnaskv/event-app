<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MainButton from '@/components/MainButton.vue'
import { useEventsStore } from '@/stores/events'
import CategoryButton from './components/CategoryButton.vue'
import TrendingEvent from './components/TrendingEvent.vue'
import MainCarousel from './components/MainCarousel.vue'

const { getTrendingEvents } = useEventsStore()
const trendingEvents = getTrendingEvents()
</script>

<template>
  <MainCarousel />
  <menu class="py-8">
    <div class="flex justify-between pb-4">
      <p class="font-bold">Top categories</p>
      <router-link :to="{ name: 'categories' }" class="font-bold underline">See all</router-link>
    </div>
    <div class="flex justify-between">
      <!-- improve to dynamically display 5 most relevant categories by users activity -->
      <CategoryButton category="music">
        <MainButton iconName="music" titleBottom="Music" />
      </CategoryButton>
      <CategoryButton category="esports">
        <MainButton iconName="esports" titleBottom="Esports" />
      </CategoryButton>
      <CategoryButton category="fashion">
        <MainButton iconName="fashion" titleBottom="Fashion" />
      </CategoryButton>
      <CategoryButton category="health">
        <MainButton iconName="health" titleBottom="Health" />
      </CategoryButton>
      <CategoryButton category="tech">
        <MainButton iconName="tech" titleBottom="Tech" />
      </CategoryButton>
    </div>
  </menu>
  <section>
    <p class="font-bold pb-4">Trending</p>
    <div class="grid gap-4 grid-cols-2 lg:grid-cols-4">
      <TrendingEvent v-for="event in trendingEvents" :key="event.id" :event="event" />
    </div>
  </section>
</template>
