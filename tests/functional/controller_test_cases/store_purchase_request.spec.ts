import { test } from '@japa/runner'
import { PurchaseRequestFormControllerFactory } from '#tests/factories/purchase_request_api_factories/purchase_request_controller_test_factory'
import { PurchaseRequestControllerInterface } from '../../../app/contracts/purchase_request_controller_contracts/purchase_request_controller_interface.js'

test.group('Store purchase request', () => {
  test('Testing purchase request controller', async ({ client, assert }) => {
    const payload: PurchaseRequestControllerInterface = PurchaseRequestFormControllerFactory()
    const response = await client.post('/purchase-requests').json(payload).withCsrfToken()

    response.assertStatus(201)

    assert.exists(response.body().purchaseRequestInfo)
    assert.exists(response.body().technicalSpecification)
    assert.exists(response.body().purchaseRequestLogs)
    assert.isArray(response.body().purchaseRequestItems)
    assert.isArray(response.body().purchaseRequestAttachments)

    assert.isNumber(response.body().purchaseRequestInfo.purchaseRequestId)
    assert.isNumber(response.body().technicalSpecification.technicalSpecificationId)
    assert.isNumber(response.body().purchaseRequestLogs.purchaseRequestLogId)
  })
})
