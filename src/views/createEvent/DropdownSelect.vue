<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { isTitle } from '@/utils/utilities'

const props = defineProps<{
  name: string
  options: string[]
  resetSignal: boolean
}>()

const emit = defineEmits<{
  (event: 'update', value: string[]): void
}>()

const isOpen = ref<boolean>(false)
const selected = ref<string[]>([])

const availableOptions = computed(() => {
  return props.options.filter((option) => !selected.value.includes(option))
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectItem(item: string): void {
  selected.value.push(item)
  emit('update', selected.value)
  toggleDropdown()
}

function removeItem(item: string): void {
  selected.value = selected.value.filter((value) => value !== item)
}

watchEffect(() => {
  emit('update', selected.value)
})

watchEffect(() => {
  if (props.resetSignal) {
    selected.value = []
  }
})
</script>

<template>
  <span>
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        v-for="selection in selected"
        :key="selection"
        class="py-1 px-2 rounded-lg bg-rose-300 dark:bg-rose-800"
      >
        {{ isTitle(selection) }}
        <button
          @click="removeItem(selection)"
          type="button"
          class="rounded-full px-2 aspect-square hover:bg-rose-400 dark:hover:bg-rose-700"
        >
          x
        </button>
      </button>
    </div>
  </span>
  <div class="relative">
    <button
      type="button"
      @click="toggleDropdown"
      class="bg-amber-300 py-2 px-4 rounded-lg hover:bg-amber-400 dark:bg-amber-700 dark:hover:bg-amber-600"
      :disabled="availableOptions.length === 0"
    >
      {{ isTitle(name) }}
    </button>
    <div
      v-if="isOpen"
      class="absolute grid gap-1 px-1 left-0 mt-2 py-2 w-48 bg-rose-50 rounded-lg shadow-xl z-20 dark:bg-slate-800"
    >
      <button
        type="button"
        @click="selectItem(option)"
        v-for="option in availableOptions"
        :key="option"
        class="w-full px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 rounded-lg dark:hover:bg-amber-700 dark:text-gray-300"
      >
        {{ isTitle(option) }}
      </button>
    </div>
  </div>
</template>
