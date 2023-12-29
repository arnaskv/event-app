<script setup lang="ts">
// import { useGeolocation } from '@vueuse/core'
import ViewHeader from '@/components/ViewHeader.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// const geolocation = useGeolocation()
</script>

<template>
  <ViewHeader @back-click="router.push({ name: 'home' })" title="nearby events" />
  <div>Coming soon</div>
</template>
