import { AppNavigator } from '../navigations/app-navigator';
import { types } from '../actions/index';
import { NavigationActions } from 'react-navigation';

// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));
const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());

export default function (state = initialState, action) {
  let nextState;

  switch (action.type) {

    case types.NAV_RESET_TO_LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })],
          key: null
        }),
        state
      );
      break;

    case types.NAV_RESET_TO_HOME:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Home' })],
          key: null
        }),
        state
      );
      break;

    case types.NAV_NAVIGATE_TO_CHAT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Chat' }),
        state,
      );
      break;

    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }


  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}