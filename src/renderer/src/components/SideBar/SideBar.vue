<template>
  <div class="side-bar-main">
    <div>
      <n-h1>
        MiniChat
      </n-h1>
    </div>
    <div class="chat-list">
      <div class="friend-info">
        <n-avatar circle size="large"/>
        <div class="friend-name">
          123
        </div>
      </div>
    </div>
    <n-divider/>
    <div class="side-setting-tools">
      <n-button circle size="large">
        <n-icon :component="UserFriends"/>
      </n-button>
      <n-avatar circle size="large"/>
    </div>
  </div>
</template>

<script setup>
import "@/components/SideBar/SideBar.css"
import {UserFriends} from "@vicons/fa";
</script>

<style scoped>

</style>