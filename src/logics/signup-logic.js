import { createLogic } from 'redux-logic';
import { Toast } from 'native-base';
import { types, actions } from '~/src/actions/index';
const { signUpSuccess } = actions.user;
const { navigateToHome } = actions.nav;
import userService from '~/services/user/index';

export const signupApplyLogic = createLogic({

  type: types.SIGN_UP_APPLY,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      const { username, password } = action.payload;
      const res = await userService.createUser(username, password);
      dispatch(signUpSuccess(res));
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

