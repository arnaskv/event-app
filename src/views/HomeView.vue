<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MainButton from '@/components/MainButton.vue'
</script>

<template>
  <div class="h-60">Carousel</div>
  <menu class="py-8">
    <div class="flex justify-between pb-5">
      <p class="font-bold">Categories</p>
      <router-link :to="{ name: 'category' }" class="font-bold underline">See all</router-link>
    </div>
    <div class="flex justify-between">
      <!-- Could be improved to dynamically display 5 most relevant categories by users activity -->
      <div class="aspect-square w-20 border-solid border-black border-2 hover:bg-amber-300">
        <MainButton iconName="music" titleBottom="Music" :square="true" />
      </div>
      <MainButton
        class="border-solid border-black border-2 hover:bg-amber-300"
        iconName="esports"
        titleBottom="Esports"
        :square="true"
      />
      <MainButton
        class="border-solid border-black border-2 hover:bg-amber-300"
        iconName="fashion"
        titleBottom="Fashion"
        :square="true"
      />
      <MainButton
        class="border-solid border-black border-2 hover:bg-amber-300"
        iconName="health"
        titleBottom="Health"
        :square="true"
      />
      <MainButton
        class="border-solid border-black border-2 hover:bg-amber-300"
        iconName="tech"
        titleBottom="Tech"
        :square="true"
      />
    </div>
  </menu>
  <section>
    <p class="font-bold">Trending</p>
    <div class="flex flex-nowrap"></div>
  </section>
</template>
