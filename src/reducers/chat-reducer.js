import { types } from '../actions/index'

const initialState = {
  currentChat: null,
  data: {},
};

export default function(state = initialState, action) {
  switch(action.type) {

    case types.USER_FETCH_CHATS_SUCCESS:
      return { ...state, data: action.payload.data };

    case types.USER_FETCH_CHAT_SUCCESS:
      return { ...state, data: { ...state.data, [action.payload.data.uid]: action.payload.data } };

    case types.CHAT_SELECTED:
      return { ...state, currentChat: action.payload.uid };

    case types.SEARCH_START_CHAT_SUCCESS:
      return {
        ...state,
        data: { ...state.data, [action.payload.chatData.uid]: { ...action.payload.chatData } }
      };

    default:
      return state
  }
}