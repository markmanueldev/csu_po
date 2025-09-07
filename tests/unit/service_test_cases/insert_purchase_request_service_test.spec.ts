import { test } from '@japa/runner'
import { PurchaseRequestInterface } from '../../../app/contracts/purchase_request_contracts/purchase_request_api_interface.js'
import { PurchaseRequestFormFactory } from '#tests/factories/purchase_request_api_factories/purchase_request_api_test_factory'
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
    const payload: PurchaseRequestInterface = PurchaseRequestFormFactory()

    class FakeRepository extends PurchaseRequestRepository {
      async createPurchaseRequestInfo(
        serviceData: PurchaseRequestInterface
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

    const service = await app.container.make(PurchaseRequestService)
    const testCreatePurchaseRequest = await service.createPurchaseRequest(payload)

    assert.exists(testCreatePurchaseRequest.purchaseRequestId)
    assert.deepInclude(testCreatePurchaseRequest, payload)
  })
})
