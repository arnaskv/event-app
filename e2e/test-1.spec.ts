import { test, expect } from '@playwright/test'

test('add new event', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Create event' }).click()
  await expect(page.getByText('Create a new event')).toHaveText('Create a new event')
  await page.getByLabel('Name').fill('Morning yoga')
  await page.getByLabel('Location').fill('Azuolynas')
  await page.getByLabel('Date').fill('2024-01-02T10:00')
  await page.getByRole('button', { name: 'Categories' }).click()
  await page.getByRole('button', { name: 'Health' }).click()
  await page.getByLabel('Description').fill('Breath in some fresh air with mother nature.')
  await page.getByRole('button', { name: 'Submit' }).click()
  await expect(page.getByText('Event submitted successfully!')).toHaveText(
    'Event submitted successfully!'
  )
  await page.getByRole('button', { name: 'Add another event' }).click()
  await expect(page.getByText('Create a new event')).toHaveText('Create a new event')
  await page.getByRole('link', { name: 'EventFully' }).click()
  await page.getByRole('link', { name: 'See all' }).click()
  await page.getByRole('button', { name: 'health' }).click()
  await page.getByRole('button', { name: 'Morning yoga 2024-01-02T10:00' }).click()
  await expect(page.getByText('Breath in some fresh air with')).toHaveText(
    'Breath in some fresh air with mother nature.'
  )
})
