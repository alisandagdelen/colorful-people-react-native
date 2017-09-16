import { createLogic } from 'redux-logic';
import { types, actions } from '~/src/actions/index';
const { signInSuccess } = actions.user;
const { navigateToHome } = actions.nav;


export const chatSelectedLogic = createLogic({

  type: types.SIGN_IN,
  latest: true,

  async process({ action, firebase }, dispatch, done) {
    try {
      const { username, password } = action.payload;
      const res = await firebase.auth().signInWithEmailAndPassword(username, password);
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

