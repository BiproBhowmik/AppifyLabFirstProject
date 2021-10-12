import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import User from 'App/Models/User'
import Like from 'App/Models/Like'
import Comment from 'App/Models/Comment'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public post_text: string

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Like)
  public like: HasMany<typeof Like>

  @hasMany(() => Comment)
  public comment: HasMany<typeof Comment>
}