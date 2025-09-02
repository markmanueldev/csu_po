export interface PurchaseRequestItemInterface {
  itemDescription: string
  unitOfMeasure: 'PC' | 'Box' | 'Set' | 'Lot'
  quantity: number
  unitCost: number
  totalCost: number
  remarks: string
}
