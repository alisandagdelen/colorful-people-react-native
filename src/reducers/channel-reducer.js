import * as types from '~/src/actions/types'

const initialState = {
  data: [
    { name: 'can', key: 1 },
    { name: 'eylem', key: 2 },
  ],
};

export default function(state = initialState, action) {
  switch(action.type) {

    case types.RECEIVED_NEW_MESSAGE:
      return {...state, messages: addMessage(state, action) };

    default:
      return state
  }
}