import { types } from '~/src/actions/index'

const data___ = {
  ['keyOfChat']: { ['messageKey']: Array }
};

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

    case types.CHAT_FETCH_MESSAGE_SUCCESS:
      const newMessages = state.data[payload.name] ? [...state.data[payload.name]] : [];
      newMessages.push(payload.message);
      console.log(newMessages)
      return { ...state, data: { ...state.data, [payload.name]: newMessages } };

    default:
      return state
  }
}