import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('/')
  await page.locator('div').filter({ hasText: 'EventFully' }).nth(2).click()
  await page.getByRole('button', { name: 'Dark mode' }).click()
  await page.locator('div').filter({ hasText: 'EventFully' }).nth(2).click()
  await page.getByRole('button', { name: 'Create event' }).click()
})
