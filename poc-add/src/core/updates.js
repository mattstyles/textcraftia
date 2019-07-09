
import { safe, compress } from 'raid-addons'

import { actions } from './actions'
import { getRandomMessage } from './messages'

export const example = safe((state, event) => {
  console.log(event, '::', state)
})

const addMessage = (state, payload) => {
  const newMessage = getRandomMessage()

  return {
    ...state,
    messages: state.messages.concat(newMessage)
  }
}

export const messageUpdate = compress({
  [actions.addMessage]: safe(addMessage)
})
