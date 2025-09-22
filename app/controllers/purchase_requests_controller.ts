// import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'
import { PurchaseRequestService } from '#services/purchase_request_service'
import { HttpContext } from '@adonisjs/core/http'
import { Logger } from '@adonisjs/core/logger'
import {
  purchaseRequestBodyValidator,
  purchaseRequestFileValidator,
} from '#validators/purchase_request_validation'
import { errors } from '@vinejs/vine'
import {
  ppmpFileParser,
  priceQuotationFileParser,
  supportingDocumentFileParser,
} from '../helpers/file_attachment_converters.js'
import { DateTime } from 'luxon'
import { PurchaseRequestAttachmentControllerInterface } from '../contracts/purchase_request_controller_contracts/purchase_request_attachment_controller_interface.js'

@inject()
export default class PurchaseRequestsController {
  constructor(
    protected purchaseRequestService: PurchaseRequestService,
    protected logger: Logger
  ) {}

  public async storePurchaseRequest({ request, response }: HttpContext) {
    try {
      //Validate Request Body
      const validateBodyData = await purchaseRequestBodyValidator.validate(request.body())

      //Validate Request Files ** STRICTLY PDF FILES OR DOCUMENT FILES ONLY **
      let mapFilesToAttachment: PurchaseRequestAttachmentControllerInterface[] = []
      const ppmpFile = request.file('ppmp', {
        size: '20mb',
        extnames: ['pdf', 'docx', 'odt', 'doc'],
      })
      const priceQuotationFile = request.file('priceQuotation', {
        size: '20mb',
        extnames: ['pdf', 'docx', 'odt', 'doc'],
      })
      const supportingDocumentFile = request.file('supportingDocumentFile', {
        size: '20mb',
        extnames: ['pdf', 'docx', 'odt', 'doc'],
      })

      if (ppmpFile) {
        mapFilesToAttachment.push(await ppmpFileParser(ppmpFile))
      }
      if (priceQuotationFile) {
        mapFilesToAttachment.push(await priceQuotationFileParser(priceQuotationFile))
      }
      if (supportingDocumentFile) {
        mapFilesToAttachment.push(await supportingDocumentFileParser(supportingDocumentFile))
      }
      const firstValidationFileData = await purchaseRequestFileValidator.validate({
        purchaseRequestAttachments: mapFilesToAttachment,
      })
      const finalValidatedFileData = {
        purchaseRequestAttachments: firstValidationFileData.purchaseRequestAttachments.map(
          (attachment) => ({
            ...attachment,
            uploadedAt: DateTime.fromJSDate(attachment.uploadedAt),
          })
        ),
      }

      const createPurchaseRequestService = await this.purchaseRequestService.createPurchaseRequest(
        Object.assign(validateBodyData, finalValidatedFileData)
      )
      return response.status(201).json(createPurchaseRequestService)
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        this.logger.error(error.messages)
      }
    }
  }
}
