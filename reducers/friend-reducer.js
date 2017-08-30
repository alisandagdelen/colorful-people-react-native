import * as types from '~/actions/types'

const initialState = {
  friends: ['can', 'eylem'],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.RECEIVED_NEW_MESSAGE:
      return {...state, messages: addMessage(state, action) };
    default:
      return state
  }
}