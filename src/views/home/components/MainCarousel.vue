<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import useSidebarStore from '@/stores/sidebar'

const { sidebarEnabled } = storeToRefs(useSidebarStore())
</script>

<template>
  <VueperSlides
    v-if="!sidebarEnabled"
    :autoplay="true"
    class="no-shadow h-60 my-4 rounded-lg border-solid border-black border-2 dark:border-white text-center"
    fixed-height="15rem"
  >
    <VueperSlide class="rounded-lg" content="Join in on the fun!" />
    <VueperSlide class="rounded-lg" content="Meet new people" />
    <VueperSlide class="rounded-lg" content="Learn something new" />
  </VueperSlides>
</template>
