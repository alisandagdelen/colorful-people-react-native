import * as types from '~/src/actions/types'
import { last } from 'lodash';

const initialState = {
  typing: '',
  currentChannel: 'can',
  currentData: [],
  data: [
    { key: 1, content: 'naber', from: 'can' },
    { key: 2, content: 'meraba', from: 'eylem' },
  ],
};

const addMessage = (prevState, { from, content }) => {
  const { data } = prevState;
  data.push({ from, content, key: last(data).key + 1 });
  return data
};

const getMessagesFrom = (prevState, from) => {
  return prevState.data.filter(m => m.from === from)
};


export default function (state = initialState, action) {
  switch (action.type) {

    case types.ADD_MESSAGE:
      return { ...state, data: addMessage(state, action.payload) };

    case types.CHANNEL_SELECTED:
      return { ...state, currentData: getMessagesFrom(state, action.payload.name) };

    default:
      return state
  }
}