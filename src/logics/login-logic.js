import { createLogic } from 'redux-logic';
import { Toast } from 'native-base';
import { types, actions } from '~/src/actions/index';
const { signInSuccess } = actions.user;
const { navigateToHome } = actions.nav;
import userService from '~/services/user/index'

export const chatSelectedLogic = createLogic({

  type: types.LOGIN_APPLY,
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
      Toast.show({
        text: err.message,
        position: 'bottom',
        buttonText: 'Okay'
      });
      console.log(err.message);
      done(err);
    }
  }
});

