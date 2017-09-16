import { createLogic } from 'redux-logic';
import { types, actions } from '~/src/actions/index';
const { fetchChatMessagesSuccess, fetchChatMessagesFailure } = actions.chat;
import chatService from '~/services/chat/index';

export const chatSelectedLogic = createLogic({

  type: types.FETCH_CHAT_MESSAGES,
  cancelType: types.CANCEL_FETCH_CHAT_MESSAGES,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      const snapshot = await chatService.fetchMessages(action.payload.name);
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

