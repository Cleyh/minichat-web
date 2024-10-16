<template>
  <div class="obscure glass" style="width: 60%">
    <n-h1>
      请登录
    </n-h1>
    <n-form>
      <n-form-item label="用户名">
        <n-input v-model="userName" placeholder="请输入用户名" />
      </n-form-item>
      <n-form-item label="密码">
        <n-input v-model="password" type="password" placeholder="请输入密码" />
      </n-form-item>
    </n-form>
    <n-button type="primary" @click="login">登录</n-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import "./LoginPage.css"
import LoginApi from '../../api/LoginApi'

const userName = ref('')
const password = ref('')

function login() {
  if (userName.value.length === 0 || password.value.length === 0) {
    alert('用户名或密码不能为空')
    return
  }

  LoginApi.login(userName.value, password.value).then(res => {
    if (res) {
      alert('登录成功')
    }
  })
}
</script>

<style scoped>

</style>
