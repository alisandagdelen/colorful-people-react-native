import { types } from '../actions/index'
import _ from 'lodash';
import type { actionType } from '../flow-types';

type initialStateType = {
  nickname: string,
  ppUrl: string,
  colorId: string,
  bio: string,
};

const initialState = {
  nickname: '',
  ppUrl: '',
  colorId: '',
  bio: '',
};

export default function (state: initialStateType = initialState, action: actionType) {
  const payload = _.get(action, 'payload', {});

  switch (action.type) {

    case types.PROFILE_SELECT:
      return { ...state };

    case types.PROFILE_BEGIN_EDITING:
      return { ...state };

    case types.PROFILE_END_EDITING:
      return {
        ...state,
        nickname: payload.data.nickname,
        ppUrl: payload.data.ppUrl,
        colorId: payload.data.colorId,
        bio: payload.data.bio,
      };

    default:
      return state
  }
}