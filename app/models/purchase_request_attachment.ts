import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import PurchaseRequest from '#models/purchase_request'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class PurchaseRequestAttachment extends BaseModel {
  @column({ columnName: 'purchase_request_attachment_id', isPrimary: true })
  declare purchaseRequestAttachmentId: number

  @column({ columnName: 'file_name' })
  declare fileName: string

  @column({ columnName: 'storage_path' })
  declare storagePath: string

  @column({ columnName: 'document_type' })
  declare documentType: 'PPMP' | 'Price Quotation' | 'Supporting Documents'

  @column({ columnName: 'mime_type' })
  declare mimeType: string

  @column.dateTime({ columnName: 'uploaded_at', autoCreate: true, autoUpdate: true })
  declare uploadedAt: DateTime

  @column()
  declare purchaseRequestId: number

  @belongsTo((): typeof PurchaseRequest => PurchaseRequest)
  declare purchaseRequest: BelongsTo<typeof PurchaseRequest>
}
