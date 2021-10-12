import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CommentReply from 'App/Models/CommentReply'
export default class CommentRepliesController {
  public async store({ request }: HttpContextContract) {
    let obj = {
      userId: request.all().user_id,
      commentId: request.all().comment_id,
      reply_text: request.all().reply_text,
    }
    const createdCommentReply = await CommentReply.create(obj)
    const searchedCommentReply = await CommentReply.query().where('id', createdCommentReply.id)
    .preload('user')
    for await (const iterator of searchedCommentReply) {
      return iterator
    }
  }
}
