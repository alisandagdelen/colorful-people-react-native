// @flow

import firebase from '../firebase/index';

export const getUserInfo = async (uid: string) => {
  return await firebase.database().ref(`users/${uid}`).orderByKey().once('value');
};

export const loginUser = async (username: string, password: string) => {
  const data = await firebase.auth().signInWithEmailAndPassword(username, password);
  const userInfo = await getUserInfo(data.uid);
  return {...data.toJSON(), colorId: userInfo.val().colorId, chats: userInfo.val().chats };
};

export const createUser = async (username: string, password: string) => {
  const data = await firebase.auth().createUserWithEmailAndPassword(username, password);
  const userInfo = await getUserInfo(data.uid);
  let userInfoData = userInfo.val();

  if (!userInfoData) {
    userInfoData || await firebase.database().ref(`users/${data.uid}`).orderByKey().once('child_added');
  }

  return {...data.toJSON(), colorId: userInfoData.colorId};
};

export const searchByColorId = async (colorId: string) => {
  return await firebase.database().ref('users').orderByChild('colorId').equalTo(colorId).once('value');
};

export default {
  loginUser,
  createUser,
  searchByColorId,
};
