import { createLogic } from 'redux-logic';
import { types, actions } from '~/src/actions/index';
const { fetchMessagesSuccess, fetchMessagesFailure } = actions.chat;
import chatService from '~/services/chat/index';
import { showToast } from "../helpers/index";

export const chatSelectedLogic = createLogic({

  type: types.CHAT_FETCH_MESSAGES,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      const snapshot = await chatService.fetchMessages(action.payload.uid);
      const messages = snapshot.val ? Object.values(snapshot.val() || {}) : [];
      dispatch(fetchMessagesSuccess(action.payload.uid, messages));
      done();
    }

    catch (err) {
      showToast(err.message);
      dispatch(fetchMessagesFailure(err));
      done(err);
    }
  }
});

