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
    deliveryRequirement: faker.lorem.paragraph(),
    warranty: faker.lorem.paragraph(),
    inclusions: faker.lorem.paragraph(),
    prototype: faker.lorem.paragraph(),
    purchaseDate: faker.date.past(),
    status: faker.lorem.word(),
    user: faker.lorem.word(),
    remarks: faker.lorem.paragraph(),
    purchaseRequestItems: [
      {
        itemDescription: faker.lorem.sentences(),
        unitOfMeasure: 'PC',
        quantity: faker.number.int(100),
        unitCost: faker.number.float({ fractionDigits: 2 }),
        totalCost: faker.number.float({ fractionDigits: 2 }),
        remarks: faker.lorem.paragraph(),
      },
      {
        itemDescription: faker.lorem.sentences(),
        unitOfMeasure: 'Box',
        quantity: faker.number.int(100),
        unitCost: faker.number.float({ fractionDigits: 2 }),
        totalCost: faker.number.float({ fractionDigits: 2 }),
        remarks: faker.lorem.paragraph(),
      },
      {
        itemDescription: faker.lorem.sentences(),
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
    ],
  }
  return form as PurchaseRequestControllerInterface
}
