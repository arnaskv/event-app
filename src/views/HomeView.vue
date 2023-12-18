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
    <div class="grid grid-cols-5">
      <!-- Could be improved to dynamically display 5 most relevant categories by users activity -->
      <div class="flex flex-col items-center gap-3">
        <MainButton name="Music" iconName="headphones" />
        <label for="Music">Music</label>
      </div>
      <div class="flex flex-col items-center gap-3">
        <MainButton name="Esports" iconName="esports" />
        <label for="Esports">Esports</label>
      </div>
      <div class="flex flex-col items-center gap-3">
        <MainButton name="Fashion" iconName="fashion" />
        <label for="Fashion">Fashion</label>
      </div>
      <div class="flex flex-col items-center gap-3">
        <MainButton name="Health" iconName="health" />
        <label for="Health">Health</label>
      </div>
      <div class="flex flex-col items-center gap-3">
        <MainButton name="Tech" iconName="technology" />
        <label for="Tech">Tech</label>
      </div>
    </div>
  </menu>
  <section>
    <p class="font-bold">Trending</p>
    <div class="flex flex-wrap"></div>
  </section>
</template>
