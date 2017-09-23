import { createLogic } from 'redux-logic';
import { types, actions } from '../actions/index';
import chatService from '../../services/chat-service';
import { showToast } from "../helpers/index";

export const fetchChatsLogic = createLogic({

  type: types.USER_FETCH_CHATS,
  latest: true,

  async process({ action, getState }, dispatch, done) {
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

