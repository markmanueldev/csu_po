import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import { PurchaseRequestAttachmentTestFactory } from '#tests/factories/purchase_request_attachment_test_factory'
import PurchaseRequestAttachment from '#models/purchase_request_attachment'
import { PurchaseRequestTestFactory } from '#tests/factories/purchase_request_test_factory'
import PurchaseRequest from '#models/purchase_request'
import { DateTime } from 'luxon'

test.group('Add purchase request attachments', (group) => {
  group.each.setup(async () => {
    await testUtils.db().truncate()
  })
  test('Test in inserting the purchase request attachments in the database', async ({ assert }) => {
    const purchaseRequestAttachmentsTest: PurchaseRequestAttachment =
      PurchaseRequestAttachmentTestFactory()
    const purchaseRequestTest: PurchaseRequest = PurchaseRequestTestFactory()

    await purchaseRequestTest.save()

    purchaseRequestAttachmentsTest.purchaseRequestId = purchaseRequestTest.purchaseRequestId

    await purchaseRequestAttachmentsTest.save()

    assert.isNotNull(purchaseRequestTest)
    assert.isNotNull(purchaseRequestAttachmentsTest)
    assert.isNotNull(purchaseRequestAttachmentsTest.purchaseRequestId)
    assert.equal(
      purchaseRequestAttachmentsTest.purchaseRequestId,
      purchaseRequestTest.purchaseRequestId
    )
    assert.equal(purchaseRequestAttachmentsTest.fileName, 'PPMP Sample Attachment')
    assert.equal(purchaseRequestAttachmentsTest.storagePath, 's3://example.com')
    assert.equal(purchaseRequestAttachmentsTest.mimeType, 'pdf')
    assert.deepEqual(
      purchaseRequestAttachmentsTest.uploadedAt,
      DateTime.fromJSDate(new Date(2025, 8, 29, 18, 16, 23))
    )

    assert.isNotNull(
      await PurchaseRequestAttachment.find(
        purchaseRequestAttachmentsTest.purchaseRequestAttachmentId
      )
    )
  })
})
