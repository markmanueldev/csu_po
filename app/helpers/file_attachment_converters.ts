import { MultipartFile } from '@adonisjs/core/bodyparser'
import { cuid } from '@adonisjs/core/helpers'
import { DateTime } from 'luxon'

type DocumentType = 'PPMP' | 'Price Quotation' | 'Supporting Documents'

export async function ppmpFileParser(file: MultipartFile) {
  const path = `uploads/${cuid()}.${file.extname}`
  await file.moveToDisk(path)
  return {
    fileName: file.clientName,
    storagePath: path,
    documentType: 'PPMP' as DocumentType,
    mimeType: file.type + '/' + file.subtype,
    uploadedAt: DateTime.now(),
  }
}

export async function priceQuotationFileParser(file: MultipartFile) {
  const path = `uploads/${cuid()}.${file.extname}`
  await file.moveToDisk(path)
  return {
    fileName: file.clientName,
    storagePath: path,
    documentType: 'Price Quotation' as DocumentType,
    mimeType: file.type + '/' + file.subtype,
    uploadedAt: DateTime.now(),
  }
}

export async function supportingDocumentFileParser(file: MultipartFile) {
  const path = `uploads/${cuid()}.${file.extname}`
  await file.moveToDisk(path)
  return {
    fileName: file.clientName,
    storagePath: path,
    documentType: 'Supporting Documents' as DocumentType,
    mimeType: file.type + '/' + file.subtype,
    uploadedAt: DateTime.now(),
  }
}
