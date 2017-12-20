// @flow

import { get } from 'lodash';
import { types } from '../actions/index';
import type { actionType } from '../flow-types';

type initialStateType = {
  username: string,
  password: string
};

const initialState = {
  username: '',
  password: ''
};

export default function(state: initialStateType = initialState, action: actionType) {
  const payload = get(action, 'payload', {});

  switch (action.type) {

    case types.SIGN_UP_CHANGE_USERNAME:
      return { ...state, username: payload.username };

    case types.SIGN_UP_CHANGE_PASSWORD:
      return { ...state, password: payload.password };

    default:
      return state
  }
}