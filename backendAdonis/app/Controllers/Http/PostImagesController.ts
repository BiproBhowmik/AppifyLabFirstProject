import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostImage from 'App/Models/PostImage'
import Application from '@ioc:Adonis/Core/Application'
export default class PostImagesController {
    
    public async store({ request }: HttpContextContract)
    {
        const postImage = request.file('files')

        var imageName = ''

    if (!postImage) {
      imageName = ''
    } else {
      // return postImage
      imageName = Math.random().toString() +"."+ postImage.extname
      await postImage.move(Application.publicPath('uploads/postImages'), {
        name: imageName,
      })

      let postImageobj = {
        post_id: request.all().post_id,
        post_image: 'postImages/' + imageName,
      }
  
      return PostImage.create(postImageobj)
    }

}
}
