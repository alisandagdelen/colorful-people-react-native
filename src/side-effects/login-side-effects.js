import { defaults } from '../reducers/login-reducer';
import { actions } from '../actions/index';

let signInButtonInterval;


export const signInButtonLoading = (dispatch) => {
  const intervalTime = 300;
  let callCount = 0;

  const callback = () => {

    if (callCount > 2) {
      callCount = 0;
    }

    let text = '.';

    if (callCount === 1) {
      text = '..';
    }

    if (callCount === 2) {
      text = '...';
    }

    dispatch(actions.login.changeSignInButtonText(text));
    callCount += 1;
  };

  callback();
  signInButtonInterval = setInterval(callback, intervalTime);
};


export const signInButtonReset = (dispatch) => {
  clearInterval(signInButtonInterval);
  dispatch(actions.login.changeSignInButtonText(defaults.signInButtonText));
};