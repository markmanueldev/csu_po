// import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'
import { PurchaseRequestService } from '#services/purchase_request_service'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class PurchaseRequestsController {
  constructor(protected purchaseRequestService: PurchaseRequestService) {}

  public async storePurchaseRequestInfo({ params }: HttpContext) {}
}
