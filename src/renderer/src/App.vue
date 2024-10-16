<template>
  <!--  <login-page/>-->
  <n-message-provider>
    <UtilsWindow>
      <router-view />
    </UtilsWindow>
  </n-message-provider>
</template>

<script setup>
import LoginPage from './views/LoginPage/LoginPage.vue'
import HomePage from './views/HomePage/HomePage.vue'
import { useRouter } from 'vue-router'
import UtilsWindow from './components/UtilsWindow.vue'

const router = useRouter()
</script>
