import PurchaseRequestItem from '#models/purchase_request_item'
import { faker } from '@faker-js/faker'

export function PurchaseRequestItemTestFactory() {
  const purchaseRequestItem = new PurchaseRequestItem()

  purchaseRequestItem.itemDescription = faker.commerce.productDescription()
  purchaseRequestItem.unitOfMeasure = 'PC'
  purchaseRequestItem.quantity = 10
  purchaseRequestItem.unitCost = 100.0
  purchaseRequestItem.totalCost = 1000.0
  purchaseRequestItem.remarks = faker.lorem.paragraph()

  return purchaseRequestItem
}
