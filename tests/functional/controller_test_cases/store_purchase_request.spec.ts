import { test } from '@japa/runner'
import { PurchaseRequestFormFactory } from '#tests/factories/purchase_request_api_factories/purchase_request_controller_test_factory'
import { PurchaseRequestAPIInterface } from '../../../app/contracts/purchase_request_contracts/purchase_request_api_interface.js'
import { ApiResponse } from '@japa/api-client'

test.group('Store purchase request', () => {
  test('Testing purchase request controller', async ({ client }) => {
    const payload: PurchaseRequestAPIInterface = PurchaseRequestFormFactory()

    const response: ApiResponse = await client
      .post('/purchase-requests')
      .form(payload)
      .withCsrfToken()

    response.assertStatus(201)
    response.assertBodyContains({
      purchaseRequestId: 1,
      requestorName: payload.requestorName,
      contactNumber: payload.contactNumber,
      emailAddress: payload.emailAddress,
      office: payload.office,
      unit: payload.unit,
      branch: payload.branch,
      purchaseRequestDate: new Date(payload.purchaseRequestDate).toISOString(),
      budgetClearance: payload.budgetClearance,
      fundingSource: payload.fundingSource,
      technicalWorkingGroup: payload.technicalWorkingGroup,
      approverName: payload.approverName,
      isEarlyProcurement: payload.isEarlyProcurement,
      purpose: payload.purpose,
      comments: payload.comments,
    })
  })
})
