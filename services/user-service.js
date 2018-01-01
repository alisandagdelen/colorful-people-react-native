// @flow

import { AsyncStorage } from 'react-native';
import firebase from '../firebase/index';

export const getUserInfo = async (uid: string) => {
  return await firebase.database().ref(`users/${uid}`).orderByKey().once('value');
};


const saveCredentialsToAsyncStorage = async (username: string, password: string, userData: Object) => {
  const credential = firebase.auth.EmailAuthProvider.credential(username, password);

  await AsyncStorage.setItem('userData', JSON.stringify(userData));
  await AsyncStorage.setItem('credential', credential);
};


export const loginUser = async (username: string, password: string) => {
  const data = await firebase.auth().signInWithEmailAndPassword(username, password);
  const userInfo = await getUserInfo(data.uid);

  const userData = {
    ...data.toJSON(),
    colorId: userInfo.val().colorId,
    chats: userInfo.val().chats
  };

  await saveCredentialsToAsyncStorage(username, password, userData);

  return userData;
};


export const createUser = async (username: string, password: string) => {
  const data = await firebase.auth().createUserWithEmailAndPassword(username, password);
  const userInfo = await getUserInfo(data.uid);
  let userInfoData = userInfo.val();

  if (!userInfoData) {
    userInfoData || await firebase.database().ref(`users/${data.uid}`).orderByKey().once('child_added');
  }

  const userData = {
    ...data.toJSON(),
    colorId: userInfo.val().colorId,
  };

  await saveCredentialsToAsyncStorage(username, password, userData);

  return userData;
};


export const searchByColorId = async (colorId: string) => {
  return await firebase.database().ref('users').orderByChild('colorId').equalTo(colorId).once('value');
};


export default {
  loginUser,
  createUser,
  searchByColorId,
};
