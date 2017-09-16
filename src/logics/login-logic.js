import { createLogic } from 'redux-logic';
import { types, actions } from '~/src/actions/index';
const { signInSuccess } = actions.user;
import { NavigationActions } from 'react-navigation'



export const chatSelectedLogic = createLogic({

  type: types.SIGN_IN,
  latest: true,

  async process({ action, firebase, getState }, dispatch, done) {
    try {
      const { username, password } = action.payload;
      const res = await firebase.auth().signInWithEmailAndPassword(username, password);
      dispatch(signInSuccess(res));

      console.log(getState())
      const navigateAction = NavigationActions.navigate({
        routeName: 'Home',
        params: {},
        action: NavigationActions.navigate({ routeName: 'Login' })
      });
      this.props.navigation.dispatch(navigateAction);

      done();
    }

    catch (err) {
      console.log(err)
      done(err);
    }
  }
});

