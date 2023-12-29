import { test, expect } from '@playwright/test'

test('dark and light mode toggle', async ({ page }) => {
  await page.goto('/')

  const isDark = await page.evaluate(() => {
    return document.documentElement.classList.contains('dark')
  })

  if (isDark) {
    await expect(page.getByRole('button', { name: 'Dark mode' })).toBeHidden()
    await expect(page.getByRole('button', { name: 'Light mode' })).toBeVisible()
    await page.getByRole('button', { name: 'Light mode' }).click()
    await expect(page.getByRole('button', { name: 'Dark mode' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Light mode' })).toBeHidden()
    await page.getByRole('button', { name: 'Dark mode' }).click()
    await expect(page.getByRole('button', { name: 'Dark mode' })).toBeHidden()
    await expect(page.getByRole('button', { name: 'Light mode' })).toBeVisible()
  } else {
    await expect(page.getByRole('button', { name: 'Dark mode' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Light mode' })).toBeHidden()
    await page.getByRole('button', { name: 'Dark mode' }).click()
    await expect(page.getByRole('button', { name: 'Dark mode' })).toBeHidden()
    await expect(page.getByRole('button', { name: 'Light mode' })).toBeVisible()
    await page.getByRole('button', { name: 'Light mode' }).click()
    await expect(page.getByRole('button', { name: 'Dark mode' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Light mode' })).toBeHidden()
  }
})
