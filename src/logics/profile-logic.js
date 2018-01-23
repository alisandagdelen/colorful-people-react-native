import { createLogic } from 'redux-logic';
import { types, actions } from '../actions/index';
import { showToast } from "../helpers/index";
import { AsyncStorage } from 'react-native';
const { logout } = actions.profile;


export const profileLogic = createLogic({
  type: types.PROFILE_LOGOUT,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
        await AsyncStorage.clear();
        dispatch(logout());
        }

    catch (err) {
      showToast(err);
      done(err);
    }
  }
});
