import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Chat from 'App/Models/Chat';

export default class ChatsController {

  public async store({ request }: HttpContextContract) {

    var sender_id = request.input('sender_id')
    var recever_id = request.input('recever_id')

    if(request.input('sender_id')<request.input('recever_id'))
    {
      var smallId = sender_id.toString();
      var bigId = recever_id.toString();
    }
    else{
      var smallId = recever_id.toString();
      var bigId = sender_id.toString();
    }

    var uniqueKey = smallId + bigId

    // return uniqueKey

    let obj = {
      senderId: sender_id,
      receverId: recever_id,
      unique_id: uniqueKey,
      chat_text: request.all().chat_text,
    }

    return Chat.create(obj)
  }

  public async show({request}: HttpContextContract) {
    var sender_id = request.input('sender_id')
    var recever_id = request.input('recever_id')

    if(request.input('sender_id')<request.input('recever_id'))
    {
      var smallId = sender_id.toString();
      var bigId = recever_id.toString();
    }
    else{
      var smallId = recever_id.toString();
      var bigId = sender_id.toString();
    }

    var uniqueKey = smallId + bigId

    return Chat.query().where('unique_id', uniqueKey)
  }
  public async createSession({request, session}: HttpContextContract) {
    session.put('userProfileInfo', request.all());
  }

  
  public async getSession({session}: HttpContextContract) {

    
    return session.get('userProfileInfo')
  }


}
