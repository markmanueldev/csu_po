import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'purchase_request_logs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('purchase_request_log_id').notNullable().primary()
      table
        .integer('purchase_request_id')
        .unsigned()
        .references('purchase_requests.purchase_request_id')
        .onDelete('CASCADE')
      table.date('purchase_date').notNullable()
      table.string('user').notNullable()
      table.text('remarks').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
