import PurchaseRequestAttachment from '#models/purchase_request_models/purchase_request_attachment'
import { DateTime } from 'luxon'

export function PurchaseRequestAttachmentTestFactory() {
  const purchaseRequestAttachment = new PurchaseRequestAttachment()

  purchaseRequestAttachment.fileName = 'PPMP Sample Attachment'
  purchaseRequestAttachment.storagePath = 's3://example.com'
  purchaseRequestAttachment.documentType = 'PPMP'
  purchaseRequestAttachment.mimeType = 'pdf'
  purchaseRequestAttachment.uploadedAt = DateTime.fromJSDate(new Date(2025, 8, 29, 18, 16, 23))

  return purchaseRequestAttachment
}
