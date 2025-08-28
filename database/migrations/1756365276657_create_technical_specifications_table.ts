import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'technical_specifications'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('technical_specification_id').notNullable().primary()
      table
        .integer('purchase_request_id')
        .unsigned()
        .references('purchase_requests.purchase_request_id')
        .onDelete('CASCADE')
      table.string('delivery_requirement', 150).nullable()
      table.string('warranty', 255).nullable()
      table.string('inclusions', 255).nullable()
      table.string('prototype', 255).nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
