import { createLogic } from 'redux-logic';
import { types, actions } from '../actions/index';
import chatService from '../../services/chat-service';
import { showToast } from "../helpers/index";
import { observeChats } from "../../observers/chat-observer";


export const observeChatsLogic = createLogic({

  type: types.USER_FETCH_CHATS,
  latest: true,
  warnTimeout: 0,

  async process({ getState }, dispatch, done) {
    const { uid, email } = getState().users;

    try {
      await observeChats(uid, async (chat) => {
        const data = await chatService.fetchChatById(chat.key, { currentUserEmail: email });
        dispatch(actions.user.fetchChatSuccess(data), { allowMore: true })
      });
    }

    catch (err) {
      showToast(err);
      done(err);
    }
  }
});
