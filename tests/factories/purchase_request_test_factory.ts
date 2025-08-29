import PurchaseRequest from '#models/purchase_request'

export function PurchaseRequestTestFactory() {
  const purchaseRequest = new PurchaseRequest()
  purchaseRequest.purchaseRequestNumber = 'PR-2025-001'
  purchaseRequest.requestorName = 'RN-001'
  purchaseRequest.contactNumber = '09460678123'
  purchaseRequest.emailAddress = 'manuelmarkangelo22@gmail.com'
  purchaseRequest.office = 'IT Department'
  purchaseRequest.unit = 'Unit A'
  purchaseRequest.branch = 'Branch B'
  purchaseRequest.purchaseRequestDate = new Date(2025, 8, 29)
  purchaseRequest.budgetClearance = 'Budget and Accounting'
  purchaseRequest.fundingSource = 'Trust Fund'
  purchaseRequest.technicalWorkingGroup = 'ICT Equipment - DR. ALVIN B. ALONZO'
  purchaseRequest.purchaserName = 'Hector Valdez'
  purchaseRequest.approverName = 'Mark Angelo Manuel'
  purchaseRequest.isEarlyProcurement = false
  purchaseRequest.purpose = 'Installing of CCTV'
  purchaseRequest.comments = 'Goods'
  return purchaseRequest
}
