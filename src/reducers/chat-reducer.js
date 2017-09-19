import { types } from '~/src/actions/index'

const initialState = {
  currentChat: null,
  data: {
    can: { name: 'can', uid: '-KuLo4us9Dun9TRWI_wE',
      members: {
      'AwrkIuBWp3cqoAyXOVlMaTIND012': "test20@gmail.com",
      'rAtMPV1lekUe3pHJQxcZyXnuhhQ2': "ozan@gmail.com"
      }
    },
    ozan: { name: 'ozan', uid: 2 },
  },
};

export default function(state = initialState, action) {
  switch(action.type) {

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