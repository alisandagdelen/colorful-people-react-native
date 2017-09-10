import * as types from '~/src/actions/types'
import { last, filter, values, merge } from 'lodash';

const initialState = {
  typing: '',
  data: {},
};

const addMessage = (prevState, { currentChat, message }) => {
  const { data } = prevState;

  const newChat = Object.assign([], data[currentChat]);
  newChat.push(message);

  return { ...data, [currentChat]: newChat };
};


export default function (state = initialState, { type, payload }) {
  switch (type) {

    case types.TYPING:
      return { ...state, typing: payload.text };

    case types.ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        data: addMessage(state, payload)
      };

    case types.FETCH_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        data: { ...state.data, [payload.name]: payload.messages }
      };

    default:
      return state
  }
}