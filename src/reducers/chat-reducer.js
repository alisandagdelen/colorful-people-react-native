import { types } from '~/src/actions/index'

const initialState = {
  currentChat: null,
  data: {
    can: { name: 'can', key: 1 },
    ozan: { name: 'ozan', key: 2 },
  },
};

export default function(state = initialState, action) {
  switch(action.type) {

    case types.CHAT_SELECTED:
      return { ...state, currentChat: action.payload.name };

    default:
      return state
  }
}