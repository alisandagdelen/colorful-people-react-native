import { AppNavigator } from '~/src/app-navigator';
import { types } from '~/src/actions/index';
import { NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

export default function (state = initialState, action) {
  let nextState;
  // const nextState = AppNavigator.router.getStateForAction(action, state);

  switch (action.type) {

    case types.NAV_NAVIGATE_TO_HOME:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Home' })],
        }),
        state
      );
      break;

    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }


  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}