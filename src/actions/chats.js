import * as types from '~/src/actions/types'

export function selectChat(name) {
  return { type: types.CHAT_SELECTED, payload: { name } }
}
