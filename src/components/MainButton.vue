<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'

defineProps<{
  iconName: string
  title?: string
}>()

defineEmits(['clicked'])
</script>

<template>
  <button
    type="button"
    @click="$emit('clicked')"
    class="flex items-center cursor-pointer rounded-lg text-black dark:text-white"
  >
    <span class="dark:fill-white" :class="{ 'mr-4': title }">
      <SvgIcon :name="iconName" />
    </span>
    <span>{{ title }}</span>
  </button>
</template>
