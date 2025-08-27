import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class PurchaseRequestItem extends BaseModel {
  @column({ columnName: 'purchase_request_item_id', isPrimary: true })
  declare purchaseRequestItemId: number

  @column({ columnName: 'item_description' })
  declare itemDescription: string

  @column({ columnName: 'unit_of_measure' })
  declare unitOfMeasure: 'PC' | 'Box' | 'Set' | 'Lot'

  @column()
  declare quantity: number

  @column({ columnName: 'unit_cost' })
  declare unitCost: number

  @column({ columnName: 'total_cost' })
  declare totalCost: number

  @column()
  declare remarks: string
}
