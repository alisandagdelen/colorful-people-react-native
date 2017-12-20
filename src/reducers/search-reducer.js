// @flow

import { get } from 'lodash';
import { types } from '../actions/index';
import type { actionType } from '../flow-types';

type initialStateType = {
  colorId: string,
  selectedColor: string,
  currentChar: string,
  foundUser: ?Object,
}

const initialState = {
  colorId: '',
  selectedColor: '',
  currentChar: '',
  foundUser: null,
};

export default function(state: initialStateType = initialState, action: actionType) {
  const payload = get(action, 'payload', {});

  switch (action.type) {

    case types.SEARCH_SELECT_COLOR:
      return { ...state, selectedColor: payload.color };

    case types.SEARCH_CHANGE_COLOR_ID:
      return { ...state, colorId: payload.colorId };

    case types.SEARCH_FOUND_BY_COLOR_ID:
      return { ...state, foundUser: payload.data };

    default:
      return state
  }
}