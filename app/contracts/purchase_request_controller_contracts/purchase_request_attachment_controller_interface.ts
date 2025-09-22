import { PurchaseRequestAttachmentInterface } from '../purchase_request_contracts/purchase_request_attachment_interface.js'

export interface PurchaseRequestAttachmentControllerInterface
  extends Omit<PurchaseRequestAttachmentInterface, 'uploadedAt'> {
  uploadedAt: string
}
