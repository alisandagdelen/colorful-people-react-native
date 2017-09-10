import * as types from '~/src/actions/types'

export function addMessage(chat, content, sender) {
  return { type: types.ADD_MESSAGE, payload: { chat, content, sender }}
}

export function addMessageSuccess(currentChat, message) {
  return { type: types.ADD_MESSAGE_SUCCESS, payload: { currentChat, message } };
}

export function setTyping(text) {
  return { type: types.TYPING, payload: { text } }
}
