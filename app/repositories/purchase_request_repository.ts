import PurchaseRequest from '#models/purchase_request_models/purchase_request'
import { PurchaseRequestDatabaseInterface } from '../contracts/purchase_request_contracts/purchase_request_database_interface.js'
import { PurchaseRequestAttachmentInterface } from '../contracts/purchase_request_contracts/purchase_request_attachment_interface.js'
import PurchaseRequestAttachment from '#models/purchase_request_models/purchase_request_attachment'
import { PurchaseRequestItemInterface } from '../contracts/purchase_request_contracts/purchase_request_item_interface.js'
import PurchaseRequestItem from '#models/purchase_request_models/purchase_request_item'
import { TechnicalSpecificationInterface } from '../contracts/purchase_request_contracts/technical_specification_interface.js'
import TechnicalSpecification from '#models/purchase_request_models/technical_specification'
import { PurchaseRequestLogInterface } from '../contracts/purchase_request_contracts/purchase_request_log_interface.js'
import PurchaseRequestLog from '#models/purchase_request_models/purchase_request_log'

export class PurchaseRequestRepository {
  public async createPurchaseRequestInfo(
    serviceData: PurchaseRequestDatabaseInterface
  ): Promise<PurchaseRequest> {
    const purchaseRequestForm: PurchaseRequest = await PurchaseRequest.create({
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
      approverName: serviceData.approverName,
      isEarlyProcurement: serviceData.isEarlyProcurement,
      purpose: serviceData.purpose,
      comments: serviceData.comments,
    })

    return purchaseRequestForm
  }

  public async createPurchaseRequestItems(
    serviceData: PurchaseRequestItemInterface[]
  ): Promise<PurchaseRequestItem[]> {
    const purchaseRequestItem: PurchaseRequestItem[] =
      await PurchaseRequestItem.createMany(serviceData)

    return purchaseRequestItem
  }

  public async createPurchaseRequestAttachments(
    serviceData: PurchaseRequestAttachmentInterface[]
  ): Promise<PurchaseRequestAttachment[]> {
    const purchaseRequestAttachment: PurchaseRequestAttachment[] =
      await PurchaseRequestAttachment.createMany(serviceData)

    return purchaseRequestAttachment
  }

  public async createTechnicalSpecifications(
    serviceData: TechnicalSpecificationInterface
  ): Promise<TechnicalSpecification> {
    const technicalSpecification: TechnicalSpecification = await TechnicalSpecification.create({
      deliveryRequirement: serviceData.deliveryRequirement,
      warranty: serviceData.warranty,
      inclusions: serviceData.inclusions,
      prototype: serviceData.prototype,
    })
    return technicalSpecification
  }

  public async createPurchaseRequestLogs(
    serviceData: PurchaseRequestLogInterface
  ): Promise<PurchaseRequestLog> {
    const purchaseRequestLog: PurchaseRequestLog = await PurchaseRequestLog.create({
      purchaseDate: serviceData.purchaseDate,
      status: serviceData.status,
      user: serviceData.user,
      remarks: serviceData.remarks,
    })

    return purchaseRequestLog
  }
}
