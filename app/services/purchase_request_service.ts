import { inject } from '@adonisjs/core'
import { Logger } from '@adonisjs/core/logger'
import { PurchaseRequestRepository } from '../repositories/purchase_request_repository.js'
import { PurchaseRequestServiceInterface } from '../contracts/purchase_request_service_contracts/purchase_request_service_interface.js'
import PurchaseRequest from '#models/purchase_request_models/purchase_request'
import { c } from 'vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf.js'

@inject()
export class PurchaseRequestService {
  constructor(
    protected purchaseRequestRepository: PurchaseRequestRepository,
    protected logger: Logger
  ) {}

  public async createPurchaseRequest(controllerData: PurchaseRequestServiceInterface) {
    try {
      const purchaseRequestOnly: PurchaseRequest = {
        requestorName: controllerData.requestorName,
        contactNumber: controllerData.contactNumber,
        emailAddress: controllerData.emailAddress,
        office: controllerData.office,
        unit: controllerData.unit,
        branch: controllerData.branch,
        purchaseRequestDate: controllerData.purchaseRequestDate,
        budgetClearance: controllerData.budgetClearance,
        fundingSource: controllerData.fundingSource,
        technicalWorkingGroup: controllerData.technicalWorkingGroup,
        approverName: controllerData.approverName as string | null,
        isEarlyProcurement: controllerData.isEarlyProcurement,
        purpose: controllerData.purpose,
        comments: controllerData.comments as string | null,
      }
    } catch (error) {
      this.logger.error('Failed to create Purchase Request', {
        error: error.message,
        controllerData,
      })
      throw error
    }
  }
}
