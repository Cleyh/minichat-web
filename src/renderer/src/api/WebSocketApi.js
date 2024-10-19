import store from '../store/store'

class WebSocketApi {
  socket = null
  listeners = []

  connect() {
    store.state.socket = new WebSocket(`${store.state.SOCKET_URL}?token=${store.state.token}`)
    this.socket = store.state.socket
    this.socket.onopen = () => {
      console.log('WebSocket connected')
    }

    this.socket.onclose = () => {
      console.log('WebSocket closed')
    }

    this.socket.onmessage = (event) => {
      console.log('WebSocket message:', event.data)
      this.notifyListeners(event.data)
    }
  }

  addMessageListener(callback) {
    this.listeners.push(callback)
  }

  notifyListeners(message) {
    this.listeners.forEach(callback => callback(message))
  }

  send(message) {
    let strMessage = JSON.stringify(message)
    this.socket.send(strMessage)
  }
}

export default new WebSocketApi()
