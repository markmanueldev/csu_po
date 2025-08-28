import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'purchase_requests'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('purchase_request_id').primary().notNullable()
      table.string('purchase_request_number', 50).notNullable()
      table.string('requestor_number', 100).notNullable()
      table.string('contact_number', 20).notNullable()
      table.string('email_address', 255).notNullable().unique()
      table.string('office', 100).notNullable()
      table.string('unit', 50).notNullable()
      table.string('branch', 100).notNullable()
      table.date('purchase_request_date').notNullable()
      table
        .enu('budget_clearance', ['Budget and Clearance', 'Accounting Only', 'Budget Only'])
        .notNullable()
      table.string('funding_source', 100).notNullable()
      table.string('technical_working_group', 150).notNullable()
      table.string('purchaser_name', 100).nullable()
      table.string('approver_name', 100).nullable()
      table.boolean('is_early_procurement')
      table.string('purpose', 255).notNullable()
      table.text('comments').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
