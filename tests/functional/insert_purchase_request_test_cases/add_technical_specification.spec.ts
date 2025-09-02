import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import TechnicalSpecification from '#models/purchase_request_models/technical_specification'
import { TechnicalSpecificationTestFactory } from '#tests/factories/purchase_request_factories/technical_specification_test_factory'
import PurchaseRequest from '#models/purchase_request_models/purchase_request'
import { PurchaseRequestTestFactory } from '#tests/factories/purchase_request_factories/purchase_request_test_factory'

test.group('Add technical specification', (group) => {
  group.each.setup(async () => {
    await testUtils.db().truncate()
  })

  test('Test case for inserting technical specifications in the persistence layer', async ({
    assert,
  }) => {
    const purchaseRequest: PurchaseRequest = PurchaseRequestTestFactory()
    await purchaseRequest.save()

    const technicalSpecification: TechnicalSpecification = TechnicalSpecificationTestFactory()
    technicalSpecification.purchaseRequestId = purchaseRequest.purchaseRequestId

    await technicalSpecification.save()

    assert.isNotNull(purchaseRequest)
    assert.isNotNull(technicalSpecification)
    assert.isNotNull(technicalSpecification.purchaseRequestId)
    assert.isNotNull(technicalSpecification.technicalSpecificationId)
    assert.isNotNull(
      await TechnicalSpecification.find(technicalSpecification.technicalSpecificationId)
    )
    assert.isString(technicalSpecification.deliveryRequirement)
    assert.isString(technicalSpecification.warranty)
    assert.isString(technicalSpecification.inclusions)
    assert.isString(technicalSpecification.prototype)
  })

  test('Test case that it correctly puts null values for optional fields', async ({ assert }) => {
    const purchaseRequest: PurchaseRequest = PurchaseRequestTestFactory()
    await purchaseRequest.save()

    const technicalSpecification: TechnicalSpecification = TechnicalSpecificationTestFactory()
    technicalSpecification.purchaseRequestId = purchaseRequest.purchaseRequestId
    technicalSpecification.deliveryRequirement = null
    technicalSpecification.warranty = null
    technicalSpecification.inclusions = null
    technicalSpecification.prototype = null

    await technicalSpecification.save()

    assert.isNotNull(purchaseRequest)
    assert.isNotNull(technicalSpecification)
    assert.isNotNull(technicalSpecification.purchaseRequestId)
    assert.isNotNull(technicalSpecification.technicalSpecificationId)
    assert.isNotNull(
      await TechnicalSpecification.find(technicalSpecification.technicalSpecificationId)
    )

    assert.isNull(technicalSpecification.deliveryRequirement)
    assert.isNull(technicalSpecification.warranty)
    assert.isNull(technicalSpecification.inclusions)
    assert.isNull(technicalSpecification.prototype)
  })
})
