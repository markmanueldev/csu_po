import { test } from '@japa/runner'
import validator from 'validator'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('Validate email', (group) => {
  group.each.setup(async () => {
    await testUtils.db().truncate()
  })
  test('Email Validation for Purchase Request', ({ assert }, row) => {
    // @ts-ignore
    assert.equal(validator.isEmail(row.email), row.result)
  }).with([
    {
      email: 'manuelmarkangelo22@gmail.com',
      result: true,
    },
    {
      email: 'test.user+spam@company.co.uk',
      result: true,
    },
    {
      email: '',
      result: false,
    },
    {
      email: 'email@example.com (Joe Smith)',
      result: false,
    },
    {
      email: '@example.com',
      result: false,
    },
    {
      email: 'test@.com',
      result: false,
    },
    {
      email: 'test..user@gmail.com',
      result: false,
    },
    {
      email: 'test@test@gmail.com',
      result: false,
    },
    {
      email: 'test@example',
      result: false,
    },
  ])
})
