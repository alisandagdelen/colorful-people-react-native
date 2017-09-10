import { createLogic } from 'redux-logic';
import * as types from '~/src/actions/types'
import { addMessageSuccess } from "~/src/actions/messages";

export const addMessageLogic = createLogic({

  type: types.ADD_MESSAGE,
  cancelType: types.CANCEL_ADD_MESSAGE,
  latest: true,

  process({ action, getState, firebase }, dispatch, done) {
    const { chat, content, sender } = action.payload;
    const messagesRef = firebase.database().ref(`messages/${chat}`);
    const newMessageRef = messagesRef.push();
    const key = newMessageRef.key;
    const message = { key, sender, content, chat };

    const dispatchSuccess = () => {
      dispatch(addMessageSuccess(action.payload.chat, message));
    };

    newMessageRef.set( message )
      .then(dispatchSuccess)
      .then(done)
  }
});
