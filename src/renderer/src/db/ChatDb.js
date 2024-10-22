import { db } from '../utils/DataStore'

class ChatDb {
  async getChat(userId) {
    const chat = await db.chats.where({ userId: userId }).first()
    if (!chat) {
      return []
    }
    const messages = await db.chatMessages
      .where('chatId')
      .equals(chat.userId)
      .orderBy('message.timeStamp')
      .toArray()
    return messages.map((m) => m.message)
  }

  async insertChatNewMessage(userId, message) {
    let chat = await db.chats.where({ userId: userId }).first()
    if (!chat) {
      const chatId = await db.chats.add({ userId: userId })
      chat = { id: chatId, userId: userId }
    }
    await db.chatMessages.add({ chatId: chat.userId, message: message })
  }

  async syncChat(groupedMessages) {
    groupedMessages.forEach((messages) => {
      db.chatMessages.bulkAdd(messages)
    })
  }
}

export default new ChatDb()
