<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  name: string
}>()

const Icon = defineAsyncComponent(() => import(`@/assets/svg/${props.name}.svg`))
</script>

<template>
  <Icon />
</template>
