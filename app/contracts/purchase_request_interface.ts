export interface PurchaseRequestInterface {
  purchaseRequestNumber: string
  requestorName: string
  contactNumber: string
  emailAddress: string
  office: string
  unit: string
  branch: string
  purchaseRequestDate: Date
  budgetClearance: 'Budget and Accounting' | 'Accounting Only' | 'Budget Only'
  fundingSource: string
  technicalWorkingGroup:
    | 'ICT Equipment - DR. ALVIN B. ALONZO'
    | 'Infrastructure and Construction - ENGR. JAMES B. BUSILAN'
    | 'Goods and Supplies - MR. ELIJAH V. CRUZ'
    | 'Auxiliary, Maintenance and General Services - MR. TERENCE ALFRED ROBERTO A. TEJADA'
  purchaserName?: string
  approverName?: string
  isEarlyProcurement: boolean
  purpose: string
  comments?: string
}
