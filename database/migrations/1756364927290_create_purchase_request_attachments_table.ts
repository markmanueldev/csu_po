import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'purchase_request_attachments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('purchase_request_attachment_id').notNullable().primary()
      table
        .integer('purchase_request_id')
        .unsigned()
        .references('purchase_requests.purchase_request_id')
        .onDelete('CASCADE')
      table.string('file_name', 100).nullable()
      table.string('storage_path', 100).notNullable()
      table.enu('document_type', ['PPMP', 'Price Quotation', 'Supporting Documents']).notNullable()
      table.string('mime_type', 100).notNullable()
      table.dateTime('uploaded_at', { useTz: true }).notNullable().defaultTo(this.now())

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
