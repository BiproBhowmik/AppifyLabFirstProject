import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import User from 'App/Models/User'
import Comment from 'App/Models/Comment'

export default class CommentReply extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public reply_text: string

  @column()
  public userId: number

  @column()
  public commentId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Comment)
  public comment: BelongsTo<typeof Comment>
}
