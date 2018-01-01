import firebase from '../firebase/index'

export const getDateRelativeToServer = async () => {
  const offsetRef = firebase.database().ref(".info/serverTimeOffset");
  const offsetSnapshot = await offsetRef.once("value");
  const offset = offsetSnapshot.val();
  return new Date().getTime() + offset;
};
