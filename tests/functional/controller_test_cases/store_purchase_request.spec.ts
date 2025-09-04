import { test } from '@japa/runner'

test.group('Store purchase request', () => {
  test('Testing purchase request controller', async ({ client }) => {
    const response = await client.post('purchase_requests')
  })
})
