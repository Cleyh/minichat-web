<template>
  <div class="message-item">
    <div class="message-sender">
      <div class="sender-avatar">
        <n-avatar size="small" round :color="'#558dff'">
          <n-icon :component="User" size="16" />
        </n-avatar>
      </div>
      <div class="message-sender-info">
        <div id="sender-name">
          {{ props.message.senderName }}
        </div>
        <div id="send-time">
          {{ props.message.sendTime }}
        </div>
      </div>
    </div>
    <div class="message-content">
      <div></div>
      <div class="message-text">{{ props.message.content }}</div>
    </div>
  </div>
</template>

<script setup>
import './MessageItem.css'

import { User } from '@vicons/fa'

const props = defineProps({
  message: {
    default: {
      senderName: '发送人姓名',
      sendTime: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      content: '聊天消息内容聊天消息内容聊天消息内容聊天消息内容聊天消息内容'
    }
  }
})

// const message = defineModel('message')
</script>

<style scoped></style>
