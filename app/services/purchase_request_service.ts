import { inject } from '@adonisjs/core'
import { Logger } from '@adonisjs/core/logger'
import { PurchaseRequestRepository } from '../repositories/purchase_request_repository.js'
import PurchaseRequest from '#models/purchase_request_models/purchase_request'
import { PurchaseRequestInterface } from '../contracts/purchase_request_contracts/purchase_request_interface.js'

@inject()
export class PurchaseRequestService {
  constructor(
    protected purchaseRequestRepository: PurchaseRequestRepository,
    protected logger: Logger
  ) {}

  public async createPurchaseRequest(controllerData: PurchaseRequestInterface) {
    try {
      const onlyPurchaseRequestInfo: PurchaseRequest =
        await this.purchaseRequestRepository.createPurchaseRequestInfo(controllerData)
      this.logger.info('Purchase Request Info Successfully Created', onlyPurchaseRequestInfo)

      return onlyPurchaseRequestInfo
    } catch (error) {
      this.logger.error('Failed to create Purchase Request', {
        error: error.message,
        controllerData,
      })
      throw error
    }
  }
}
