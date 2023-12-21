<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'

withDefaults(
  defineProps<{
    iconName: string
    titleRight?: string
    titleBottom?: string
    square?: boolean
  }>(),
  {
    titleRight: '',
    titleBottom: '',
    square: false,
  }
)

defineEmits(['clicked'])
</script>

<template>
  <button
    type="button"
    @click="$emit('clicked')"
    class="flex items-center cursor-pointer rounded-lg"
    :class="{ 'aspect-square': square }"
  >
    <span
      class="dark:fill-white"
      :class="{
        'mr-4': titleRight,
        'grid justify-items-center': titleBottom,
      }"
    >
      <SvgIcon :name="iconName" />
      <div v-if="titleBottom" class="mt-2">{{ titleBottom }}</div>
    </span>
    <span v-if="titleRight">{{ titleRight }}</span>
  </button>
</template>
