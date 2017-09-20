import { types } from '~/src/actions/index'

const initialState = {
  typing: '',
  data: {},
};

const addMessage = (prevState, { chatUid, message }) => {
  const { data } = prevState;

  const newChat = Object.assign([], data[chatUid]);
  newChat.push(message);

  return { ...data, [chatUid]: newChat };
};


export default function (state = initialState, { type, payload }) {
  switch (type) {

    case types.MESSAGE_SET_TYPING:
      return { ...state, typing: payload.text };

    case types.MESSAGE_ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        data: addMessage(state, payload)
      };

    case types.CHAT_FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        data: { ...state.data, [payload.name]: payload.messages }
      };

    default:
      return state
  }
}