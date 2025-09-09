import { PurchaseRequestDatabaseInterface } from '../purchase_request_contracts/purchase_request_database_interface.js'
import { PurchaseRequestItemInterface } from '../purchase_request_contracts/purchase_request_item_interface.js'
import { PurchaseRequestAttachmentInterface } from '../purchase_request_contracts/purchase_request_attachment_interface.js'
import { TechnicalSpecificationInterface } from '../purchase_request_contracts/technical_specification_interface.js'
import { PurchaseRequestLogInterface } from '../purchase_request_contracts/purchase_request_log_interface.js'

export interface PurchaseRequestServiceInterface
  extends PurchaseRequestDatabaseInterface,
    TechnicalSpecificationInterface,
    PurchaseRequestLogInterface {
  purchaseRequestItems: PurchaseRequestItemInterface[]
  purchaseRequestAttachments: PurchaseRequestAttachmentInterface[]
}
