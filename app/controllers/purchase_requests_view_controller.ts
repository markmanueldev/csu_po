import { inject } from "@adonisjs/core";
import { Logger } from '@adonisjs/core/logger'
import { PurchaseRequestService } from '#services/purchase_request_service'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class PurchaseRequestsViewController {
constructor(
    protected purchaseRequestService: PurchaseRequestService,
    protected logger: Logger
  ) {}


  public async displayAllPurchaseRequestData({ view }: HttpContext) {
    const data = await this.purchaseRequestService.getAllPurchaseRequestData()
    return view.render('pages/dashboard', { records: data })
  }

}