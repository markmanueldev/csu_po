// import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'
import { PurchaseRequestService } from '#services/purchase_request_service'
import { HttpContext } from '@adonisjs/core/http'
import { Logger } from '@adonisjs/core/logger'
import { PurchaseRequestInterface } from '../contracts/purchase_request_contracts/purchase_request_interface.js'
import { createPurchaseRequestValidator } from '#validators/purchase_request_validation'
import PurchaseRequest from '#models/purchase_request_models/purchase_request'

@inject()
export default class PurchaseRequestsController {
  constructor(
    protected purchaseRequestService: PurchaseRequestService,
    protected logger: Logger
  ) {}

  public async storePurchaseRequest({ request, response }: HttpContext) {
    this.logger.info('Purchase request info', request.body())

    try {
      const validateData = await createPurchaseRequestValidator.validate(request.body())
      const data: PurchaseRequestInterface = validateData as PurchaseRequestInterface
      const createPurchaseRequestService: PurchaseRequest =
        await this.purchaseRequestService.createPurchaseRequest(data)
      return response.status(201).json(createPurchaseRequestService)
    } catch (error) {
      if (error.status === 400) {
        this.logger.error('Bad Request: Validation failed for purchase request.', {
          errors: error.messages,
        })
        return response.status(400).send('Bad Request: Validation failed for purchase request.')
      }

      this.logger.error('Bad Request: Failed to create purchase request due to server error', error)
    }
  }
}
