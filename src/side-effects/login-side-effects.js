import { defaults } from '../reducers/login-reducer';
import { actions } from '../actions/index';

let signInButtonInterval;


export const signInButtonLoading = (dispatch) => {
  const intervalTime = 300;
  let callCount = 1, callLimit = 4;

  const callback = () => {

    if (callCount > callLimit) {
      callCount = 1;
    }

    const dotsArray = new Array(callCount).fill('.');
    const text = dotsArray.join('');

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