import { createLogic } from 'redux-logic';
import { types, actions } from '~/src/actions/index';
const { fetchChatMessagesSuccess, fetchChatMessagesFailure } = actions.chat;

export const chatSelectedLogic = createLogic({

  type: types.FETCH_CHAT_MESSAGES,
  cancelType: types.CANCEL_FETCH_CHAT_MESSAGES,
  latest: true,

  async process({ action, firebase }, dispatch, done) {
    try {
      const messagesRef = firebase.database().ref(`messages/${action.payload.name}`);
      const snapshot = await messagesRef.orderByKey().once('value');
      const messages = Object.values(snapshot.val()) || [];
      dispatch(fetchChatMessagesSuccess(action.payload.name, messages));
      done();
    }

    catch (err) {
      dispatch(fetchChatMessagesFailure(err));
      done(err);
    }
  }
});

