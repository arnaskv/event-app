<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MainButton from '@/components/MainButton.vue'
import { useEventsStore } from '@/stores/events'
import CategoryButton from './CategoryButton.vue'

const { getTrendingEvents } = useEventsStore()
const trendingEvents = getTrendingEvents()
</script>

<template>
  <div class="h-60">Carousel</div>
  <menu class="py-8">
    <div class="flex justify-between pb-5">
      <p class="font-bold">Top categories</p>
      <router-link :to="{ name: 'categories' }" class="font-bold underline">See all</router-link>
    </div>
    <div class="flex justify-between">
      <!-- Could be improved to dynamically display 5 most relevant categories by users activity -->
      <CategoryButton>
        <MainButton iconName="music" titleBottom="Music" />
      </CategoryButton>
      <CategoryButton>
        <MainButton iconName="esports" titleBottom="Esports" />
      </CategoryButton>
      <CategoryButton>
        <MainButton iconName="fashion" titleBottom="Fashion" />
      </CategoryButton>
      <CategoryButton>
        <MainButton iconName="health" titleBottom="Health" />
      </CategoryButton>
      <CategoryButton>
        <MainButton iconName="tech" titleBottom="Tech" />
      </CategoryButton>
    </div>
  </menu>
  <section>
    <p class="font-bold">Trending</p>
    <div class="flex flex-nowrap">
      <div v-for="event in trendingEvents" :key="event.id">{{ event.name }}</div>
    </div>
  </section>
</template>
