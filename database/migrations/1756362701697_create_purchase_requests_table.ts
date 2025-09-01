import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'purchase_requests'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('purchase_request_id').primary().notNullable()
      table.string('requestor_name', 100).notNullable()
      table.string('contact_number', 20).notNullable()
      table.string('email_address', 255).notNullable().unique()
      table.string('office', 100).notNullable()
      table.string('unit', 50).notNullable()
      table.string('branch', 100).notNullable()
      table.date('purchase_request_date').notNullable()
      table
        .enu('budget_clearance', ['Budget and Accounting', 'Accounting Only', 'Budget Only'])
        .notNullable()
      table.string('funding_source', 100).notNullable()
      table
        .enu('technical_working_group', [
          'ICT Equipment - DR. ALVIN B. ALONZO',
          'Infrastructure and Construction - ENGR. JAMES B. BUSILAN',
          'Goods and Supplies - MR. ELIJAH V. CRUZ',
          'Auxiliary, Maintenance and General Services - MR. TERENCE ALFRED ROBERTO A. TEJADA',
        ])
        .notNullable()
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
