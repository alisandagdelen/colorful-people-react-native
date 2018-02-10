// @flow

import { get } from 'lodash';
import { types } from '../actions/index';
import type { actionType } from '../flow-types';

type initialStateType = {
  currentChatId: ?string,
  otherUserEmail: ?string,
  data: {
    [chatId: string]: {
      name: string,
      otherUserEmail: string,
      uid: string,
      lastMessage: string,
      lastMessageTime: string,
    }
  },
};

const initialState: initialStateType = {
  currentChatId: null,
  otherUserEmail: null,
  data: {},
};

export default function (state: initialStateType = initialState, action: actionType) {
  const payload = get(action, 'payload', {});

  switch (action.type) {

    case types.USER_FETCH_CHATS_SUCCESS:
      return { ...state, data: payload.data };

    case types.USER_FETCH_CHAT_SUCCESS:
      return {
        ...state,
        data: { ...state.data, [payload.data.uid]: payload.data }
      };

    case types.CHAT_SELECTED:
      return {
        ...state,
        currentChatId: payload.uid,
        otherUserEmail: payload.otherUserEmail
      };

    case types.SEARCH_START_CHAT_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.chatData.uid]: { ...payload.chatData }
        }
      };

    default:
      return state
  }
}