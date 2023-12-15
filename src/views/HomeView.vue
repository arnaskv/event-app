<script setup lang="ts">
import NavigationButton from '@/components/NavigationButton.vue'
import musicIcon from '@/assets/icons/headphones.svg'
import esportsIcon from '@/assets/icons/esports.svg'
import fashionIcon from '@/assets/icons/fashion.svg'
import healthIcon from '@/assets/icons/health.svg'
import techIcon from '@/assets/icons/technology.svg'
</script>

<template>
  <div class="h-44">Carousel</div>
  <div class="flex justify-between py-5">
    <p>Categories</p>
    <button type="button">See all</button>
  </div>
  <div class="grid grid-cols-5 pb-5">
    <!-- Could be improved to dynamically display 5 most relevant categories by users activity -->
    <div class="flex flex-col items-center gap-3">
      <NavigationButton name="Music" :icon="musicIcon" description="Music" />
      <label for="Music">Music</label>
    </div>
    <div class="flex flex-col items-center gap-3">
      <NavigationButton name="Esports" :icon="esportsIcon" description="Esports" />
      <label for="Esports">Esports</label>
    </div>
    <div class="flex flex-col items-center gap-3">
      <NavigationButton name="Fashion" :icon="fashionIcon" description="Fashion" />
      <label for="Fashion">Fashion</label>
    </div>
    <div class="flex flex-col items-center gap-3">
      <NavigationButton name="Health" :icon="healthIcon" description="Health" />
      <label for="Health">Health</label>
    </div>
    <div class="flex flex-col items-center gap-3">
      <NavigationButton name="Tech" :icon="techIcon" description="Tech" />
      <label for="Tech">Tech</label>
    </div>
  </div>
</template>
