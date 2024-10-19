import WebSocketApi from './WebSocketApi'
import './baseApi/Request'

class ChatApi {

  sendChatMessage(message) {
    WebSocketApi.send(message)
  }

  sendChatFiles(files) {
    return new Request({})
  }

  getChat(userId) {
    // 1.从本地数据库查找与该用户的userId:

    // 2.序列化消息
    const chatMessage = []
  }

  receiveNewMessage(message) {
    // 1.调取该聊天的本地数据库，序列化or不进行
    // 2.将message插入到数据库末尾
    // 3.回调主界面的刷新函数
  }

  receiveNewPublicMessage(message) {
    // 1.调取全局聊天文件
    // 2.将message插入到末尾
    // 3.回调更新
  }
}

export default new ChatApi()
