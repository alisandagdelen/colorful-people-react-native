// @flow

import { get } from 'lodash';
import { types } from '../actions/index';
import type { actionType } from '../flow-types';


type initialStateType = {
  typing: string,
  data: {
    [chatId: string]: Array<{
      chatUid: string,
      content: string,
      key: string,
      sender: string,
      to: string
    }>
  },
};

const initialState = {
  typing: '',
  data: {},
};

const addMessage = (prevState: initialStateType, { chatUid, message }) => {
  const { data } = prevState;

  const newChat = [...data[chatUid]];
  newChat.push(message);

  return { ...data, [chatUid]: newChat };
};


export default function (state: initialStateType = initialState, action: actionType) {
  const payload = get(action, 'payload', {});

  switch (action.type) {

    case types.MESSAGE_SET_TYPING:
      return { ...state, typing: payload.text };

    case types.MESSAGE_ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        data: addMessage(state, payload)
      };

    case types.CHAT_FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        data: { ...state.data, [payload.name]: payload.messages }
      };

    case types.CHAT_FETCH_MESSAGE_SUCCESS:
      const newMessages = state.data[payload.name] ? [...state.data[payload.name]] : [];
      if (!newMessages.find((m: Object) => m.key === payload.message.key)) {
        newMessages.push(payload.message);
      }
      return { ...state, data: { ...state.data, [payload.name]: newMessages } };

    default:
      return state
  }
}