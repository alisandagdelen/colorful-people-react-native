import * as types from '~/src/actions/types'

export function getChannelMessages(from) {
  return { type: types.GET_CHANNEL_MESSAGES, payload: { from } }
}

export function addMessage(from, content) {
  return { type: types.ADD_MESSAGE, payload: { from, content }}
}