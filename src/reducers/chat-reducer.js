import * as types from '~/src/actions/types'

const initialState = {
  currentChat: null,
  data: {
    can: { name: 'can', key: 1 },
    ozan: { name: 'ozan', key: 2 },
  },
};

export default function(state = initialState, action) {
  switch(action.type) {

    case types.RECEIVED_NEW_MESSAGE:
      return { ...state, messages: addMessage(state, action) };

    case types.CHAT_SELECTED:
      return { ...state, currentChat: action.payload.name };

    default:
      return state
  }
}