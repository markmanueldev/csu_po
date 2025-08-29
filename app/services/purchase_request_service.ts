import { inject } from '@adonisjs/core'

@inject()
export class PurchaseRequestService {
  constructor(protected serviceData: PurchaseRequestService) {}
}
