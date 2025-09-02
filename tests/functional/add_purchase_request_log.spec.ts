import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import { PurchaseRequestLogTestFactory } from '#tests/factories/purchase_request_log_test_factory'
import PurchaseRequestLog from '#models/purchase_request_log'
import PurchaseRequest from '#models/purchase_request'
import { PurchaseRequestTestFactory } from '#tests/factories/purchase_request_test_factory'
import isDateObject from 'is-date-object'

test.group('Add purchase request log', (group) => {
  group.each.setup(async () => {
    await testUtils.db().truncate()
  })

  test('Test cases for purchase request logs', async ({ assert }) => {
    const purchaseRequest: PurchaseRequest = PurchaseRequestTestFactory()
    await purchaseRequest.save()

    const purchaseRequestLogs: PurchaseRequestLog = PurchaseRequestLogTestFactory()
    purchaseRequestLogs.purchaseRequestId = purchaseRequest.purchaseRequestId

    await purchaseRequestLogs.save()

    assert.isNotNull(purchaseRequest)
    assert.isNotNull(purchaseRequestLogs)
    assert.isNotNull(purchaseRequestLogs.purchaseRequestId)
    assert.isNotNull(purchaseRequestLogs.purchaseRequestLogId)
    assert.isNotNull(await PurchaseRequestLog.find(purchaseRequestLogs.purchaseRequestLogId))
    assert.isOk(isDateObject(purchaseRequestLogs.purchaseDate))
    assert.equal(purchaseRequestLogs.status, 'Created')
    assert.isString(purchaseRequestLogs.user)
    assert.isString(purchaseRequestLogs.remarks)
  })

  test('Test cases for null values', async ({ assert }) => {
    const purchaseRequest: PurchaseRequest = PurchaseRequestTestFactory()
    await purchaseRequest.save()

    const purchaseRequestLogs: PurchaseRequestLog = PurchaseRequestLogTestFactory()
    purchaseRequestLogs.purchaseRequestId = purchaseRequest.purchaseRequestId
    purchaseRequestLogs.remarks = null

    await purchaseRequestLogs.save()

    assert.isNotNull(purchaseRequest)
    assert.isNotNull(purchaseRequestLogs)
    assert.isNotNull(purchaseRequestLogs.purchaseRequestId)
    assert.isNotNull(purchaseRequestLogs.purchaseRequestLogId)
    assert.isNotNull(await PurchaseRequestLog.find(purchaseRequestLogs.purchaseRequestLogId))
    assert.isNull(purchaseRequestLogs.remarks)
  })
})
