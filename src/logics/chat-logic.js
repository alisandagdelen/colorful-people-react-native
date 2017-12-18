import { createLogic } from 'redux-logic';
import { types, actions } from '../actions/index';
const { fetchMessagesSuccess, fetchMessageSuccess, fetchMessagesFailure } = actions.chat;
import chatService from '../../services/chat-service';
import { showToast } from "../helpers/index";
import { observeChatMessages } from "../../observers/chat-observer";

// export const chatSelectedLogic = createLogic({
//
//   type: types.CHAT_FETCH_MESSAGES,
//   latest: true,
//
//   async process({ action }, dispatch, done) {
//     try {
//       const snapshot = await chatService.fetchMessages(action.payload.uid);
//       const messages = snapshot.val ? Object.values(snapshot.val() || {}) : [];
//       dispatch(fetchMessagesSuccess(action.payload.uid, messages));
//       done();
//     }
//
//     catch (err) {
//       showToast(err.message);
//       dispatch(fetchMessagesFailure(err));
//       done(err);
//     }
//   }
// });


export const observeChatMessagesLogic = createLogic({

  type: types.CHAT_FETCH_MESSAGES,
  latest: true,
  warnTimeout: 0,

  process({ action }, dispatch, done) {
    try {
      observeChatMessages(action.payload.uid, message => {
        dispatch(fetchMessageSuccess(action.payload.uid, message.val()),
          { allowMore: true })
      });
    }

    catch (err) {
      showToast(err.message);
      done(err);
    }
  }
});

