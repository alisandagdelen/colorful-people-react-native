import * as types from '~/src/actions/types'
import { last, filter, values } from 'lodash';

const initialState = {
  typing: '',
  currentChat: 'can',
  currentData: [],
  data: {
    can: [{ key: 1, content: 'naber', from: 'can' }],
    ozan: [{ key: 2, content: 'meraba', from: 'ozan' }]
  },
};

const addMessage = (prevState, { chat }) => {
  const { data } = prevState;
  const nextKey = last(data[chat]).key + 1;
  data[chat].push({ from: 'ozan', content: prevState.typing, key: nextKey });
  return data
};

const getCurrentChatMessages = (prevState) => {
  return values(prevState.data[prevState.currentChat])
};


export default function (state = initialState, action) {
  switch (action.type) {

    case types.TYPING:
      return { ...state, typing: action.payload.text };

    case types.ADD_MESSAGE:
      return {
        ...state,
        data: addMessage(state, action.payload),
        currentData: getCurrentChatMessages(state)
      };

    case types.CHAT_SELECTED:
      return {
        ...state,
        currentChat: action.payload.name,
        currentData: getCurrentChatMessages(state)
      };

    default:
      return state
  }
}