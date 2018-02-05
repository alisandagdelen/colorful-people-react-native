import { createLogic } from 'redux-logic';
import { types, actions } from '../actions/index';
import { showToast } from "../helpers/index";
import { AsyncStorage } from 'react-native';
const { resetToLogin } = actions.nav;


export const profileLogic = createLogic({
  type: types.PROFILE_LOGOUT,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      await AsyncStorage.clear();
      dispatch(resetToLogin());
      done();
    }

    catch (err) {
      showToast(err);
      done(err);
    }
  }
});
