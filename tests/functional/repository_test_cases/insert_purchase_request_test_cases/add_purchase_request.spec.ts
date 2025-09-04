import { test } from '@japa/runner'
import PurchaseRequest from '#models/purchase_request_models/purchase_request'
import { PurchaseRequestTestFactory } from '../../../factories/purchase_request_repo_factories/purchase_request_test_factory.js'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('Add purchase requests', (group) => {
  group.each.setup(async () => {
    await testUtils.db().truncate()
  })
  test('Test to insert purchase request in the database', async ({ assert }) => {
    // Creating Purchase Request  Object
    const purchaseRequestTest: PurchaseRequest = PurchaseRequestTestFactory()

    await purchaseRequestTest.save()

    assert.isNotNull(purchaseRequestTest)
    assert.isNotNull(purchaseRequestTest.purchaseRequestId)
    assert.equal(purchaseRequestTest.requestorName, 'RN-001')
    assert.equal(purchaseRequestTest.contactNumber, '09460678123')
    assert.isString(purchaseRequestTest.emailAddress)
    assert.equal(purchaseRequestTest.office, 'IT Department')
    assert.equal(purchaseRequestTest.unit, 'Unit A')
    assert.equal(purchaseRequestTest.branch, 'Branch B')
    assert.equal(purchaseRequestTest.budgetClearance, 'Budget and Accounting')
    assert.equal(purchaseRequestTest.fundingSource, 'Trust Fund')
    assert.equal(purchaseRequestTest.technicalWorkingGroup, 'ICT Equipment - DR. ALVIN B. ALONZO')
    assert.equal(purchaseRequestTest.approverName, 'Mark Angelo Manuel')
    assert.equal(purchaseRequestTest.isEarlyProcurement, false)
    assert.equal(purchaseRequestTest.purpose, 'Installing of CCTV')
    assert.equal(purchaseRequestTest.comments, 'Goods')

    const foundRecord: PurchaseRequest | null = await PurchaseRequest.find(
      purchaseRequestTest.purchaseRequestId
    )
    assert.isNotNull(foundRecord)
  })

  test('Testing null values', async ({ assert }) => {
    // Creating Purchase Request  Object
    const purchaseRequestTest: PurchaseRequest = PurchaseRequestTestFactory()

    purchaseRequestTest.approverName = null
    purchaseRequestTest.comments = null
    await purchaseRequestTest.save()

    assert.isNotNull(purchaseRequestTest)
    assert.isNotNull(purchaseRequestTest.purchaseRequestId)
    const foundRecord: PurchaseRequest | null = await PurchaseRequest.find(
      purchaseRequestTest.purchaseRequestId
    )
    assert.isNotNull(foundRecord)
    assert.isNull(purchaseRequestTest.approverName)
    assert.isNull(purchaseRequestTest.comments)
  })
})
