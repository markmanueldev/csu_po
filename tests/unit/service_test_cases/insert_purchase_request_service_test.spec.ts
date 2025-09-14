import { test } from '@japa/runner'
import { PurchaseRequestServiceInterface } from '../../../app/contracts/purchase_request_service_contracts/purchase_request_service_interface.js'
import { PurchaseRequestFormServiceFactory } from '#tests/factories/purchase_request_api_factories/purchase_request_service_factory'
import testUtils from '@adonisjs/core/services/test_utils'
import { PurchaseRequestService } from '#services/purchase_request_service'
import PurchaseRequest from '#models/purchase_request_models/purchase_request'
import app from '@adonisjs/core/services/app'
import { PurchaseRequestRepository } from '../../../app/repositories/purchase_request_repository.js'
import { Logger } from '@adonisjs/core/logger'

test.group('Service test cases insert purchase request service test', (group) => {
  group.each.setup(async function () {
    await testUtils.db().truncate()
  })

  test('Testing create purchase request from the service', async ({ assert }) => {
    const payload: PurchaseRequestServiceInterface = PurchaseRequestFormServiceFactory()

    class FakeRepository extends PurchaseRequestRepository {
      async createPurchaseRequestInfo(
        serviceData: PurchaseRequestServiceInterface
      ): Promise<PurchaseRequest> {
        return super.createPurchaseRequestInfo(serviceData)
      }
    }

    class FakeLogger {
      info() {}
      error() {}
      warn() {}
    }

    app.container.swap(PurchaseRequestRepository, () => {
      return new FakeRepository()
    })

    app.container.swap(Logger, () => {
      return new FakeLogger() as unknown as Logger
    })

    const service: PurchaseRequestService = await app.container.make(PurchaseRequestService)
    const testCreatePurchaseRequest = await service.createPurchaseRequest(payload)

    const {
      purchaseRequestInfo,
      purchaseRequestLogs,
      purchaseRequestItems,
      technicalSpecification,
    } = testCreatePurchaseRequest

    purchaseRequestLogs.purchaseRequestId = purchaseRequestInfo.purchaseRequestId
    technicalSpecification.purchaseRequestId = purchaseRequestInfo.purchaseRequestId

    assert.exists(purchaseRequestInfo.purchaseRequestId)
    assert.exists(purchaseRequestLogs.purchaseRequestLogId)
    assert.exists(purchaseRequestLogs.purchaseRequestId)
    assert.exists(technicalSpecification.technicalSpecificationId)
    assert.exists(technicalSpecification.purchaseRequestId)

    for (const item of purchaseRequestItems) {
      item.purchaseRequestId = purchaseRequestInfo.purchaseRequestId
      assert.exists(item.purchaseRequestItemId)
      assert.exists(item.purchaseRequestId)
    }

    assert.strictEqual(purchaseRequestInfo.requestorName, payload.requestorName)
    assert.strictEqual(purchaseRequestInfo.contactNumber, payload.contactNumber)
    assert.strictEqual(purchaseRequestInfo.emailAddress, payload.emailAddress)
    assert.strictEqual(purchaseRequestInfo.office, payload.office)
    assert.strictEqual(purchaseRequestInfo.unit, payload.unit)
    assert.strictEqual(purchaseRequestInfo.branch, payload.branch)
    assert.strictEqual(purchaseRequestInfo.purchaseRequestDate, payload.purchaseRequestDate)
    assert.strictEqual(purchaseRequestInfo.budgetClearance, payload.budgetClearance)
    assert.strictEqual(purchaseRequestInfo.fundingSource, payload.fundingSource)
    assert.strictEqual(purchaseRequestInfo.technicalWorkingGroup, payload.technicalWorkingGroup)
    assert.strictEqual(purchaseRequestInfo.approverName, payload.approverName)
    assert.strictEqual(purchaseRequestInfo.isEarlyProcurement, payload.isEarlyProcurement)
    assert.strictEqual(purchaseRequestInfo.purpose, payload.purpose)
    assert.strictEqual(purchaseRequestInfo.comments, payload.comments)

    assert.strictEqual(technicalSpecification.deliveryRequirement, payload.deliveryRequirement)
    assert.strictEqual(technicalSpecification.warranty, payload.warranty)
    assert.strictEqual(technicalSpecification.inclusions, payload.inclusions)
    assert.strictEqual(technicalSpecification.prototype, payload.prototype)

    assert.strictEqual(purchaseRequestLogs.purchaseDate, payload.purchaseDate)
    assert.strictEqual(purchaseRequestLogs.status, payload.status)
    assert.strictEqual(purchaseRequestLogs.user, payload.user)
    assert.strictEqual(purchaseRequestLogs.remarks, payload.remarks)

    for (const [index, item] of purchaseRequestItems.entries()) {
      assert.strictEqual(payload.purchaseRequestItems[index].itemDescription, item.itemDescription)
      assert.strictEqual(payload.purchaseRequestItems[index].unitOfMeasure, item.unitOfMeasure)
      assert.strictEqual(payload.purchaseRequestItems[index].quantity, item.quantity)
      assert.strictEqual(payload.purchaseRequestItems[index].unitCost, item.unitCost)
      assert.strictEqual(payload.purchaseRequestItems[index].totalCost, item.totalCost)
      assert.strictEqual(payload.purchaseRequestItems[index].remarks, item.remarks)
    }
  })
})
