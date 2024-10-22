import axios from 'axios'
import store from '../../store/store'

class Request {
  constructor(httpRequest) {
    this.url = httpRequest.url || store.state.ROOT_URL
    this.method = httpRequest.method || 'GET'
    this.params = httpRequest.params || {}
    this.headers = httpRequest.headers || {}
    this.data = httpRequest.data || {}
    this.config = httpRequest.config || {}
  }

  send() {
    console.log(this)

    return axios({
      url: store.state.ROOT_URL + this.url,
      method: this.method,
      params: this.params,
      headers: {
        // authentication: store.state.debug === false ? store.state.user.authentication : store.state.testAuthentication,
        ...this.headers
      },
      data: this.data,
      ...this.config
    }).then((res) => {
      console.log(res)
      return res.data
    })
    //   .catch(err => {
    //     console.log(err)
    //     // if (err.response.status !== 401) {
    //     //   // window.$message.error('网络服务器连接错误，请联系管理员');
    //     //   return Promise.reject(err)
    //     // }
    // });
  }
}

export default Request
