import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'purchase_request_items'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('purchase_request_item_id').notNullable().primary()
      table
        .integer('purchase_request_id')
        .unsigned()
        .references('purchase_requests.purchase_request_id')
        .onDelete('CASCADE')
      table.string('item_description', 255).notNullable()
      table.enu('unit_of_measure', ['PC', 'Box', 'Set', 'Lot'])
      table.integer('quantity').notNullable()
      table.decimal('unit_cost').notNullable()
      table.decimal('total_cost').notNullable()
      table.text('remarks').nullable()

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
