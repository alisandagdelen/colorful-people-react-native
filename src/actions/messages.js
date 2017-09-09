import * as types from '~/src/actions/types'

export function addMessage(chat) {
  return { type: types.ADD_MESSAGE, payload: { chat }}
}

export function addMessageSuccess(currentChat) {
  return { type: types.ADD_MESSAGE_SUCCESS, payload: { currentChat } };
}

export function setTyping(text) {
  return { type: types.TYPING, payload: { text } }
}
