import { createLogic } from 'redux-logic';
import * as types from '~/src/actions/types'
import { fetchChatMessagesSuccess,  fetchChatMessagesFailure} from "~/src/actions/chat-actions";

export const chatSelectedLogic = createLogic({

  type: types.FETCH_CHAT_MESSAGES,
  cancelType: types.CANCEL_FETCH_CHAT_MESSAGES,
  latest: true,

  process({ getState, action, firebase }, dispatch, done) {
    const messagesRef = firebase.database().ref(`messages/${action.payload.name}`);

    const dispatchSuccess = (snapshot) => {
      const messages = Object.values(snapshot.val()) || [];
      dispatch(fetchChatMessagesSuccess(action.payload.name, messages))
    };

    const error = (err) => {
      dispatch(fetchChatMessagesFailure(err))
    };


    return messagesRef.orderByKey().once('value')
      .then(dispatchSuccess)
      .then(done)
      .catch(error)
  }
});

