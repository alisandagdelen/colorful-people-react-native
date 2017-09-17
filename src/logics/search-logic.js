import { createLogic } from 'redux-logic';
import { types, actions } from '~/src/actions/index';
import userService from '~/services/user/index'

export const processColorId = createLogic({

  type: types.SEARCH_CHANGE_COLOR_ID,
  latest: true,

  validate({action, getState}, allow, reject) {
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

    const res = await userService.searchByColorId(action.payload.colorId);

    if (res.val) {
      const uid = Object.keys(res.val())[0];
      const data = { ...res.child(uid).val(), uid };
      console.log(data)
      dispatch(actions.search.foundByColorId(data))
    }
    done()
  }
});


