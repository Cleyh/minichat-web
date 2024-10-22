import Dexie from 'dexie'
import store from '../store/store'

export let db = null

export function initDb() {
  db = new Dexie(store.state.user.userId)
  db.version(1).stores({
    // 聊天窗口
    chats: '++id, userId',
    // 聊天记录
    chatMessages: '++id, chatId, message'
  })
}
