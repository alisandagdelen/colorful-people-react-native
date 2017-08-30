import * as types from '~/actions/types'

const initialState = {
  messages: {},
};

const addMessage = (prevState, { from, content }) => {
  messages[from] = messages[from] || {};
  messages[from].content = content;
  return messages
};


export default function(state = initialState, action) {
  switch(action.type) {
    case types.RECEIVED_NEW_MESSAGE:
      return {...state, messages: addMessage(state, action) };
    default:
      return state
  }
}