<template>
  <ChatWindow/>
</template>

<script setup>
import ChatWindow from "../ChatWindow/ChatWindow.vue";
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
