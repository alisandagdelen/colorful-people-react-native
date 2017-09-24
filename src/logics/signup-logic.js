import { createLogic } from 'redux-logic';
import { types, actions } from '../actions/index';
const { signUpSuccess } = actions.user;
const { resetToHome } = actions.nav;
import userService from '../../services/user-service';
import { showToast } from "../helpers/index";

export const signupApplyLogic = createLogic({

  type: types.SIGN_UP_APPLY,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      const { username, password } = action.payload;
      const res = await userService.createUser(username.trim(), password.trim());
      dispatch(signUpSuccess(res));
      dispatch(resetToHome());
      done();
    }

    catch (err) {
      showToast(err.message)
      console.log(err.message);
      done(err);
    }
  }
});

