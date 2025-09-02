import { DateTime } from 'luxon'

export interface PurchaseRequestAttachmentInterface {
  fileName: string
  storagePath: string
  documentType: 'PPMP' | 'Price Quotation' | 'Supporting Documents'
  mimeType: string
  uploadedAt: DateTime
}
