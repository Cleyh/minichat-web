import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      ROOT_URL: '',
      token: ''
    }
  }
})

export default store