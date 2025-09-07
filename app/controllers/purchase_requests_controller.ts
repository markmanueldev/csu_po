// import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'
import { PurchaseRequestService } from '#services/purchase_request_service'
import { HttpContext } from '@adonisjs/core/http'
import { Logger } from '@adonisjs/core/logger'
import { createPurchaseRequestValidator } from '#validators/purchase_request_validation'
import PurchaseRequest from '#models/purchase_request_models/purchase_request'
import { errors } from '@vinejs/vine'

@inject()
export default class PurchaseRequestsController {
  constructor(
    protected purchaseRequestService: PurchaseRequestService,
    protected logger: Logger
  ) {}

  public async storePurchaseRequest({ request, response }: HttpContext) {
    try {
      const validateData = await createPurchaseRequestValidator.validate(request.body())
      const createPurchaseRequestService: PurchaseRequest =
        await this.purchaseRequestService.createPurchaseRequest(validateData)
      return response.status(201).json(createPurchaseRequestService)
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        console.log(error.messages)
      }
    }
  }
}
