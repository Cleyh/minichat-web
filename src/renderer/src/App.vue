<template>
  <!--  <login-page/>-->
  <router-view/>
</template>

<script setup>
import LoginPage from './views/LoginPage/LoginPage.vue'
import HomePage from './views/HomePage/HomePage.vue'
import { useRouter } from 'vue-router'
const router = useRouter();
</script>
