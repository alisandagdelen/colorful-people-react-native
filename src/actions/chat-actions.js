import * as types from '~/src/actions/types'

export const selectChat = name =>
  dispatch => {
    dispatch({ type: types.CHAT_SELECTED, payload: { name } });
    dispatch({ type: types.FETCH_CHAT_MESSAGES, payload: { name } });
  };

export const fetchChatMessagesSuccess = (name, messages) =>
  ({ type: types.FETCH_CHAT_MESSAGES_SUCCESS, payload: { name, messages } });

export const fetchChatMessagesFailure = (err) =>
  ({ type: types.FETCH_CHAT_MESSAGES_FAILURE, payload: { err } });
