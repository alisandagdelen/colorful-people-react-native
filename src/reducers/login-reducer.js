// @flow

import { get } from 'lodash';
import { types } from '../actions/index';
import type { actionType } from '../flow-types';

type initialStateType = {
  username: string,
  password: string,
  signInButtonText: string,
};

export const defaults = {
  signInButtonText: 'Sign In'
};

const initialState = {
  username: '',
  password: '',
  signInButtonText: defaults.signInButtonText,
};

export default function(state: initialStateType = initialState, action: actionType) {
  const payload = get(action, 'payload', {});

  switch (action.type) {

    case types.LOGIN_CHANGE_USERNAME:
      return { ...state, username: payload.username };

    case types.LOGIN_CHANGE_PASSWORD:
      return { ...state, password: payload.password };

    case types.LOGIN_CHANGE_SIGN_IN_BUTTON_TEXT:
      return { ...state, signInButtonText: payload.text };

    case types.LOGIN_SUCCESS:
      return { ...state, signInButtonText: defaults.signInButtonText };

    default:
      return state
  }
}