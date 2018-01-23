import { createLogic } from 'redux-logic';
import { types, actions } from '../actions/index';
import { showToast } from "../helpers/index";
import { AsyncStorage } from 'react-native';
const { logout } = actions.profile;


export const profileLogic = createLogic({
  type: types.PROFILE_LOGOUT,
  latest: true,

  async process({ getState }, dispatch, done) {
    try {
        await AsyncStorage.clear();
        }

    catch (err) {
      showToast(err);
      done(err);
    }
  }
});
