import { test, describe, expect } from 'vitest'

import Island from '@components/Island.vue'

describe('exports', () => {
  test('ensure island component can be resolved', async () => {
    expect(Island.name).toEqual('Island')
  })
})
