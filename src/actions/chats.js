import * as types from '~/src/actions/types'

export function selectChat(name) {
  return (dispatch) => {
    dispatch({ type: types.CHAT_SELECTED, payload: { name } });
    dispatch({ type: types.FETCH_CHAT_MESSAGES, payload: { name } });
  }
}

export const fetchChatMessagesSuccess = (name, messages) =>
  ({ type: types.FETCH_CHAT_MESSAGES_SUCCESS, payload: { name, messages } })
