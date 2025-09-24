import PurchaseRequest from '#models/purchase_request_models/purchase_request'
import { PurchaseRequestDatabaseInterface } from '../contracts/purchase_request_contracts/purchase_request_database_interface.js'
import { PurchaseRequestAttachmentInterface } from '../contracts/purchase_request_contracts/purchase_request_attachment_interface.js'
import PurchaseRequestAttachment from '#models/purchase_request_models/purchase_request_attachment'
import { PurchaseRequestItemInterface } from '../contracts/purchase_request_contracts/purchase_request_item_interface.js'
import PurchaseRequestItem from '#models/purchase_request_models/purchase_request_item'
import TechnicalSpecification from '#models/purchase_request_models/technical_specification'
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
    const mappedItems = serviceData.map((item) => ({
      ...item,
      remarks: item.remarks ?? undefined,
    }))

    const purchaseRequestItem: PurchaseRequestItem[] =
      await PurchaseRequestItem.createMany(mappedItems)

    return purchaseRequestItem
  }

  public async createPurchaseRequestAttachments(
    serviceData: PurchaseRequestAttachmentInterface[]
  ): Promise<PurchaseRequestAttachment[]> {
    const mappedAttachments = serviceData.map((attachment) => ({
      ...attachment,
      fileName: attachment.fileName ?? undefined,
    }))

    const purchaseRequestAttachment: PurchaseRequestAttachment[] =
      await PurchaseRequestAttachment.createMany(mappedAttachments)

    return purchaseRequestAttachment
  }

  public async createTechnicalSpecifications(
    serviceData: TechnicalSpecification
  ): Promise<TechnicalSpecification> {
    const technicalSpecification: TechnicalSpecification = await TechnicalSpecification.create({
      purchaseRequestId: serviceData.purchaseRequestId,
      deliveryRequirement: serviceData.deliveryRequirement,
      warranty: serviceData.warranty,
      inclusions: serviceData.inclusions,
      prototype: serviceData.prototype,
    })
    return technicalSpecification
  }

  public async createPurchaseRequestLogs(
    serviceData: PurchaseRequestLog
  ): Promise<PurchaseRequestLog> {
    const purchaseRequestLog: PurchaseRequestLog = await PurchaseRequestLog.create({
      purchaseRequestId: serviceData.purchaseRequestId,
      purchaseDate: serviceData.purchaseDate,
      status: serviceData.status,
      user: serviceData.user,
      remarks: serviceData.remarks,
    })

    return purchaseRequestLog
  }

  public async getAllPurchaseRequest() {
    return {
      purchaseRequestInfo: await PurchaseRequest.all(),
      technicalSpecification: await TechnicalSpecification.all(),
      purchaseRequestLogs: await PurchaseRequestLog.all(),
      purchaseRequestItems: await PurchaseRequestItem.all(),
      purchaseRequestAttachments: await PurchaseRequestAttachment.all(),
    }
  }
}
