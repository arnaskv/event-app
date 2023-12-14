import { ref } from 'vue'
import { defineStore } from 'pinia'

const useSidebarStore = defineStore('sidebar', () => {
  const sidebarEnabled = ref<boolean>(false)

  function toggleSidebar() {
    sidebarEnabled.value = !sidebarEnabled.value
  }

  return { sidebarEnabled, toggleSidebar }
})

export default useSidebarStore
