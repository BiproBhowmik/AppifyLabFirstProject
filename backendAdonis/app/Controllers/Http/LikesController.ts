import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Like from 'App/Models/Like'

export default class LikesController {
  public async store({ request }: HttpContextContract) {
    const checkIsLike = Like.query()
      .select('*')
      .where('post_id', request.all().post_id)
      .andWhere('user_id', request.all().user_id)
    // return (await checkIsLike).length
    if ((await checkIsLike).length == 0) {
      let obj = {
        userId: request.all().user_id,
        postId: request.all().post_id,
      }
      await Like.create(obj)
      return true
    } else {
      for await (const iterator of await checkIsLike) {
        await Like.query().where('id', iterator.id).delete()
        return false
      }
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
