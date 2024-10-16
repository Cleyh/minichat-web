<template>
  <div class="page-main">
    <div class="chat-head glass-pane obscure">
      <span id="chat-title">聊天名称</span>
    </div>
    <n-scrollbar class="chat-window obscure">
      <MessageItem />
    </n-scrollbar>
    <div class="chat-input-tools">
      <n-button circle>
        <n-avatar circle />
      </n-button>
      <n-button circle type="info">
        <n-icon size="large" :component="UserFriends" />
      </n-button>
      <n-divider vertical/>
      <n-button circle type="primary">
        <n-icon size="large" :component="FileMedical" />
      </n-button>
      <n-input placeholder="请输入内容" round />
      <n-button circle type="primary">
        <n-icon size="large" :component="PaperPlane" />
      </n-button>
    </div>
  </div>
</template>

<script setup>
import '../PublicStyle.css'
import { FileMedical, PaperPlane, UserFriends } from '@vicons/fa'
import MessageItem from '../../components/MessageItem/MessageItem.vue'
import './ChatWindow.css'
</script>


<style scoped>

</style>
