import firebase from '~/firebase/index';

export const loginUser = async (username, password) => {
  return await firebase.auth().signInWithEmailAndPassword(username, password);
};

export const signupUser = async (username, password) => {
  return await firebase.auth().createUserWithEmailAndPassword(username, password);
};

export default {
  loginUser,
  signupUser,
};
