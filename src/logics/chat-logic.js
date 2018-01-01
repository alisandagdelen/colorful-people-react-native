import { createLogic } from 'redux-logic';
import { types, actions } from '../actions/index';
const { fetchMessagesSuccess, fetchMessageSuccess, fetchMessagesFailure } = actions.chat;
import { showToast } from "../helpers/index";
import { observeChatMessages } from "../../observers/chat-observer";

export const observeChatMessagesLogic = createLogic({

  type: types.CHAT_FETCH_MESSAGES,
  latest: true,
  warnTimeout: 0,

  async process({ action }, dispatch, done) {
    try {
      const handler = message => {
        const options = { allowMore: true };
        dispatch(fetchMessageSuccess(action.payload.uid, message.val()), options);
      };

      observeChatMessages(action.payload.uid, handler);
    }

    catch (err) {
      showToast(err.message);
      done(err);
    }
  }
});

