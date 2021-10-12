import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'
import Hash from '@ioc:Adonis/Core/Hash'

import User from 'App/Models/User'

export default class UsersController {
  public async store({ request }: HttpContextContract) {
    const profileImage = request.file('profile_picture')

    var imageName = ''

    if (!profileImage) {
      imageName = ''
    } else {
      imageName = Math.random().toString()
      await profileImage.move(Application.publicPath('profilePictures'), {
        name: imageName,
      })
    }

    /**
     * Schema definition
     */
    const newPostSchema = schema.create({
      email: schema.string({ trim: true }),
      password: schema.string({}),
      first_name: schema.string({ trim: true }),
      last_name: schema.string({ trim: true }),
      user_name: schema.string({ trim: true }),
    })

    const payload = await request.validate({
      schema: newPostSchema,
      messages: {
        'email.required': 'Email is Required',
        'password.required': 'password is Required',
        'first_name.required': 'first_name is Required',
        'last_name.required': 'last_name is Required',
        'user_name.required': 'user_name is Required',
      },
    })

    //const hashedPassword = await Hash.make(payload.password)

    let obj = {
      email: payload.email,
      password: payload.password,
      first_name: payload.first_name,
      last_name: payload.last_name,
      user_name: payload.user_name,
      profile_picture: 'profilePictures/' + imageName,
      gender: request.all().gender,
    }
    return User.create(obj)
  }

  public async show({}: HttpContextContract) {
    return User.query().select('*')
  }

  public async updateTypeName({ request }: HttpContextContract) {
    let data = request.all()
    return User.query().where('id', data.id).update({
      type_name: data.type_name,
    })
  }

  public async increseIncomeAmount({ request }: HttpContextContract) {
    let data = request.all()
    return User.query().where('id', data.id).update({
      amount: data.amount,
    })
  }

  public async destroy({ request }: HttpContextContract) {
    let data = request.all()
    return User.query().where('id', data.id).delete()
  }

  async getSingleUser({ params }: HttpContextContract) {
    return User.query().select('*').where('id', params.id).first()
  }
  async getUser({ auth }: HttpContextContract) {
    return auth.use('web').authenticate()
  }

  async checkToLogin({ request, auth, response }: HttpContextContract) {
    let data = request.all()

    // Lookup user manually
    const user = await User.query().where('email', data.email).firstOrFail()

    // Verify password
    if (!(await Hash.verify(user.password, data.password))) {
      return response.badRequest('Invalid credentials')
    }

    // Create session
    await auth.use('web').login(user)

    return user

    //   try {
    //     await auth.use('web').attempt(data.email, data.password)
    //     // Create session
    // await auth.use('web').login(user)
    //     return true
    //   } catch {
    //     return false
    //   }
    //return data
    // const hashedPassword = Hash.needsReHash(data.password)
    // return User.query()
    //   .select('*')
    //   .where('email', data.email)
    //   .andWhere('password', hashedPassword)
    //   .first()
  }
}
