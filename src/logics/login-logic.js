import { createLogic } from 'redux-logic';
import { Toast } from 'native-base';
import { types, actions } from '../actions/index';
const { signInSuccess, fetchChats } = actions.user;
const { navigateToHome } = actions.nav;
import userService from '../../services/user-service'
import { showToast } from "../helpers/index";

export const loginApplyLogic = createLogic({

  type: types.LOGIN_APPLY,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      const { username, password } = action.payload;
      const res = await userService.loginUser(username, password);
      dispatch(signInSuccess(res));
      dispatch(fetchChats(res.chats));
      dispatch(navigateToHome());
      done();
    }

    catch (err) {
      showToast(err.message);
      console.log(err.message);
      done(err);
    }
  }
});

