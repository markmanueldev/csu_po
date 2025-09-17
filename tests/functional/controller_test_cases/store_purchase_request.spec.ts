import { test } from '@japa/runner'
import { PurchaseRequestFormControllerFactory } from '#tests/factories/purchase_request_api_factories/purchase_request_controller_test_factory'
import { PurchaseRequestControllerInterface } from '../../../app/contracts/purchase_request_controller_contracts/purchase_request_controller_interface.js'

test.group('Store purchase request', () => {
  test('Testing purchase request controller', async ({ client }) => {
    const payload: PurchaseRequestControllerInterface = PurchaseRequestFormControllerFactory()

    console.log(typeof payload)

    const response = await client.post('/purchase-requests').form(payload).withCsrfToken()

    response.dump()

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
      deliveryRequirement: payload.deliveryRequirement,
      warranty: payload.warranty,
      inclusions: payload.inclusions,
      prototype: payload.prototype,
      purchaseDate: payload.purchaseDate,
      status: payload.status,
      user: payload.user,
      remarks: payload.remarks,
      purchaseRequestItems: payload.purchaseRequestItems,
      purchaseRequestAttachments: payload.purchaseRequestAttachments,
    })
  })
})
