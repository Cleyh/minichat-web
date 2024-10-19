<template>
  <div class="page-main">
    <div class="chat-head glass-pane obscure">
      <span id="chat-title">{{ chatInfo.userName }}</span>
      <!--      <n-button circle type="info">-->
      <!--        <n-icon :component="Link" size="large" />-->
      <!--      </n-button>-->
    </div>
    <n-scrollbar class="chat-window obscure">
      <MessageItem v-for="message in processedChatMessages"
                   :key="message.timeStamp"
                   :message="message" />
      <div class="chat-window-placeholder" />
    </n-scrollbar>

  </div>
</template>

<script setup>
import '../PublicStyle.css'
import { FileMedical, PaperPlane, UserFriends, Link } from '@vicons/fa'
import MessageItem from '../../components/MessageItem/MessageItem.vue'
import './ChatWindow.css'
import { computed, ref } from 'vue'

const props = defineProps({
  publicChat: {
    default: false
  },
  usersInfo: {
    default: {}
  }
})

const chatMessages = defineModel('messages', { default: [] })
const chatInfo = defineModel('chatInfo', {
  default: {
    userName: '请选择聊天',
    userId: ''
  }
})

const processedChatMessages = computed(() => {
  return chatMessages.value.map(chatMessage => {
    let sendUser = props.usersInfo.find(user => user.userId === chatMessage.senderUserId)
    if (!props.publicChat) {
      return {
        content: chatMessage.message,
        sendTime: `${new Date(chatMessage.timeStamp).toLocaleDateString()} ${new Date(chatMessage.timeStamp).toLocaleTimeString()}`,
        senderName: chatMessage.senderUserId !== chatInfo.value.userId ? '我' : chatInfo.value.userName
      }
    } else {
      return {
        content: chatMessage.message,
        sendTime: `${new Date(chatMessage.timeStamp).toLocaleDateString()} ${new Date(chatMessage.timeStamp).toLocaleTimeString()}`,
        // senderName: props.usersInfo.find(user => user.userId === chatMessage.senderUserId)
        senderName: sendUser?.userName || '系统'
      }
    }
  })
})

</script>


<style scoped>

</style>
