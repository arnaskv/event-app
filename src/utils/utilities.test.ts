import { expect, test } from 'vitest'
import { isTitle } from './utilities'

test('isTitle', () => {
  expect(isTitle('hello')).toBe('Hello')
  expect(isTitle('hello world')).toBe('Hello world')
})
