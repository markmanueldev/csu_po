import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import PurchaseRequestAttachment from '#models/purchase_request_attachment'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import TechnicalSpecification from '#models/technical_specification'
import PurchaseRequestItem from '#models/purchase_request_item'
import PurchaseRequestLog from '#models/purchase_request_log'

export default class PurchaseRequest extends BaseModel {
  @hasMany((): typeof PurchaseRequestAttachment => PurchaseRequestAttachment)
  declare purchaseRequestAttachments: HasMany<typeof PurchaseRequestAttachment>

  @hasOne((): typeof TechnicalSpecification => TechnicalSpecification)
  declare technicalSpecification: HasOne<typeof TechnicalSpecification>

  @hasMany((): typeof PurchaseRequestItem => PurchaseRequestItem)
  declare purchaseRequestItems: HasMany<typeof PurchaseRequestItem>

  @hasMany((): typeof PurchaseRequestLog => PurchaseRequestLog)
  declare purchaseRequestLogs: HasMany<typeof PurchaseRequestLog>

  @column({ columnName: 'purchase_request_id', isPrimary: true })
  declare purchaseRequestId: number

  @column({ columnName: 'requestor_name' })
  declare requestorName: string

  @column({ columnName: 'contact_number' })
  declare contactNumber: string

  @column({ columnName: 'email_address' })
  declare emailAddress: string

  @column()
  declare office: string

  @column()
  declare unit: string

  @column()
  declare branch: string

  @column({ columnName: 'purchase_request_date' })
  declare purchaseRequestDate: Date

  @column({ columnName: 'budget_clearance' })
  declare budgetClearance: 'Budget and Accounting' | 'Accounting Only' | 'Budget Only'

  @column({ columnName: 'funding_source' })
  declare fundingSource: string

  @column({ columnName: 'technical_working_group' })
  declare technicalWorkingGroup:
    | 'ICT Equipment - DR. ALVIN B. ALONZO'
    | 'Infrastructure and Construction - ENGR. JAMES B. BUSILAN'
    | 'Goods and Supplies - MR. ELIJAH V. CRUZ'
    | 'Auxiliary, Maintenance and General Services - MR. TERENCE ALFRED ROBERTO A. TEJADA'

  @column({ columnName: 'approver_name' })
  declare approverName: string

  @column({ columnName: 'is_early_procurement' })
  declare isEarlyProcurement: boolean

  @column()
  declare purpose: string

  @column()
  declare comments: string
}
