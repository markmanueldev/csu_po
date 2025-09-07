export interface PurchaseRequestAPIInterface {
  requestorName: string
  contactNumber: string
  emailAddress: string
  office: string
  unit: string
  branch: string
  purchaseRequestDate: string
  budgetClearance: 'Budget and Accounting' | 'Accounting Only' | 'Budget Only'
  fundingSource: string
  technicalWorkingGroup:
    | 'ICT Equipment - DR. ALVIN B. ALONZO'
    | 'Infrastructure and Construction - ENGR. JAMES B. BUSILAN'
    | 'Goods and Supplies - MR. ELIJAH V. CRUZ'
    | 'Auxiliary, Maintenance and General Services - MR. TERENCE ALFRED ROBERTO A. TEJADA'
  approverName?: string | null
  isEarlyProcurement: boolean
  purpose: string
  comments?: string | null
}
