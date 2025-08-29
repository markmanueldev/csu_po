import PurchaseRequest from '#models/purchase_request'
import { PurchaseRequestInterface } from '../contracts/purchase_request_interface.js'

export class PurchaseRequestRepository {
  public async createPurchaseRequestInfo(
    serviceData: PurchaseRequestInterface
  ): Promise<PurchaseRequest> {
    const purchaseRequestForm: PurchaseRequest = await PurchaseRequest.create({
      purchaseRequestNumber: serviceData.purchaseRequestNumber,
      requestorName: serviceData.requestorName,
      contactNumber: serviceData.contactNumber,
      emailAddress: serviceData.emailAddress,
      office: serviceData.office,
      unit: serviceData.unit,
      branch: serviceData.branch,
      purchaseRequestDate: serviceData.purchaseRequestDate,
      budgetClearance: serviceData.budgetClearance,
      fundingSource: serviceData.fundingSource,
      technicalWorkingGroup: serviceData.technicalWorkingGroup,
      purchaserName: serviceData.purchaserName,
      approverName: serviceData.approverName,
      isEarlyProcurement: serviceData.isEarlyProcurement,
      purpose: serviceData.purpose,
      comments: serviceData.comments,
    })

    return purchaseRequestForm
  }


}
