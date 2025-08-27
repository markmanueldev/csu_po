import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import PurchaseRequest from '#models/purchase_request'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class PurchaseRequestLog extends BaseModel {
  @column({ columnName: 'purchase_request_log_id', isPrimary: true })
  declare purchaseRequestLogId: number

  @column({ columnName: 'purchase_date' })
  declare purchaseDate: Date

  @column()
  declare user: String

  @column()
  declare remarks: String

  @belongsTo((): typeof PurchaseRequest => PurchaseRequest)
  declare purchaseRequest: BelongsTo<typeof PurchaseRequest>
}
