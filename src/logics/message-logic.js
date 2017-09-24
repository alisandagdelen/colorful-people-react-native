import { createLogic } from 'redux-logic';
import { types, actions } from '../actions/index';
const { addMessageSuccess } = actions.message;
import messageService from '../../services/message-service'
import { showToast } from "../helpers/index";

export const addMessageLogic = createLogic({

  type: types.MESSAGE_ADD_MESSAGE,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      dispatch(actions.message.setTyping(''));
      const { chatUid, content, sender } = action.payload;
      const message = await messageService.createMessage(chatUid, sender, content);
      dispatch(addMessageSuccess(chatUid, message));
      done();
    }

    catch (err) {
      showToast(err.message);
      done(err);
    }
  }
});
