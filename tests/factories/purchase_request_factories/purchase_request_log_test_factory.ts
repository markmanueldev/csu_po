import PurchaseRequestLog from '#models/purchase_request_models/purchase_request_log'
import { faker } from '@faker-js/faker'

export function PurchaseRequestLogTestFactory() {
  const purchaseRequestLog = new PurchaseRequestLog()

  purchaseRequestLog.purchaseDate = faker.date.past()
  purchaseRequestLog.status = 'Created'
  purchaseRequestLog.user = faker.person.fullName()
  purchaseRequestLog.remarks = faker.lorem.paragraph()

  return purchaseRequestLog
}
