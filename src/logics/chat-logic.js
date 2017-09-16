import { createLogic } from 'redux-logic';
import { types, actions } from '~/src/actions/index';
const { fetchMessagesSuccess, fetchMessagesFailure } = actions.chat;
import chatService from '~/services/chat/index';

export const chatSelectedLogic = createLogic({

  type: types.CHAT_FETCH_MESSAGES,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      const snapshot = await chatService.fetchMessages(action.payload.name);
      const messages = Object.values(snapshot.val()) || [];
      dispatch(fetchMessagesSuccess(action.payload.name, messages));
      done();
    }

    catch (err) {
      dispatch(fetchMessagesFailure(err));
      done(err);
    }
  }
});

