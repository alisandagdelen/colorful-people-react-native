import * as types from '~/src/actions/types'

export function getChatMessages(from) {
  return { type: types.GET_CHANNEL_MESSAGES, payload: { from } }
}

export function addMessage(chat) {
  return { type: types.ADD_MESSAGE, payload: { chat }}
}

export function setTyping(text) {
  return { type: types.TYPING, payload: { text } }
}
