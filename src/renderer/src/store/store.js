import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      SOCKET_URL: 'ws://localhost:8080/ws',
      ROOT_URL: 'http://localhost:8080',
      token: '',
      user:{
        userId: '',
        userName: '',
      },
      socket: null,
    }
  }
})

export default store
