import { h } from 'vue'
import { NAvatar, NTag } from 'naive-ui'
import ChatApi from '../../api/ChatApi'

export const renderOptions = (option) => {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: '5px',
        padding: '5px'
      }
    },
    [
      h(
        NAvatar,
        {
          circle: true,
          size: 'small'
        },
        option.userName.substring(0, 1)
      ),
      h('span', option.userName)
    ]
  )
}

let userChatList = []

function onReceiveChatMessage(message) {
  if (message.type === 'chat') {
    ChatApi.receiveNewMessage(message)
  } else if (message.type === 'publicChat') {
    ChatApi.receiveNewPublicMessage(message)
  }
}
