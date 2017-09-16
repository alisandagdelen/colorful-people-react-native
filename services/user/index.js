import firebase from '~/firebase/index';

export const loginUser = async (username, password) => {
  return await firebase.auth().signInWithEmailAndPassword(username, password);
};

export const signupUser = async (username, password) => {
  return await firebase.auth().createUserWithEmailAndPassword(username, password);
};

signupUser('test1@gmail.com', 'test22').then(r => console.log(r)).catch(e => console.log(e))

export default {
  loginUser,
  signupUser,
};
