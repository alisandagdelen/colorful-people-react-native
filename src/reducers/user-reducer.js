// @flow

import { get } from 'lodash';
import { types } from '../actions/index';
import type { actionType } from '../flow-types';

type initialStateType = {
  email: string,
  authorized: boolean,
  uid: string,
  colorId: string,
  chats: {
    [chatId: ?string]: boolean
  },
};

const initialState = {
  email: '',
  authorized: false,
  uid: '',
  colorId: '',
  chats: {},
};

export default function(state: initialStateType = initialState, action: actionType) {
  const payload = get(action, 'payload', {});

  switch (action.type) {

    case types.USER_SIGN_UP_SUCCESS:
    case types.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        authorized:true,
        email: payload.data.email,
        chats: payload.data.chats,
        uid: payload.data.uid,
        colorId: payload.data.colorId
      };

    default:
      return state
  }
}