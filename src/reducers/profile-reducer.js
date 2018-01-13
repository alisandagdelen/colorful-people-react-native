import { PROFILE_SELECT } from '../actions/types/index'
import type { actionType } from '../flow-types';

type initialStateType = {
  nickname: string,
  ppUrl: string,
  colorId: string,
  bio: string,
  updated: boolean,
};

const initialState = {
  nickname: '',
  ppUrl: '',
  colorId: '',
  bio: '',
  updated: false,
};

export default function (state: initialStateType = initialState, action: actionType) {
  const payload = get(action, 'payload', {});

  switch (action.type) {

    case PROFILE_SELECT:
      return {
        ...state,
      };

    case BEGIN_EDITING:
      return {
        ...state,
      };

    case END_EDITING:
      return {
        ...state,
        nickname: payload.data.nickname,
        ppUrl: payload.data.ppUrl,
        colorId: payload.data.colorId,
        bio: payload.data.bio,
        updated: payload.data.updated
      };

    default:
      return state
  }
}