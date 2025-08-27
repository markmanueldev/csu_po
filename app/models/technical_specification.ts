import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import PurchaseRequest from '#models/purchase_request'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class TechnicalSpecification extends BaseModel {

  @column({ columnName: 'technical_specification_id', isPrimary: true })
  declare technicalSpecificationId: number

  @column({ columnName: 'delivery_requirement' })
  declare deliveryRequirement: String

  @column()
  declare warranty: String

  @column()
  declare inclusions: String

  @column()
  declare prototype: String

  @belongsTo((): typeof PurchaseRequest => PurchaseRequest)
  declare purchaseRequest: BelongsTo<typeof PurchaseRequest>

}
