import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import { PurchaseRequestItemTestFactory } from '#tests/factories/purchase_request_factories/purchase_request_item_test_factory'
import PurchaseRequestItem from '#models/purchase_request_models/purchase_request_item'
import PurchaseRequest from '#models/purchase_request_models/purchase_request'
import { PurchaseRequestTestFactory } from '#tests/factories/purchase_request_factories/purchase_request_test_factory'

test.group('Add purchase request item', (group) => {
  group.each.setup(async () => {
    await testUtils.db().truncate()
  })
  test('Test to insert Purchase Request Items like its unit cost and the item desc etc.', async ({
    assert,
  }) => {
    const purchaseRequestTest: PurchaseRequest = PurchaseRequestTestFactory()
    await purchaseRequestTest.save()

    const purchaseRequestItemsTest: PurchaseRequestItem = PurchaseRequestItemTestFactory()
    purchaseRequestItemsTest.purchaseRequestId = purchaseRequestTest.purchaseRequestId

    await purchaseRequestItemsTest.save()

    assert.isNotNull(purchaseRequestTest)
    assert.isNotNull(purchaseRequestItemsTest)
    assert.isNotNull(purchaseRequestItemsTest.purchaseRequestId)
    assert.isNotNull(await PurchaseRequestItem.find(purchaseRequestItemsTest.purchaseRequestItemId))
    assert.isString(purchaseRequestItemsTest.itemDescription)
    assert.equal(purchaseRequestItemsTest.unitOfMeasure, 'PC')
    assert.equal(purchaseRequestItemsTest.quantity, 10)
    assert.equal(purchaseRequestItemsTest.unitCost, 100.0)
    assert.equal(purchaseRequestItemsTest.totalCost, 1000.0)
    assert.isString(purchaseRequestItemsTest.remarks)
  })
})
