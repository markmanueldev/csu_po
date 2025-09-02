import PurchaseRequest from '#models/purchase_request'
import { faker } from '@faker-js/faker'

export function PurchaseRequestTestFactory() {
  const purchaseRequest = new PurchaseRequest()
  purchaseRequest.requestorName = 'RN-001'
  purchaseRequest.contactNumber = '09460678123'
  purchaseRequest.emailAddress = faker.internet.email()
  purchaseRequest.office = 'IT Department'
  purchaseRequest.unit = 'Unit A'
  purchaseRequest.branch = 'Branch B'
  purchaseRequest.purchaseRequestDate = new Date(2025, 8, 29)
  purchaseRequest.budgetClearance = 'Budget and Accounting'
  purchaseRequest.fundingSource = 'Trust Fund'
  purchaseRequest.technicalWorkingGroup = 'ICT Equipment - DR. ALVIN B. ALONZO'
  purchaseRequest.approverName = 'Mark Angelo Manuel'
  purchaseRequest.isEarlyProcurement = false
  purchaseRequest.purpose = 'Installing of CCTV'
  purchaseRequest.comments = 'Goods'
  return purchaseRequest
}
