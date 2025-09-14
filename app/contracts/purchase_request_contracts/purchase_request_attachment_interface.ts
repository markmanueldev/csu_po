import { DateTime } from 'luxon'

export interface PurchaseRequestAttachmentInterface {
  fileName: string | null
  storagePath: string
  documentType: 'PPMP' | 'Price Quotation' | 'Supporting Documents'
  mimeType: string
  uploadedAt: DateTime
}
