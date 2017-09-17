import firebase from '~/firebase/index';

export const getUserInfo = async (uid) => {
  return await firebase.database().ref(`users/${uid}`).orderByKey().once('value');
};

export const loginUser = async (username, password) => {
  const data = await firebase.auth().signInWithEmailAndPassword(username, password);
  const userInfo = await getUserInfo(data.uid);
  return {...data.toJSON(), colorId: userInfo.val().colorId};
};

export const createUser = async (username, password) => {
  const data = await firebase.auth().createUserWithEmailAndPassword(username, password);
  const userInfo = await getUserInfo(data.uid);
  return {...data.toJSON(), colorId: userInfo.val().colorId};
};

export const searchByColorId = async (colorId) => {
  return await firebase.database().ref('users').orderByChild('colorId').equalTo(colorId).once('value');
};

export default {
  loginUser,
  createUser,
};
