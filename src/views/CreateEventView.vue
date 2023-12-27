<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import { useDateFormat, useNow } from '@vueuse/core'
import { type Event, useEventsStore } from '@/stores/events'
import useCategoryStore from '@/stores/category'
import DropdownSelect from '@/components/DropdownSelect.vue'
import ViewHeader from '@/components/ViewHeader.vue'

const { categories } = useCategoryStore()
const { eventInitialState, addEvent } = useEventsStore()

const formData: Event = reactive({ ...eventInitialState })
const formEnabled = ref<boolean>(true)
const resetSignal = ref<boolean>(false)
const currentDateFormatted = useDateFormat(useNow(), 'YYYY-MM-DDTHH:MM')

function resetForm() {
  resetSignal.value = true
  Object.assign(formData, eventInitialState)
  nextTick(() => {
    resetSignal.value = false
  })
}

function checkValues(data: Object): boolean {
  return !Object.values(data).some((value) => value === null || value === undefined || value === '')
}

function handleSubmit() {
  if (checkValues(formData)) {
    addEvent(formData)
    resetForm()
    formEnabled.value = false
  } else {
    // TODO: toast error
  }
}

function handleCategoryUpdate(selected: string[]) {
  formData.categories = selected
}
</script>

<template>
  <ViewHeader title="create a new event" />
  <div v-show="!formEnabled">
    <div class="pb-4">Event submitted successfully!</div>
    <button
      type="button"
      @click="formEnabled = true"
      class="bg-amber-300 hover:bg-amber-400 py-2 px-4 rounded-lg dark:bg-amber-700 dark:hover:bg-amber-600"
    >
      Add another event
    </button>
  </div>
  <form v-show="formEnabled" class="grid gap-4" @submit.prevent="handleSubmit">
    <label for="name">Name</label>
    <input
      type="text"
      id="name"
      v-model="formData.name"
      class="rounded-lg w-full py-2 px-3 text-gray-700 dark:bg-gray-600 dark:text-gray-300 dark:border-gray-300"
    />
    <label for="location">Location</label>
    <input
      type="text"
      id="location"
      v-model="formData.location"
      class="rounded-lg w-full py-2 px-3 text-gray-700 dark:bg-gray-600 dark:text-gray-300 dark:border-gray-300"
    />
    <label for="date">Date</label>
    <input
      type="datetime-local"
      id="date"
      :min="currentDateFormatted"
      v-model="formData.timestamp"
      class="rounded-lg w-full py-2 px-3 text-gray-700 dark:bg-gray-600 dark:text-gray-300 dark:border-gray-300"
    />
    <DropdownSelect
      name="categories"
      :options="categories"
      @update="handleCategoryUpdate"
      :reset-signal="resetSignal"
    />
    <label for="description">Description</label>
    <textarea
      class="w-full h-36 rounded-lg py-2 px-3 text-gray-700 dark:bg-gray-600 dark:text-gray-300 dark:border-gray-300"
      id="description"
      maxlength="250"
      v-model="formData.description"
    ></textarea>
    <div>
      <button
        type="submit"
        class="bg-amber-300 hover:bg-amber-400 py-2 px-4 rounded-lg dark:bg-amber-700 dark:hover:bg-amber-600"
      >
        Submit
      </button>
    </div>
  </form>
</template>
