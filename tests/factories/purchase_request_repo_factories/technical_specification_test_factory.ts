import { faker } from '@faker-js/faker'
import TechnicalSpecification from '#models/purchase_request_models/technical_specification'

export function TechnicalSpecificationTestFactory() {
  const technicalSpecification = new TechnicalSpecification()
  technicalSpecification.deliveryRequirement = faker.lorem.paragraph()
  technicalSpecification.warranty = faker.lorem.paragraph()
  technicalSpecification.inclusions = faker.lorem.paragraph()
  technicalSpecification.prototype = faker.lorem.paragraph()

  return technicalSpecification
}
