import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 191).notNullable().unique()
      table.string('password', 191).notNullable()
      table.string('first_name', 191).notNullable()
      table.string('last_name', 191).notNullable()
      table.string('user_name', 191).notNullable()
      table.string('profile_picture', 191).nullable()
      table.string('gender', 10).nullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
