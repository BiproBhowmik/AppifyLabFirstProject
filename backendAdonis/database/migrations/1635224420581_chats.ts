import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Chats extends BaseSchema {
  protected tableName = 'chats'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('sender_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE') // delete when post is deleted
        .notNullable()
      table
        .integer('recever_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE') // delete when post is deleted
        .notNullable()
      table.string('post_image', 191).notNullable()
      table.string('unique_id', 191).notNullable()
      table.string('chat_text', 191).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.timestamp('created_at', { useTz: true }).nullable()
       table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
