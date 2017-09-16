import { createLogic } from 'redux-logic';
import { types, actions } from '~/src/actions/index';
const { signInSuccess } = actions.user;
const { navigateToHome } = actions.nav;
import userService from '~/services/user/index'

export const chatSelectedLogic = createLogic({

  type: types.USER_SIGN_IN,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      const { username, password } = action.payload;
      const res = await userService.loginUser(username, password);
      dispatch(signInSuccess(res));
      dispatch(navigateToHome());
      done();
    }

    catch (err) {
      console.log(err.message);
      done(err);
    }
  }
});

