import { createLogic } from 'redux-logic';
import { types, actions } from '~/src/actions/index';
const { addMessageSuccess } = actions.message;

export const addMessageLogic = createLogic({

  type: types.ADD_MESSAGE,
  cancelType: types.CANCEL_ADD_MESSAGE,
  latest: true,

  async process({ action, firebase }, dispatch, done) {
    const { chat, content, sender } = action.payload;
    const messagesRef = firebase.database().ref(`messages/${chat}`);
    const newMessageRef = messagesRef.push();
    const key = newMessageRef.key;
    const message = { key, sender, content, chat };

    await newMessageRef.set(message);
    dispatch(addMessageSuccess(action.payload.chat, message));
    done();
  }
});
