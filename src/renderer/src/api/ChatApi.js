import WebSocketApi from './WebSocketApi'
import './baseApi/Request'
import ChatDb from '../db/ChatDb'
import GlobalName from '../utils/GlobalName'
import CommonApi from './CommonApi'

class ChatApi {
  sendChatMessage(message) {
    WebSocketApi.send(message)
  }

  sendChatFiles(files) {
    return new Request({})
  }

  async getChat(userId) {
    // 1.从本地数据库查找与该用户的userId:
    const chat = await ChatDb.getChat(userId)
    console.log('getChat:', chat)
    return chat
  }

  async saveNewMessage(message) {
    if (message.type === GlobalName.CHAT_TYPE_PUBLIC) {
      return await ChatDb.insertChatNewMessage(GlobalName.CHAT_PUBLIC_RECEIVER, message)
    } else {
      return await ChatDb.insertChatNewMessage(message.receiverUserId, message)
    }
  }

  async syncLatestChat() {
    const chats = await CommonApi.getAllUsers()
    let messageMap = {}

    // 遍历消息数组，按 senderUserId 分组
    chats.forEach((chat) => {
      if (!messageMap[chat.senderUserId]) {
        messageMap[chat.senderUserId] = []
      }
      messageMap[chat.senderUserId].push(chat)
    })

    // 将映射对象转换为二维数组
    let groupedMessages = Object.values(messageMap)

    ChatDb.syncChat(groupedMessages)
  }
}

export default new ChatApi()
