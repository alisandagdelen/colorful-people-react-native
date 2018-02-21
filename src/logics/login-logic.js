import { createLogic } from 'redux-logic';
import { Toast } from 'native-base';
import { types, actions } from '../actions/index';
const { signInSuccess, fetchChats } = actions.user;
const { resetToHome } = actions.nav;
import userService from '../../services/user-service';
import pushTokenService from '../../services/push-token-service';
import { showToast } from "../helpers/index";
import { signInButtonLoading, signInButtonReset } from "../side-effects/login-side-effects";

export const loginApplyLogic = createLogic({

  type: types.LOGIN_APPLY,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      signInButtonLoading(dispatch);
      const { username, password } = action.payload;
      const res = await userService.loginUser(username, password);
      dispatch(signInSuccess(res));
      await pushTokenService.createPushToken(res.uid);
      dispatch(fetchChats(res.chats));
      dispatch(resetToHome());
      dispatch(actions.login.success);
      signInButtonReset(dispatch);
      done();
    }

    catch (err) {
      showToast(err.message);
      console.log(err.message);
      signInButtonReset(dispatch);
      done(err);
    }
  }
});

