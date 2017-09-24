import { createLogic } from 'redux-logic';
import { types, actions } from '../actions/index';
import chatService from '../../services/chat-service';
import { showToast } from "../helpers/index";
import { observeChats } from "../../observers/chat-observer";

export const fetchChatsLogic = createLogic({

  type: types.USER_FETCH_CHATS,
  latest: true,

  async process({ getState }, dispatch, done) {
    try {
      const { chats, email } = getState().users;
      const chatUids = Object.keys(chats || {});
      const data = await chatService.fetchChatsById(chatUids, { currentUserEmail: email });
      dispatch(actions.user.fetchChatsSuccess(data));
      done();
    }

    catch (err) {
      showToast(err.message);
      done(err);
    }
  }
});


export const observeChatsLogic = createLogic({

  type: types.CHAT_FETCH_MESSAGES,
  latest: true,
  warnTimeout: 0,

  process({ getState }, dispatch) {
    return;
    const { uid } = getState().users;
    try {
      observeChats(uid, chat => {
        dispatch(actions.user.fetchChatSuccess(uid, message.val()),
          { allowMore: true })
      });
    }

    catch (err) {
      showToast(err.message);
      done(err);
    }
  }
});
