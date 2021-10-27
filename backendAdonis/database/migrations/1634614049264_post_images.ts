import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PostImages extends BaseSchema {
  protected tableName = 'post_images'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('post_id')
        .unsigned()
        .references('posts.id')
        .onDelete('CASCADE') // delete when post is deleted
        .notNullable()
      table.string('post_image', 191).notNullable()

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
