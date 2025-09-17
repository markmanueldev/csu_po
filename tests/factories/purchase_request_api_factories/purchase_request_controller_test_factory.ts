import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'
import validator from 'validator'
import { PurchaseRequestControllerInterface } from '../../../app/contracts/purchase_request_controller_contracts/purchase_request_controller_interface.js'

export function PurchaseRequestFormControllerFactory(): PurchaseRequestControllerInterface {
  const form = {
    requestorName: faker.person.fullName(),
    contactNumber: '09460678123',
    emailAddress: validator.normalizeEmail(faker.internet.email()),
    office: faker.lorem.sentence(),
    unit: faker.lorem.sentence({ min: 1, max: 4 }),
    branch: faker.lorem.sentence(),
    purchaseRequestDate: DateTime.fromJSDate(faker.date.past()).toISODate(),
    budgetClearance: 'Budget and Accounting',
    fundingSource: faker.lorem.sentence(),
    technicalWorkingGroup: 'ICT Equipment - DR. ALVIN B. ALONZO',
    approverName: faker.lorem.sentence(),
    isEarlyProcurement: false,
    purpose: faker.lorem.paragraph(),
    comments: faker.lorem.paragraph(),
    deliveryRequirement: faker.lorem.sentences({ min: 1, max: 2 }),
    warranty: faker.lorem.paragraph(),
    inclusions: faker.lorem.paragraph(),
    prototype: faker.lorem.paragraph(),
    purchaseDate: DateTime.fromJSDate(faker.date.past()).toISODate(),
    status: faker.lorem.word(),
    user: faker.lorem.word(),
    remarks: faker.lorem.paragraph(),
    purchaseRequestItems: [
      {
        itemDescription: faker.lorem.sentences({ min: 1, max: 2 }),
        unitOfMeasure: 'PC',
        quantity: faker.number.int(100),
        unitCost: faker.number.float({ fractionDigits: 2 }),
        totalCost: faker.number.float({ fractionDigits: 2 }),
        remarks: faker.lorem.paragraph(),
      },
      {
        itemDescription: faker.lorem.sentences({ min: 1, max: 2 }),
        unitOfMeasure: 'Box',
        quantity: faker.number.int(100),
        unitCost: faker.number.float({ fractionDigits: 2 }),
        totalCost: faker.number.float({ fractionDigits: 2 }),
        remarks: faker.lorem.paragraph(),
      },
      {
        itemDescription: faker.lorem.sentences({ min: 1, max: 2 }),
        unitOfMeasure: 'Set',
        quantity: faker.number.int(100),
        unitCost: faker.number.float({ fractionDigits: 2 }),
        totalCost: faker.number.float({ fractionDigits: 2 }),
        remarks: faker.lorem.paragraph(),
      },
      {
        itemDescription: faker.lorem.sentences(),
        unitOfMeasure: 'Lot',
        quantity: faker.number.int(100),
        unitCost: faker.number.float({ fractionDigits: 2 }),
        totalCost: faker.number.float({ fractionDigits: 2 }),
        remarks: faker.lorem.paragraph(),
      },
    ],
    purchaseRequestAttachments: [
      {
        fileName: faker.lorem.sentence(),
        storagePath: faker.lorem.sentence(),
        documentType: 'PPMP',
        mimeType: 'pdf',
        uploadedAt: DateTime.fromJSDate(faker.date.past()),
      },
      {
        fileName: faker.lorem.sentence(),
        storagePath: faker.lorem.sentence(),
        documentType: 'Price Quotation',
        mimeType: 'pdf',
        uploadedAt: DateTime.fromJSDate(faker.date.past()),
      },
    ],
  }
  return form as PurchaseRequestControllerInterface
}
