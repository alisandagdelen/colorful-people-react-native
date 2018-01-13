import {PROFILE_SELECT} from '../actions/types/index'
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

  export default function(state: initialStateType = initialState, action: actionType) {
    const payload = get(action, 'payload', {});
  
    switch (action.type) {
  
      case PROFILE_SELECT:
        return {
          ...state,
        }
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