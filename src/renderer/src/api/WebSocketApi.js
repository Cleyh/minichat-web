import store from '../store/store'

class WebSocketApi {
  socket = null
  listeners = []

  connect() {
    store.state.socket = new WebSocket(`ws://${store.state.ROOT_URL}/ws?token=${store.state.token}`)
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
    this.listeners.forEach(callback => callback(data))
  }

  send(message) {
    this.socket.send(message)
  }
}

export default new WebSocketApi()
