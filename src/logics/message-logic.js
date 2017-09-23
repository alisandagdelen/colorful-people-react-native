import { createLogic } from 'redux-logic';
import { types, actions } from '../actions/index';
const { addMessageSuccess } = actions.message;
import messageService from '../../services/message-service'

export const addMessageLogic = createLogic({

  type: types.MESSAGE_ADD_MESSAGE,
  latest: true,

  async process({ action }, dispatch, done) {
    const { chatUid, content, sender } = action.payload;
    const message = await messageService.createMessage(chatUid, sender, content);
    dispatch(addMessageSuccess(chatUid, message));
    done();
  }
});
