
import { safe, compress } from 'raid-addons'

import { actions } from './actions'
import { getRandomMessage } from './messages'
import { config } from './constants'

export const example = safe((state, event) => {
  console.log(event, '::', state)
})

const addMessage = (state, payload) => {
  const newMessage = getRandomMessage()
  const { maxNumMessages } = config

  return {
    ...state,
    messages: state.messages.slice(-maxNumMessages).concat(newMessage)
  }
}

export const messageUpdate = compress({
  [actions.addMessage]: safe(addMessage)
})
