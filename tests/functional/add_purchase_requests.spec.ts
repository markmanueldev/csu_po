import { test } from '@japa/runner'
import PurchaseRequest from '#models/purchase_request'
import { PurchaseRequestTestFactory } from '#tests/factories/purchase_request_test_factory'
import validator from 'validator'

// Creating Purchase Request  Object
const purchaseRequestTest: PurchaseRequest = PurchaseRequestTestFactory()

test.group('Add purchase requests', (group) => {
  group.each.setup(async () => {
    console.log('')
  })
  test('Test to insert purchase request in the database', async ({ assert }) => {
    await purchaseRequestTest.save()

    assert.isNotNull(purchaseRequestTest)
    assert.isNotNull(purchaseRequestTest.purchaseRequestId)
    assert.equal(purchaseRequestTest.purchaseRequestNumber, 'PR-2025-001')
    assert.equal(purchaseRequestTest.requestorName, 'RN-001')
    assert.equal(purchaseRequestTest.contactNumber, '09460678123')
    assert.equal(purchaseRequestTest.office, 'IT Department')
    assert.equal(purchaseRequestTest.unit, 'Unit A')
    assert.equal(purchaseRequestTest.branch, 'Branch B')
    assert.equal(purchaseRequestTest.budgetClearance, 'Budget and Accounting')
    assert.equal(purchaseRequestTest.fundingSource, 'Trust Fund')
    assert.equal(purchaseRequestTest.technicalWorkingGroup, 'ICT Equipment - DR. ALVIN B. ALONZO')
    assert.equal(purchaseRequestTest.purchaserName, 'Hector Valdez')
    assert.equal(purchaseRequestTest.approverName, 'Mark Angelo Manuel')
    assert.equal(purchaseRequestTest.isEarlyProcurement, false)
    assert.equal(purchaseRequestTest.purpose, 'Installing of CCTV')
    assert.equal(purchaseRequestTest.comments, 'Goods')

    const foundRecord: PurchaseRequest | null = await PurchaseRequest.find(
      purchaseRequestTest.purchaseRequestId
    )
    assert.isNotNull(foundRecord)
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
