import { defineStore } from 'pinia'

const useCategoryStore = defineStore('category', () => {
  const categories: string[] = [
    'health',
    'tech',
    'music',
    'fashion',
    'esports',
    'volunteering',
    'other',
  ]

  return { categories }
})

export default useCategoryStore
