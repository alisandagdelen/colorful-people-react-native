import { createLogic } from 'redux-logic';
import * as types from '~/src/actions/types'
import { addMessageSuccess } from "~/src/actions/messages";

export const addMessageLogic = createLogic({

  type: types.ADD_MESSAGE,
  cancelType: types.CANCEL_ADD_MESSAGE,
  latest: true,

  process({ action }, dispatch, done) {
    dispatch(addMessageSuccess(action.payload.chat));
    done()
  }
});
