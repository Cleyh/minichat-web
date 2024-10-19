import Request from './baseApi/Request'

class CommonApi {
  async getAllUsers() {
    return new Request({
      url: '/chat/getAllUsers',
      method: 'GET'
    }).send().then(res => {
      return res.data
    })
  }
}

export default new CommonApi()
