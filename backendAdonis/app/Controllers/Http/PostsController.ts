import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import { schema } from '@ioc:Adonis/Core/Validator'
// import Application from '@ioc:Adonis/Core/Application'

import Post from 'App/Models/Post'

export default class PostsController {
  public async store({ request }: HttpContextContract) {
    // const profileImage = request.file('profile_picture')

    // var imageName = ''

    // if (!profileImage) {
    //   imageName = ''
    // } else {
    //   imageName = Math.random().toString()
    //   await profileImage.move(Application.publicPath('profilePictures'), {
    //     name: imageName,
    //   })
    // }

    /**
     * Schema definition
     */
    // const newPostSchema = schema.create({
    //   email: schema.string({ trim: true }),
    // })

    // const payload = await request.validate({
    //   schema: newPostSchema,
    //   messages: {
    //     'email.required': 'Email is Required',
    //   },
    // })

    //const hashedPassword = await Hash.make(payload.password)

    let obj = {
      post_text: request.all().post_text,
      user_id: request.all().user_id,
    }
    return Post.create(obj)
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
      .orderBy('id', 'desc')
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
