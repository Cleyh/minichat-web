<template>
  <div id="login-page">
    <div v-if="registerMode !== true" class="obscure glass" style="width: 60%">
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
      <n-divider vertical />
      <n-button type="tertiary" text @click="switchMode">没有账号？前往注册</n-button>
    </div>

    <div v-else class="obscure glass" style="width: 60%">
      <n-h1>
        请注册
      </n-h1>
      <n-form>
        <n-form-item label="用户名">
          <n-input v-model="userName" placeholder="请输入用户名" />
        </n-form-item>
        <n-form-item label="密码">
          <n-input v-model="password" type="password" placeholder="请输入密码" />
        </n-form-item>
      </n-form>
      <n-button type="primary" @click="login">注册</n-button>
      <n-divider vertical />
      <n-button type="tertiary" text @click="switchMode">有账号了，前往登录</n-button>
    </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import './LoginPage.css'
import LoginApi from '../../api/LoginApi'

const router = window.$router
const route = window.$route

const registerMode = ref(false)

const userName = ref('')
const password = ref('')

onMounted(() => {
  if (route.query.onRegister === 'true') {
    registerMode.value = true
  }
})

function login() {
  if (userName.value.length === 0 || password.value.length === 0) {
    alert('用户名或密码不能为空')
    return
  }

  LoginApi.login(userName.value, password.value).then(res => {
    if (!res) {
      alert('密码或者账号错误')
      return
    }
    router.replace('/')
  })
}

function register() {
  if (userName.value.length === 0 || password.value.length === 0) {
    alert('用户名或密码不能为空')
    return
  }
  LoginApi.register(userName.value, password.value).then(res => {
    if (!res) {
      alert('用户名已存在')
      return
    }
    alert('注册成功')
    switchMode()
  })
}

function switchMode() {
  userName.value = ''
  password.value = ''
  registerMode.value = !registerMode.value
}
</script>

<style scoped>
#login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
