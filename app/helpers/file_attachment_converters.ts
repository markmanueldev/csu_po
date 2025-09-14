import { MultipartFile } from '@adonisjs/core/bodyparser'
import { cuid } from '@adonisjs/core/helpers'
import { DateTime } from 'luxon'

type DocumentType = 'PPMP' | 'Price Quotation' | 'Supporting Documents'

export async function FileParser(file: MultipartFile) {
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
