import { faker } from '@faker-js/faker'
import { PurchaseRequestAPIInterface } from '../../../app/contracts/purchase_request_contracts/purchase_request_api_interface.js'
import { DateTime } from 'luxon'
import { normalizeEmail } from 'validator'

export function PurchaseRequestFormFactory(): PurchaseRequestAPIInterface {
  const form = {
    requestorName: faker.person.fullName(),
    contactNumber: '09460678123',
    emailAddress: normalizeEmail(faker.internet.email()),
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
  }
  return form as PurchaseRequestAPIInterface
}
