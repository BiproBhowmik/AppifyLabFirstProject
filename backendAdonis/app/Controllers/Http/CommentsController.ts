import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comment from 'App/Models/Comment'

export default class CommentsController {
  public async store({ request }: HttpContextContract) {
    let obj = {
      userId: request.all().user_id,
      postId: request.all().post_id,
      comment_text: request.all().comment_text,
    }
    const createdComment = await Comment.create(obj)
    const searchedComment = await Comment.query().where('id', createdComment.id).preload('user')
    .preload('commentReply', (commentsReplyQuery) => {
      commentsReplyQuery.preload('user')

    })
    for await (const iterator of searchedComment) {
      return iterator
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
