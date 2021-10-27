import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import { schema } from '@ioc:Adonis/Core/Validator'
// import Application from '@ioc:Adonis/Core/Application'

import Post from 'App/Models/Post'
import PostImage from 'App/Models/PostImage'
import Drive from '@ioc:Adonis/Core/Drive'

export default class PostsController {
  public async store({ request }: HttpContextContract) {
    let postObj = {
      post_text: request.all().post_text,
      user_id: request.all().user_id,
    }

    return Post.create(postObj)
  }

  public async show({}: HttpContextContract) {
    return Post.query()
      .preload('user')
      .preload('like')
      .preload('comment', (commentsQuery) => {
        commentsQuery.preload('user')
        commentsQuery.preload('commentReply', (commentsReplyQuery) => {
          commentsReplyQuery.preload('user')
        })
      })
      .preload('postImage')
      .orderBy('id', 'desc')
  }
  
  public async showAllPostsByUser({request}: HttpContextContract) {
    return Post.query()
      .preload('user')
      .preload('like')
      .preload('comment', (commentsQuery) => {
        commentsQuery.preload('user')
        commentsQuery.preload('commentReply', (commentsReplyQuery) => {
          commentsReplyQuery.preload('user')
        })
      })
      .preload('postImage')
      .orderBy('id', 'desc')
      .where('user_id', request.all().id)
  }


  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({request}: HttpContextContract) {
    
    let data = request.all()

    for await (const iterator of data.postImage) {
      // return iterator.post_image
      await Drive.delete(iterator.post_image)
    }
    
    return Post.query().where('id', data.id).delete()
  }
}
