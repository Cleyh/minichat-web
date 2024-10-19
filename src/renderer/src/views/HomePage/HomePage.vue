<template>
  <ChatWindow v-model:messages="messageList"
              :chat-info="currentChat"
              :users-info="userInfoList"
              :public-chat="isPublicChat" />
  <div class="chat-input-tools">
    <n-button circle>
      <n-avatar circle />
    </n-button>

    <!-- 选择聊天 -->
    <n-popselect trigger="click"
                 :options="userOptions"
                 :render-label="renderOptions"
                 :value="currentChat.userId"
                 @update-value="selectChat">
      <n-button circle type="info">
        <n-icon size="large" :component="UserFriends" />
      </n-button>
    </n-popselect>

    <n-divider vertical />
    <n-button circle type="primary">
      <n-icon size="large" :component="FileMedical" />
    </n-button>
    <n-input placeholder="请输入内容" round v-model:value="sendContent" />
    <n-button circle type="primary" @click="send">
      <n-icon size="large" :component="PaperPlane" />
    </n-button>
  </div>
</template>

<script setup>
import ChatWindow from '../ChatWindow/ChatWindow.vue'
import './HomePage.css'
import { FileMedical, PaperPlane, UserFriends } from '@vicons/fa'
import { computed, onMounted, ref } from 'vue'
import ChatApi from '../../api/ChatApi'
import { renderOptions } from './HomePage'
import WebSocketApi from '../../api/WebSocketApi'
import CommonApi from '../../api/CommonApi'
import GlobalName from '../../utils/GlobalName'

const currentChat = ref({
  userId: GlobalName.CHAT_PUBLIC_RECEIVER,
  userName: '全局聊天'
})
const messageList = ref([
  {
    senderUserId: 'name',
    receiverUserId: 'name',
    timeStamp: Date.now(),
    message: 'hello world'
  }
])
const isPublicChat = ref(false)
const userInfoList = ref([])
const sendContent = ref('')

onMounted(() => {
  // 获取所有用户信息
  CommonApi.getAllUsers().then(res => {
    userInfoList.value = res
  })
  // 注册消息监听
  WebSocketApi.addMessageListener(message => onReceiveNewMessage(JSON.parse(message)))
})


const userOptions = computed(() => {
  let userOptions = []
  userOptions.push({
    value: GlobalName.CHAT_PUBLIC_RECEIVER,
    userName: '全局聊天'
  })
  userInfoList.value.map(userInfo => {
    userOptions.push({
      value: userInfo.userId,
      userName: userInfo.userName
    })
  })
  return userOptions
})

function selectChat(value, option) {
  currentChat.value.userId = value
  if (value === GlobalName.CHAT_PUBLIC_RECEIVER) {
    isPublicChat.value = true
    currentChat.value.userName = '全局聊天'
  } else {
    isPublicChat.value = false
    currentChat.value.userName = option.userName
  }
  console.log('options:', currentChat.value)
}

function send() {
  if (sendContent.value.length <= 0) {
    window.$message.warning('请输入内容')
    return
  }

  const clientMessage = {
    type: '',
    timeStamp: null,
    receiveUserId: currentChat.value.userId,
    message: sendContent.value
  }

  if (currentChat.value.userId === GlobalName.CHAT_PUBLIC_RECEIVER) {
    clientMessage.type = GlobalName.CHAT_TYPE_PUBLIC
  } else {
    clientMessage.type = GlobalName.CHAT_TYPE_PRIVATE
  }

  clientMessage.timeStamp = Date.now()

  ChatApi.sendChatMessage(clientMessage)
  sendContent.value = ''
}

function onReceiveNewMessage(message) {
  if (message.type === GlobalName.CHAT_TYPE_PUBLIC) {
    ChatApi.receiveNewPublicMessage(message)
  } else {
    ChatApi.receiveNewMessage(message)
  }
  console.log(message.receiveUserId, currentChat.value.userId)
  if (message.receiveUserId === currentChat.value.userId) {
    messageList.value.push(message)
    console.log(message)
  }
}
</script>

<style scoped>
.main-window {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 7fr;
}

.main-content {
  overflow: hidden;
}

.main-side-bar {
  background-color: #ffffff;
}
</style>
