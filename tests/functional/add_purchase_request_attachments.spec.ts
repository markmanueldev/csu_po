import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('Add purchase request attachments', (group) => {
  group.each.setup(async () => {
    await testUtils.db().truncate()
  })
  test('Test in inserting the purchase request attachments in the database', async ({
    assert,
  }) => {})
})
