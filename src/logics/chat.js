import { createLogic } from 'redux-logic';
import * as types from '~/src/actions/types'

export const updateChatLogic = createLogic({

  type: types.CHAT_SELECTED,
  cancelType: types.CANCEL_CHAT_SELECTED,
  latest: true,

  process({ getState, action, firebase }, dispatch, done) {
    done()
  }
});