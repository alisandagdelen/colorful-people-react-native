import { createLogic } from 'redux-logic';
import { types, actions } from '~/src/actions/index';
import userService from '~/services/user-service'
import chatService from '~/services/chat-service'
import { showToast } from "../helpers/index";

export const processColorId = createLogic({

  type: types.SEARCH_CHANGE_COLOR_ID,
  latest: true,

  validate({action, getState}, allow) {
    let { colorId, selectedColor } = getState().search;
    const { colors } = getState();
    const { text } = action.payload;
    const lastChar = text.slice(-1);

    colorId += `${colors[selectedColor]}${lastChar}`;
    action.payload.colorId = colorId;

    allow(action)
  },

  async process({ action }, dispatch, done) {
    if (action.payload.colorId.length !== 8) {
      return done();
    }

    try {
      const res = await userService.searchByColorId(action.payload.colorId);

      if (!res.val) {
        return done()
      }

      const uid = Object.keys(res.val())[0];
      const data = { ...res.child(uid).val(), uid };
      dispatch(actions.search.foundByColorId(data));
      done();
    }

    catch (err) {
      showToast(err.message);
      done(err);
    }
  }
});


export const startChat = createLogic({

  type: types.SEARCH_START_CHAT,
  latest: true,

  async process({ action, getState }, dispatch, done) {
    try {
      const chatData = await chatService.startChat(
        getState().users.uid,
        getState().users.email,
        action.payload.userUid,
        action.payload.userEmail,
      );

      dispatch(actions.search.startChatSuccess(chatData));
      done()
    }

    catch (err) {
      showToast(err.message);
      done(err);
    }
  }
});

