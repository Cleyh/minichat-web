import Request from '@/api/baseApi/Request'
import store from '../store/store'
import WebSocketApi from './WebSocketApi'

class LoginApi {
  entranceMapping = '/entrance'

  async login(userName, password) {
    return new Request({
      url: this.entranceMapping + '/login',
      method: 'POST',
      data: {
        userName,
        password
      }
    }).send().then(res => {
      if (res.status !== 'success') {
        return false
      }

      store.state.token = res.message
      store.state.user = res.data
      WebSocketApi.connect();
      return true
    })
  }

  async register(userName, password) {
    return new Request({
      url: this.entranceMapping + '/register',
      method: 'POST',
      data: {
        userName,
        password
      }
    }).send().then(res => {
      return res.status === 'success'
    })
  }
}

export default new LoginApi()
