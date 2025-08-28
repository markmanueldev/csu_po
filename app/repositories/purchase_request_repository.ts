import PurchaseRequest from '#models/purchase_request'

export class PurchaseRequestRepository {
  public async createPurchaseRequestInfo(data) {
    const purchaseRequestForm: PurchaseRequest = await PurchaseRequest.create({})
  }
}
