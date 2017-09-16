import firebase from '~/firebase/index';

export const loginUser = async (username, password) => {
  return await firebase.auth().signInWithEmailAndPassword(username, password);
};


export default {
  loginUser
};
