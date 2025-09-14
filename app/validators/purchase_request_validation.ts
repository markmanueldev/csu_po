import vine from '@vinejs/vine'

//Make empty form inputs to null
vine.convertEmptyStringsToNull = true

export const purchaseRequestBodyValidator = vine.compile(
  vine.object({
    // Purchase Request Only Properties
    requestorName: vine.string().trim().escape().maxLength(100),
    contactNumber: vine.string().trim().escape().maxLength(11),
    emailAddress: vine
      .string()
      .trim()
      .escape()
      .maxLength(255)
      .email()
      .normalizeEmail({ all_lowercase: true, gmail_remove_dots: true }),
    office: vine.string().trim().escape().maxLength(100),
    unit: vine.string().trim().escape().maxLength(50),
    branch: vine.string().trim().escape().maxLength(100),
    purchaseRequestDate: vine.date(),
    budgetClearance: vine.enum(['Budget and Accounting', 'Accounting Only', 'Budget Only']),
    fundingSource: vine.string().trim().escape().maxLength(100),
    technicalWorkingGroup: vine.enum([
      'ICT Equipment - DR. ALVIN B. ALONZO',
      'Infrastructure and Construction - ENGR. JAMES B. BUSILAN',
      'Goods and Supplies - MR. ELIJAH V. CRUZ',
      'Auxiliary, Maintenance and General Services - MR. TERENCE ALFRED ROBERTO A. TEJADA',
    ]),
    approverName: vine.string().trim().escape().maxLength(100).nullable(),
    isEarlyProcurement: vine.boolean(),
    purpose: vine.string().trim().escape().maxLength(255),
    comments: vine.string().trim().nullable(),
    //Technical Specifications Properties
    deliveryRequirement: vine.string().trim().escape().maxLength(150).nullable(),
    warranty: vine.string().trim().escape().maxLength(255).nullable(),
    inclusions: vine.string().trim().escape().maxLength(255).nullable(),
    prototype: vine.string().trim().escape().maxLength(255).nullable(),
    // Purchase Request Logs Properties
    purchaseDate: vine.date(),
    status: vine.string().trim().escape().maxLength(100),
    user: vine.string().trim().escape().maxLength(150),
    remarks: vine.string().trim().escape().nullable(),
    //Purchase Request Items
    purchaseRequestItems: vine.array(
      vine.object({
        itemDescription: vine.string().trim().escape().maxLength(255),
        unitOfMeasure: vine.enum(['PC', 'Box', 'Set', 'Lot']),
        quantity: vine.number(),
        unitCost: vine.number(),
        totalCost: vine.number(),
        remarks: vine.string().trim().escape().maxLength(255).nullable(),
      })
    ),
  })
)

export const purchaseRequestFileValidator = vine.compile(
  vine.object({
    purchaseRequestAttachments: vine.array(
      vine.object({
        fileName: vine.string().trim().escape().maxLength(100).nullable(),
        storagePath: vine.string().trim().escape(),
        documentType: vine.enum(['PPMP', 'Price Quotation', 'Supporting Documents']),
        mimeType: vine.string().trim().escape().maxLength(100),
        uploadedAt: vine.date(),
      })
    ),
  })
)
