import * as types from '~/src/actions/types'
import { last, filter, values, merge } from 'lodash';

const initialState = {
  typing: '',
  data: {
    can: [{ key: 1, content: 'naber', from: 'can' }],
    ozan: [{ key: 2, content: 'meraba', from: 'ozan' }]
  },
};

const addMessage = (prevState, currentChat) => {
  const { data } = prevState;
  const nextKey = last(data[currentChat]).key + 1;

  const newChat = Object.assign([], data[currentChat]);
  newChat.push({ from: 'ozan', content: prevState.typing, key: nextKey });

  const newData = Object.assign({}, data);
  newData[currentChat] = newChat;

  return newData;
};


export default function (state = initialState, action) {
  switch (action.type) {

    case types.TYPING:
      return { ...state, typing: action.payload.text };

    case types.ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        data: addMessage(state, action.payload.currentChat)
      };

    default:
      return state
  }
}