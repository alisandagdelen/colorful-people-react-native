import { createLogic } from 'redux-logic';
import * as types from '~/src/actions/types'
import { fetchChatMessagesSuccess } from "~/src/actions/chats";

export const chatSelectedLogic = createLogic({

  type: types.FETCH_CHAT_MESSAGES,
  cancelType: types.CANCEL_FETCH_CHAT_MESSAGES,
  latest: true,

  process({ getState, action, firebase }, dispatch, done) {
    const messagesRef = firebase.database().ref(`messages/${action.payload.name}`);

    const dispatchSuccess = (snapshot) => {
      dispatch(fetchChatMessagesSuccess(action.payload.name, snapshot.val() || []))
    };

    return messagesRef.once('value')
      .then(dispatchSuccess)
      .then(done)
  }
});

