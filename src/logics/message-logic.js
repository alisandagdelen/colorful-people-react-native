import { createLogic } from 'redux-logic';
import { types, actions } from '~/src/actions/index';
const { addMessageSuccess } = actions.message;
import messageService from '~/services/message'

export const addMessageLogic = createLogic({

  type: types.MESSAGE_ADD_MESSAGE,
  latest: true,

  async process({ action }, dispatch, done) {
    const { chat, content, sender } = action.payload;
    const message = await messageService.createMessage(chat, sender, content);
    dispatch(addMessageSuccess(action.payload.chat, message));
    done();
  }
});
