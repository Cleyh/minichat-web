import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      ROOT_URL: '',
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
