import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import PurchaseRequest from '#models/purchase_request'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class TechnicalSpecification extends BaseModel {
  @column({ columnName: 'technical_specification_id', isPrimary: true })
  declare technicalSpecificationId: number

  @column({ columnName: 'delivery_requirement' })
  declare deliveryRequirement: string

  @column()
  declare warranty: string

  @column()
  declare inclusions: string

  @column()
  declare prototype: string

  @belongsTo((): typeof PurchaseRequest => PurchaseRequest)
  declare purchaseRequest: BelongsTo<typeof PurchaseRequest>
}
